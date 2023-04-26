export default async function getData(userId, typeOfData) {
  return await fetch(
    `http://localhost:3000/user/${userId}/${
      typeOfData === "user" ? "" : typeOfData
    }`
  )
    .then((response) => response.json())
    .then((surveyData) => surveyData.data)
    .catch((error) => console.log(error));
}
