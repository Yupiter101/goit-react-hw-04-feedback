import React from "react";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";


function App() {

  const [good, setGood] = React.useState(0);
  const [neutral, setNeutral] = React.useState(0);
  const [bad, setBad] = React.useState(0);
  const setStates = [setGood, setNeutral, setBad];

  const handleBtnFeesback = (idx) => {
    setStates[idx](prevState => prevState + 1);
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const perSent = good ? good / countTotalFeedback() * 100 : 0;
    return perSent.toFixed(1);
  }


  return (
      <div className="Container">

        <Section title={"Please liave feedback"}>
          <FeedbackOptions
            options={Object.keys({good, neutral, bad})} 
            onLeaveFeedback={handleBtnFeesback}
          ></FeedbackOptions>
        </Section>

        
        <Section title={"Statistic"}>
          {
            countTotalFeedback() 
            ? 
            <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={countTotalFeedback} 
              positivePercentage={countPositiveFeedbackPercentage}
            ></Statistics>
            :
            <Notification
              message="There is no feedback"
            ></Notification>
          }
        </Section>
      </div>
    )
  // }
}

export default App;