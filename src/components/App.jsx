import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = choise => {
    this.setState(previos => ({ [choise]: previos[choise] + 1 }));
     console.log(choise);
  };

  countTotalFeedback = () => {
    const numArr = Object.values(this.state);
    //  console.log(numArr);
    return numArr.reduce((tot, val) => tot + val, 0);
  };
 
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };

  render() {
   
    return (
      <>
        <Section title="Please leave feedback:">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateState}
          />
        </Section>

        {this.countTotalFeedback() ? (
          <Section title="Statistics:">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
