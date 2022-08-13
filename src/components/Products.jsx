import { useEffect } from "react";
import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom";

function getData({page=1}){
    return fetch(`http://localhost:3000/product?page=${page}&_limit=2`)
               .then((res)=>res.json()
               )
              
};

export default function Products(){

    const [data,setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const initPage = Number(searchParams.get("page")) || 1;
    const [page, setPage] = useState(initPage);

    useEffect(()=>{
           handleData();
    },[page])

    useEffect(()=>{
        setSearchParams({page});
    },[page]);


    const handleData= ()=>{
        getData({page})
        .then((res)=>
           setData(res.data)   
      ) 
    }

    const handleChangePage = (curr)=>{
        setPage(prev=>prev+curr)
    }


    console.log(data);

    return(
        <div>
            <h1>Products Page</h1>

            <div>
                <button disabled={page===1} onClick={()=>handleChangePage(-1)}>Prev</button>
                <button>{page}</button>
                <button disabled={page===2} onClick={()=>handleChangePage(+1)}>Next</button>
            </div>

            <br></br>
            <input></input>
            <br></br>
            {data?.map((e)=>{
                return(
                    <div>
                        <Link to={`/sproduct/${e.id}`}>
                          {e.name}
                        </Link>
                        </div>
                )
            })}
        </div>
    )
}