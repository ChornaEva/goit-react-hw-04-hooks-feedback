import React from "react";
import PropTypes from "prop-types";
import { StatisticList, StatisticItem } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticList>
    <StatisticItem>Good: {good}</StatisticItem>
    <StatisticItem>Neutral: {neutral}</StatisticItem>
    <StatisticItem>Bad: {bad}</StatisticItem>
    <StatisticItem>Total: {total}</StatisticItem>
    <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
  </StatisticList>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
