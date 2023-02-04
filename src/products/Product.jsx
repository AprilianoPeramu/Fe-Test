import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Product = () => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(({ data }) => {
        setGetData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(getData);

  return (
    <>
    <Navbar/>

      <div className="container-fluid container-fluid1">
        <div className="row justify-content-center">
          {getData?.map((data) => (
            <div className="col-md-3 " key={data?.id}>
            <div class="card" style={{width : "18rem"}}>
              <img src={data?.image} class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{data?.title}</h5>
                <p class="card-text">
                  {data?.description}
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
