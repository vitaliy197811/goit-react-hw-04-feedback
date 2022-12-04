import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const optionsBtn = Object.keys(options);
    return(
        <>
            <div className={css.buttonBox}>
                {optionsBtn.map(option => (
                    <button className={css.button} 
                        type='button' 
                        onClick={onLeaveFeedback}
                        name={option}
                        key={option}
                    >
                        {option[0].toUpperCase() + option.slice(1)}
                    </button>
                ))}
            </div>
        </>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;