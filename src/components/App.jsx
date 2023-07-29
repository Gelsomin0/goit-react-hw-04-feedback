import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  onLeaveFeedback = (evt) => {
    if (evt.currentTarget.textContent === 'Good') {
      this.setState((prevState) => {
        return {good: prevState.good + 1}
      })
    }
    if (evt.currentTarget.textContent === 'Neutral') {
      this.setState((prevState) => {
        return {neutral: prevState.neutral + 1}
      })
    }
    if (evt.currentTarget.textContent === 'Bad') {
      this.setState((prevState) => {
        return {bad: prevState.bad + 1}
      })
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.onLeaveFeedback}/>
          {
            this.countTotalFeedback()
            ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage().toFixed(0)} />
            : <Notification message="There is no feedback"/>
          }          
        </Section>
      </div>
    );
  }
};