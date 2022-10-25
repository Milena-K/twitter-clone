import { db } from './utils/firestore';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { v1 as uuidv1 } from 'uuid';

export const createTweet = async (tweet) => {
  const t = {
    text: tweet,
    id: uuidv1(),
    timestamp: serverTimestamp(),
  }
  console.log('stored.');
  await setDoc(doc(db, 'tweets', uuidv1()), t)
}
