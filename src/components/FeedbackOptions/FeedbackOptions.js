
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';



  function FeedbackOptions({ options, onLeaveFeedback }) {

    function transName(nam) {
      return nam.charAt(0).toUpperCase() + nam.slice(1)
    }

    return (
      <div className={css.FidbackList}>
        {options.map((option, idx) => <button 
            className={css.FidbackBtn}
            key={option} 
            onClick={()=> onLeaveFeedback(idx)}
          >{transName(option)}</button>)}
      </div>
  )
}

export default FeedbackOptions;




FeedbackOptions.propType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
