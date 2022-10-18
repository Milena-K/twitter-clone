const Tweet = ({ dateCreated, text }) => {
  const postedXTimeAgo = () => {
    const dateNow = new Date();
    const mdyCreated = dateCreated.toDateString().split(" ");
    const tzOffset = -dateNow.getTimezoneOffset() / 60;
    const hourCreated = dateCreated.getHours() + tzOffset;
    const hourDiff = dateNow.getHours() - hourCreated;
    const minutesDiff = dateNow.getMinutes() - dateCreated.getMinutes() + 8; // weird minutes offset
    const yearDiff = dateCreated.getFullYear() - dateNow.getFullYear();

    if (yearDiff)
      return mdyCreated[1] + " " + mdyCreated[2] + ", " + mdyCreated[3];
    else if (dateCreated.getMonth() !== dateNow.getMonth())
      return mdyCreated[1] + " " + mdyCreated[2];
    else if (hourDiff > 0) return hourDiff + "h";
    else if (minutesDiff > 0) return minutesDiff + "m";
    else return "now";
  };

  return (
    <div>
      <p style={{ display: "inline-block" }}>{text}</p>
      <p style={{ display: "inline-block" }}>{postedXTimeAgo()}</p>
    </div>
  );
};

export default Tweet;
