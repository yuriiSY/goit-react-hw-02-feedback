// import { Component } from 'react';

import styles from './statistics.module.css';

// class Statistics extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Please leave feedback</h3>
//         <button key={'good'} onClick={() => this.addVote('good')}>
//           Good {this.state.good}
//         </button>
//         <button key={'neutral'} onClick={() => this.addVote('neutral')}>
//           Neutral {this.state.neutral}
//         </button>
//         <button key={'bad'} onClick={() => this.addVote('bad')}>
//           Bad {this.state.bad}
//         </button>
//         <p></p>
//       </div>
//     );
//   }
// }

const Statistics = ({ options, onLeaveFeedback }) => {
  const buttons = options.map(option => (
    <button key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  ));

  return <div>{buttons}</div>;
};

export default Statistics;
