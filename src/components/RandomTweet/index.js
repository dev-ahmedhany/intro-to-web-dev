import React from "react";
import { Tweet } from "react-twitter-widgets";
import { tweets } from "../../../content/tweets.yml";

class Tweets extends React.Component {
  state = {
    tweet: tweets[Math.floor(Math.random() * tweets.length)],
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Some words of encouragement!</h3>
        <div style={{ width: "min(100%,550px)" }}>
          <Tweet
            key={this.state.tweet}
            tweetId={this.state.tweet}
            options={{ conversation: "none" }}
          />
        </div>
      </div>
    );
  }
}

export default Tweets;
