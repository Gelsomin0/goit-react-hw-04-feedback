import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (evt) => {
    if (evt.currentTarget.textContent === 'Good') {
      setGood((prevState) => prevState + 1);
      return;
    }
    if (evt.currentTarget.textContent === 'Neutral') {
      setNeutral((prevState) => prevState + 1);
      return;
    }
    if (evt.currentTarget.textContent === 'Bad') {
      setBad((prevState) => prevState + 1);
      return;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  }

  return (
    <div>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={onLeaveFeedback} />
        {
          countTotalFeedback()
          ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage().toFixed(0)} />
          : <Notification message="There is no feedback"/>
        }          
      </Section>
    </div>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage = () => {
//     return (this.state.good / this.countTotalFeedback()) * 100;
//   }

//   onLeaveFeedback = (evt) => {
//     if (evt.currentTarget.textContent === 'Good') {
//       this.setState((prevState) => {
//         return {good: prevState.good + 1}
//       })
//     }
//     if (evt.currentTarget.textContent === 'Neutral') {
//       this.setState((prevState) => {
//         return {neutral: prevState.neutral + 1}
//       })
//     }
//     if (evt.currentTarget.textContent === 'Bad') {
//       this.setState((prevState) => {
//         return {bad: prevState.bad + 1}
//       })
//     }
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <Section title='Please leave feedback'>
//           <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.onLeaveFeedback}/>
//           {
//             this.countTotalFeedback()
//             ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage().toFixed(0)} />
//             : <Notification message="There is no feedback"/>
//           }          
//         </Section>
//       </div>
//     );
//   }
// };