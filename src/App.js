import './App.css';
import { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // метод для фидбека увеличение по клику

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  //   // метод для подсчёта полож-х отзывов
  const countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  //   // метод для подсчёта % полож-х отзывов
  const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return Math.trunc((good * 100) / (good + neutral + bad));
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback({ good, neutral, bad }) === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback({ good, neutral, bad })}
            positivePercentage={countPositiveFeedbackPercentage({
              good,
              neutral,
              bad,
            })}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
