
const getDateTime = async () => {
  const url = 'http://worldtimeapi.org/api/ip';
  const data = await fetch(url)
  const json = data.json()
  return json
}

console.log(getDateTime())
