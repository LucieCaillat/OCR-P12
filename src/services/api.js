export default async function getUser(userId) {
  return fetch(`http://localhost:3000/user/${userId}`)
    .then((response) => response.json())
    .then((surveyData) => surveyData.data)
    .catch((error) => console.log(error));
}
