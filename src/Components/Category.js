import { useState } from "react";
import Categories from "./Categories";
let Category = () => {

    let [data, setData] = useState(Categories);
    let [filteredData, setFilteredData] = useState(Categories);

    let onlyChildren = (child) =>{
        let filteronlyChildren = data.filter((value)=>{
            if(value.category===child){
                return value;
            }

        })
        
        setFilteredData(filteronlyChildren); 


    }
    let onlyAll = (child) =>{
        let filteronlyChildren = data.filter((value)=>{
            if(value.category!==child){
                return value;
            }

        })
        
        setFilteredData(filteronlyChildren); 


    }

   

       

   

  

    
   
    
    return (
        <div>
            <h1 className="text-center text-info">Let's Shop</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 col-lg-3 col-xs-4 col-sm-4">
                        <button type="button" class="btn btn-warning w-100 mb-4 " onClick={()=>onlyChildren('Men')}>Men</button>
                        <button type="button" class="btn btn-warning w-100 mb-4" onClick={()=>onlyChildren('Women')}>Women</button>
                        <button type="button" class="btn btn-warning w-100 mb-4" onClick={()=>onlyChildren('children')}>Children</button>
                        <button type="button" class="btn btn-warning w-100 mb-4" onClick={()=>onlyChildren('Black')}>Black</button>
                        <button type="button" class="btn btn-warning w-100 mb-4" onClick={()=>onlyChildren('White')}>White</button>
                        <button type="button" class="btn btn-warning w-100 mb-4" onClick={()=>onlyAll('All')}>All</button>

                    </div>
                    <div className="col-9 col-lg-9">
                        <div className="row">
                            {filteredData.map((value) => {
                                let {title,id,price,image}=value

                                return (
                                    <div className="col-lg-4 col-sm-12 mb-4"  key={id}>

                                        <div class="card">
                                            <img src={image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{title}</h5>
                                                <p>Price : {price}/-</p>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <button class="btn btn-dark">Buy now</button>
                                            </div>
                                        </div>




                                    </div>


                                )

                            })}
                            


                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default Category;