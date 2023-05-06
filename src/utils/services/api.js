/**
 *
 * @param {number} userId
 * @param {enum} typeOfData can be 'user','activity','average-sessions', 'performance'
 * @returns result of the main request to get user infos
 */

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
