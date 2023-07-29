import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map((option) => {
                return <button key={ option } onClick={onLeaveFeedback}>{ option }</button>
            })}
        </>
    );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
}