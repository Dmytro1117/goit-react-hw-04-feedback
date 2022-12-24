import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <ul>
      <li>
        Good: {good}
      </li>
      <li>
        Neutral: {neutral}
      </li>
      <li>
        Bad: {bad}
      </li>

      <li>
        Total: {total}
      </li>
      <li className={css.positive}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
