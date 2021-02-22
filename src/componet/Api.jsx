import React,{useState,useEffect} from 'react';
import Axios from "axios"
import Card from "./Card"
import '../stylos/stylosCard.css'
import Pagination from 'pagination-react-hooks';

import ReactPaginate from 'react-paginate';



const Api = () => {
     
    const [list, setList] = useState([]);
    const [pagina, setpagina] = useState(1);
    useEffect(() => {
        Axios({
        url: "https://rickandmortyapi.com/api/character/?page=" + pagina,
        })
        .then((response) => {
            setList(response.data.results);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [setList,pagina]);
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
            <span>{/* <img src={value.image}></img>
            <h4>{value.id} - {value.name}</h4>
            <p>status:{value.status}</p>
            <p>species:{value.species}</p>
            <p>origin:{value.origin.name}</p>
            <p>location:{value.location.name}</p> */}
            
                {/* <Card parame={value} key={value.id} / >*/}

            
            </span>         
        </div> 

      )

    const handlePageClick = (obje) =>{

        setpagina(obje.selected+1)

    }        

    console.log(list)
    return ( 
        <div className="container">
        
            {list.map(car => (

                <div key={car.id}>

                    <Card parame={car}/>

                </div>

            ))}
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={20}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            />
                
        </div>
     );
}
 
export default Api;