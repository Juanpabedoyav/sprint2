import React, {useState, useEffect} from 'react'

export const useGet = (url) => {
    const [getData, setGetData] = useState([]);

useEffect(() => {
    fetch(url)
    .then(response =>{
     return  response.json();
    })
    .then((data) =>{
        setGetData(data); 
    })
    .catch(()=>{
        console.log("Error");   
}, [])
})
    return{
        
        getData,
    }

}
