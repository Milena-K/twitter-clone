import { useReducer, useState, useEffect } from 'react';
import { applyActionCode, getAuth } from 'firebase/auth';
import { query, collection, getFirestore, orderBy, limit, onSnapshot } from 'firebase/firestore';
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";
import './styles/Home.css'

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [tweets, setTweets] = useState();

  // Functions
  useEffect(() => {
    var data = []
    const recentTweetsQuery = query(collection(getFirestore(), 'tweets'), limit(30));
    onSnapshot(recentTweetsQuery, function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
        data = [...data, change.doc.data()]
        setTweets(data);
        setLoaded(true);
      })
    })
  }, [loaded])

  return (
    <div id='HomeContainer'>
      <div
        className="thin-borders"
        id='NewTweetContainer'>
        <NewTweet />
      </div>
      <div
        className="thin-borders"
        id="TweetsContainer">
        {
          loaded && tweets.map(tweet => {
            return <Tweet title={tweet.text} />
          })
        }
      </div>
    </div>
  )
}


export default Home
