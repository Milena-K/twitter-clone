import { useEffect } from 'react';
import { Grid, Column, Stack, Input, Heading, Form, Button } from 'react-ui';
import { createTweet } from './createTweet';

function NewTweet() {
  const sendTweet = async (e) => {
    e.preventDefault();
    const tweet = e.target.form[1].value;
    console.log("New Twt:", tweet);
    createTweet(tweet);
  }

  return (
    <Grid style={{ padding: "5%" }}>
      <Column span={3} />
      <Column span={6}>
        <Stack justify="center">
          <Heading size={6}>Write a new Twt</Heading>
        </Stack>
        <Form>
          <Form.Field label="What's up?">
            <Input style={{ padding: "3%" }} size={8} type="text" placeholder="write here." />
          </Form.Field>
          <Stack justify="flex-end">
            <Button onClick={(e) => sendTweet(e)}>Post</Button>
            <Button variant="link">Cancel</Button>
          </Stack>
        </Form>
      </Column>
      <Column span={3} />
    </Grid>
  )
}

export default NewTweet
