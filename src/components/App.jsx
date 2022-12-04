import { useState } from 'react';
import css from './App.module.css';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Notification from './Notification/Notification.jsx';
import Statistics from './Statistics/Statistics.jsx';

export default function App () {
  const [ good, setGood] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);

  const handleFeedback = option => {
    switch (option.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const total = Number(good + neutral + bad);
  const positivePercentage = Number(((good / total) * 100).toFixed());

  return (
    <div className={css.statistics}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          )}
      </Section>
    </div>
  );
}