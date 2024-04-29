import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import API_URL from "../constants";

function ProductDetail() {
  const [product, setproduct] = useState();
  const [user, setuser] = useState();
  const p = useParams();

  useEffect(() => {
    const url = API_URL + "/get-product/" + p.productId;
    axios
      .get(url)
      .then((res) => {
        if (res.data.product) {
          setproduct(res.data.product);
        }
      })
      .catch((err) => {
        alert("Server Err.");
      });
  }, []);

  const handleContact = (addedBy) => {
    console.log("id", addedBy);
    const url = API_URL + "/get-user/" + addedBy;
    axios
      .get(url)
      .then((res) => {
        if (res.data.user) {
          setuser(res.data.user);
        }
      })
      .catch((err) => {
        alert("Server Err.");
      });
  };

  return (
    <>
      <Header />
      PRODUCT DETAILS :
      <div>
        {product && (
          <div className="d-flex justify-content-between flex-wrap">
            <div>
              <img
                src={API_URL + "/" + product.pimage}
                alt=""
                style={{
                  width: "40%",
                }}
                className="me-2"
              />
              {product.pimage2 && (
                <img
                  src={API_URL + "/" + product.pimage2}
                  alt=""
                  style={{
                    width: "40%",
                  }}
                />
              )}
              <h6> Product Details : </h6>
              {product.pdesc}
            </div>
            <div>
              <h3 className="m-2 price-text"> Rs. {product.price} /- </h3>
              <p className="m-2">
                {" "}
                {product.pname} | {product.category}{" "}
              </p>
              <p className="m-2 text-success"> {product.pdesc} </p>

              {product.addedBy && (
                <button onClick={() => handleContact(product.addedBy)}>
                  SHOW CONTACT DETAILS
                </button>
              )}
              {user && user.username && <h4>{user.username}</h4>}
              {user && user.mobile && <h3>{user.mobile}</h3>}
              {user && user.email && <h6>{user.email}</h6>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetail;
