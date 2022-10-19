import ProfilePic from './ProfilePic';
import './styles/Tweet.css';
import { ReactComponent as Retweet } from './img/retweet-svgrepo-com.svg';
import { ReactComponent as Comment } from './img/comment-svgrepo-com.svg';
import { ReactComponent as Heart } from './img/heart-svgrepo-com.svg';

const Tweet = ({ dateCreated, text }) => {

  const postedXTimeAgo = () => {
    const dateNow = new Date();
    const mdyCreated = dateCreated.toDateString().split(" ");
    const tzOffset = -dateNow.getTimezoneOffset() / 60;
    const hourCreated = dateCreated.getHours() + tzOffset;
    const hourDiff = dateNow.getHours() - hourCreated;
    const minutesDiff = dateNow.getMinutes() - dateCreated.getMinutes() + 8; // weird minutes offset

    if (dateCreated.getFullYear() != dateNow.getFullYear())
      return mdyCreated[1] + " " + mdyCreated[2] + ", " + mdyCreated[3];
    else if ((dateCreated.getMonth() !== dateNow.getMonth()) || (dateCreated.getDate() != dateNow.getDate()))
      return mdyCreated[1] + " " + mdyCreated[2];
    else if (hourDiff > 0) return hourDiff + "h";
    else if (minutesDiff > 0) return minutesDiff + "m";
    else {
      console.log(dateCreated)
      return "now";
    }
  };

  return (
    <div id="tweetContainer">

      <div id='profilePicContainer'>
        <ProfilePic />
      </div>

      <div id='rightOfPPic'>

        <div id='topTweet'>
          <p style={{
            marginTop: '8px',
            fontWeight: '500',
            paddingRight: '4px',
            marginBottom: '0px',
          }}
          >Tweet</p>
          <div
            id='tweetInfo'
            style={{
              color: 'grey',
            }}>
            <p>@tweet</p>
            <span>&#183;</span>
            <p>{postedXTimeAgo()}</p>
          </div>
        </div>

        <div id='midTweet'>
          <p style={{
            display: "inline-block",
            margin: '0',
            padding: '0',
          }}>{text}</p>
        </div>

        <div id='botTweet'>
          <button>
            <Comment id='commentIcon' />
            <span>182</span>
          </button>
          <button>
            <Retweet id='retweetIcon' />
            <span>243</span>
          </button>
          <button>
            <Heart id='heartIcon' />
            <span>143</span>
          </button>
        </div>
      </div>
    </div>

  );
};

export default Tweet;
