import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function getData(id){
    return fetch("http://localhost:3000/products/"+id).then((res)=>res.json())
};

export default function SingleProduct(){
    const [data,setData] = useState({});
    const [isPresent, setIsPresent] = useState(false);
    const params = useParams();

    useEffect(()=>{
        getData(params.id).then((res)=>
         {setData(res)
        setIsPresent(true) })
        
    },[params.id])

    console.log(data);

    // if(!isPresent){
    //     alert("Products does not exist");
    //  }
    return(
        <div>
            <Link to="/products">Go back</Link>
            <h1>Product Id {params.id}</h1>
        
            {
                <>
                <img  width="200px" src={data.avatar} alt="avatar"></img>
                <h2>Name: {data.name}</h2>
                </>
            }
        </div>
    )
}