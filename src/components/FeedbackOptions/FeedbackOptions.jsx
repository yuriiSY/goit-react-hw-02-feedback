import styles from './feedback-options.css';

const FeedbackOptions = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total:{total}</p>
      <p>Percentage:{positivePercentage}%</p>
    </div>
  );
};

export default FeedbackOptions;
