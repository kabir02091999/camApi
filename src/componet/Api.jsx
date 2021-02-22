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
            <div className="pagina">
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
                
        </div>
     );
}
 
export default Api;