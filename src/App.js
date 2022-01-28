import "./App.css";
import React, { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // метод для филбека по клику
  onLeaveFeedback = (event) => {
    this.setState((prevState) => {
      return {
        [event.target.textContent]: prevState[event.target.textContent] + 1,
      };
    });
  };

  // метод для подсчёта полож-х отзывов
  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  // метод для подсчёта % полож-х отзывов
  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return Math.trunc((good * 100) / (good + neutral + bad));
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback(this.state) === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
