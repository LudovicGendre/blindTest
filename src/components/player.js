import { useQuery } from "react-query"
import firebase from 'firebase'

 const User = () => {
  const fa = firebase.auth();
  const userId = fa.currentUser?.uid
  return useQuery("repoData", () =>
    fetch(
      `https://europe-west1-ynov-b3-21.cloudfunctions.net/players?id=${userId}`
    ).then((res) => res.json())
  );
}

export default User