import { db } from './utils/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { v1 as uuidv1 } from 'uuid';

export const createTweet = async (tweet) => {
  const t = {
    text: tweet,
  }
  await setDoc(doc(db, 'tweets', uuidv1()), t)
}
