import React,{useState,useEffect} from 'react';
import Axios from "axios"
import Card from "./Card"
import '../stylos/stylosCard.css'
import Pagination from 'pagination-react-hooks';



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
     console.log(list)
     
    /* const llamar = (list) => {

        list.map(data => (
           
            <div key={data.id}>
                
                <Card parame={data}/>
                
            </div>))

    }
 */
    const show = (value) => (
        <div className="container">
        
            <li key={value.id} className="card">
                <span><img src={value.image}></img>
                <h4>{value.id} - {value.name}</h4>
                <p>status:{value.status}</p>
                <p>species:{value.species}</p>
                <p>origin:{value.origin.name}</p>
                <p>location:{value.location.name}</p></span>         
            </li>
        
        </div>
      )

    return ( 
        <div className="container">
        
            <Pagination
            data={list}
            Show={show}
            displayNumber="5"
            previousText="atras"
            nextText="Sonraki"
            />

        </div>
        

     );
}
 
export default Api;