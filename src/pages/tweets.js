import React from "react";
import TemplateWrapper from "../layouts";
import Tweets from "../components/RandomTweet/tweets";

export default function TweetsPage() {
  return (
    <TemplateWrapper>
      <div className="lesson-container">
        <div className="lesson">
          <h1>Encouragement Tweets</h1>
          <div className="lesson-content">
            <Tweets />
          </div>
        </div>
      </div>
    </TemplateWrapper>
  );
}
