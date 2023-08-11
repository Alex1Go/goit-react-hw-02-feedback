import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
        return (
                <div>
                     { options.map(option => (
                    <button type="button" onClick={onLeaveFeedback}>{option}</button>
                ))};
            </div>
          
        );
   
}

FeedbackOptions.prototype = {
   options: PropTypes.string.isRequired,
	onLeaveFeedback: PropTypes.string.isRequired
}