import React from "react";
import PropTypes from "prop-types";
import { FeedbackSection, FeedbackSectionTitle } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <FeedbackSectionTitle>{title}</FeedbackSectionTitle>
      {children}
    </FeedbackSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
