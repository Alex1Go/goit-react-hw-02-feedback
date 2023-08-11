import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistic/Statistics";
import { Titlefeedback } from "./Titlefeedback/Titlefeedback";
import { Titlestatistic } from "./Titlestatistic/Titlestatistic";



export class App extends Component  {
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
 
  render() {
   const { good, neutral, bad } = this.state;
    return (
      <div>
        <Titlefeedback title="Please leave feedback" />
        <FeedbackOptions  options={this.state} onLeaveFeedback={this.onLeaveFeedback}/>
        <Titlestatistic title="Statistics" />
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    );
  };
};
