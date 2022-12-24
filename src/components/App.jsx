import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const updateState = e => {
      
    const { name } = e.target;
    switch (name) {
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

  const countTotalFeedback = () => {
    return good+neutral+bad
  };
 
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? ((good / countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };

    return (
      <>
        <Section title="Please leave feedback:">
          <FeedbackOptions
            options={["good","neutral", "bad" ]}
            onLeaveFeedback={updateState}
          />
        </Section>

        {countTotalFeedback() ? (
          <Section title="Statistics:">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }

