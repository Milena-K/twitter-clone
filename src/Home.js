import { React, useState, useEffect } from "react";
// import { applyActionCode, getAuth } from "firebase/auth";
import {
  query,
  collection,
  getFirestore,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";
import "./styles/Home.css";

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [tweets, setTweets] = useState(null);

  // Functions
  useEffect(() => {
    var data = [];
    const recentTweetsQuery = query(
      collection(getFirestore(), "tweets"),
      orderBy("timestamp", "desc"),
      limit(30)
    );
    onSnapshot(recentTweetsQuery, function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
        data = [...data, change.doc.data()];
        setTweets(data);
      });
    });
    setLoaded(true);
  }, [loaded]);

  return (
    <div id="HomeContainer">
      <div className="thin-borders" id="NewTweetContainer">
        <NewTweet />
        {/* BUG: When new tweet is created it's added to the bottom*/}
      </div>
      <div className="thin-borders" id="TweetsContainer">
        {tweets &&
          tweets.map((tweet) => {
            if (tweet.timestamp) {
              const seconds = tweet.timestamp.seconds;
              var date = new Date(1970, 0, 1); // epoch
              date.setSeconds(seconds);
              return <Tweet key={tweet.id} dateCreated={date} text={tweet.text} />;
            }
            return null;
          })}
      </div>
    </div >
  );
};

export default Home;
