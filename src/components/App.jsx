import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistic/Statistics";
import { Titlefeedback } from "./Titlefeedback/Titlefeedback";
import { Titlestatistic } from "./Titlestatistic/Titlestatistic";



export  class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    onLeaveFeedback = (option) => {
      this.setState((prevState) => {
        return {
          [option]: prevState[option] + 1,
        };
      });
    };
 
  countTotalFeedback = () => {  
  return Object.values(this.state).reduce((acc, option) => acc + option, 0)  
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good  * 100) / this.countTotalFeedback());
  };


  render() {
    const { good, neutral, bad } = this.state;
    this.countTotalFeedback = '';
    this.countPositiveFeedbackPercentage = '';

    return (
      <div>
        <Titlefeedback title="Please leave feedback" />
        <FeedbackOptions  options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
        <Titlestatistic title="Statistics" />
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />
      </div>
    );
  };
};
