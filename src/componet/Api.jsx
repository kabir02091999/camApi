import React,{useState,useEffect} from 'react';
import Axios from "axios"
import Card from "./Card"
import '../stylos/stylosCard.css'


const Api = () => {
     
    const [list, setList] = useState([]);
    useEffect(() => {
        Axios({
        url: "https://rickandmortyapi.com/api/character",
        })
        .then((response) => {
            setList(response.data.results);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [setList]);
    /* console.log(list) */
    return ( <div className="container">

        {list.map(item=>(
           
            <div key={item.id}>
                
                <Card parame={item}/>
                
            </div>

        ))}

    </div> );
}
 
export default Api;