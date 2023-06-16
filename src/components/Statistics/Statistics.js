
import PropTypes from 'prop-types';
import css from "./Statistics.module.css";



function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
      <>
        <ul className={css.StatList}>
          <li className={css.StatItem}>good:<span>{good}</span></li>
          <li className={css.StatItem}>neutral:<span>{neutral}</span></li>
          <li className={css.StatItem}>bad:<span>{bad}</span></li>

          <li className={css.StatItem}>Total:<span>{total()}</span></li>
          <li className={css.StatItem}>Positve feedback:<span>{positivePercentage()}%</span></li>
        </ul>
      </>
    )
}

export default Statistics;



Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired
}