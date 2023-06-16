
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';



function FeedbackOptions({ options, onLeaveFeedback }) {

    return (
      <div className={css.FidbackList}>
        {options.map(option => <button 
            className={css.FidbackBtn}
            key={option} 
            onClick={()=> onLeaveFeedback(option)}
          >{option.charAt(0).toUpperCase() + option.slice(1)}</button>)}
      </div>
    )
  
}

export default FeedbackOptions;




FeedbackOptions.propType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
