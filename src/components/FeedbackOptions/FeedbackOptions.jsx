import React from "react";
import PropTypes from "prop-types";
import {
  FeedbackContainer,
  ButtonList,
  ButtonItem,
  FeedbackButton,
} from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <FeedbackContainer>
      <ButtonList>
        {Object.keys(options).map((option) => {
          return (
            <ButtonItem key={option}>
              <FeedbackButton type="button" name={option} onClick={onLeaveFeedback}>
                {option}
              </FeedbackButton>
            </ButtonItem>
          );
        })}
      </ButtonList>
    </FeedbackContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
