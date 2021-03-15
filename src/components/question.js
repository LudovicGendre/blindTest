import { useQuery } from "react-query"
import firebase from 'firebase'

const fetchQuestions = async () => {
  const token = await firebase.auth().currentUser?.getIdToken();
  if (token) {
    const res = await fetch('https://europe-west1-ynov-b3-21.cloudfunctions.net/questions', {
      headers: {
        BlindTestToken: token,
      }
    })
    return res.json()
  }
}

export const Questions = () => {
  return useQuery("questions", fetchQuestions)
}
