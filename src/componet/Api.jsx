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

            <div key={value.id}>
                <span><img src={value.image}></img>
                <h4>{value.id} - {value.name}</h4>
                <p>status:{value.status}</p>
                <p>species:{value.species}</p>
                <p>origin:{value.origin.name}</p>
                <p>location:{value.location.name}</p></span>         
            </div>

    }
 */
    const show = (value) => (

        <div key={value.id} className="card">
        <span><img src={value.image}></img>
        <h4>{value.id} - {value.name}</h4>
        <p>status:{value.status}</p>
        <p>species:{value.species}</p>
        <p>origin:{value.origin.name}</p>
        <p>location:{value.location.name}</p></span>         
    </div>
      )

    return ( 
            <Pagination
            class="pepe"
            data={list}
            Show={show}
            displayNumber="6"
            previousText="atras"
            nextText="siguiente"
            />

     );
}
 
export default Api;