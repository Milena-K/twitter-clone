import NewTweet from "./NewTweet";

const Home = () => {
  const container = {
    margin: 0,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
  }

  return (
    <div style={container}>
      <NewTweet />
    </div>
  )
}


export default Home
