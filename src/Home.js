import NewTweet from "./NewTweet";
import './styles/Home.css'
const Home = () => {

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
        the tweets
      </div>
    </div>
  )
}


export default Home
