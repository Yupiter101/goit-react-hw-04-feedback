import React from "react";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";


class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleBtnFeesback = (nameBtn) => {
    const btnLoCase = nameBtn.toLowerCase();
    this.setState(prevState => ({[btnLoCase]: prevState[btnLoCase] + 1}));
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => (acc += val), 0);
  }

  countPositiveFeedbackPercentage = () => {
    const perSent = this.state.good ? this.state.good / this.countTotalFeedback() * 100 : 0;
    return perSent.toFixed(1);
    
  }


  render() {
    const {good, neutral, bad} = this.state;

    return (
      <div className="Container">

        <Section title={"Please liave feedback"}>
          <FeedbackOptions
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.handleBtnFeesback}
          ></FeedbackOptions>
        </Section>

        
        <Section title={"Statistic"}>
          {
            this.countTotalFeedback() 
            ? 
            <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={this.countTotalFeedback} 
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
            :
            <Notification
              message="There is no feedback"
            ></Notification>
          }
        </Section>
      </div>
    )
  }
}

export default App;