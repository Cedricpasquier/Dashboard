export const calculateAge = (name) => {
  return fetch("https://api.agify.io?name=" + name)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export default calculateAge;
