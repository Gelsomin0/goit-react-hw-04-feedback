import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul>
            <li>
                Good: <span>{ good }</span>
            </li>
            <li>
                Neutral: <span>{ neutral }</span>
            </li>
            <li>
                Bad: <span>{ bad }</span>
            </li>
            <li>
                Total feedback: <span>{ total() }</span>
            </li>
            <li>
                Positive feedback: <span>{ positivePercentage }%</span>
            </li>
        </ul>
    );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.string.isRequired,
}