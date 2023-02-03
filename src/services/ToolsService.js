export const calculateAge = (name) => {
  return fetch("https://api.agify.io?name=" + name)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const getWeather = (name) => {
  return fetch("https://weatherapi-com.p.rapidapi.com/current.json", {
    method: 'GET',
    params: {q: name},
    headers: {
      'X-RapidAPI-Key': '44086529f2msh5dfa30f1d7a63a6p1ef996jsn7a1967ec7eb1',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};



export default calculateAge;
