import { useState } from "react";

async function getAPIAge(name) {
    const [data,setData]=useState([]);

    try {
        const response = await fetch('https://api.agify.io?name=' + name);
        setData(await response.json());
        console.log(data);
        return data;
    } catch (err) {
        return [];
    }
}


export default getAPIAge;