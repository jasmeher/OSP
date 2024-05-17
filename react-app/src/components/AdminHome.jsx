import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";
import API_URL from "../constants";

function AdminHome() {
  const [products, setproducts] = useState([]);
  const [users, setusers] = useState([]);
  useEffect(() => {
    const pUrl = API_URL + "/get-products";
    axios
      .get(pUrl)
      .then((res) => {
        if (res.data.products) {
          setproducts(res.data.products);
        }
      })
      .catch((err) => {
        alert("Server Err.");
      });

    const url = API_URL + "/get-users";
    axios
      .get(url)
      .then((res) => {
        if (res.data.users) {
          setusers(res.data.users);
        }
      })
      .catch((err) => {
        alert("Server Err.");
      });
  }, []);
  console.log(products);
  console.log("Users", users);
  return (
    <main className="main-container">
      <div className="main-title">
        <h3 id="dashboard">DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="admin-card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{products.length}</h1>
        </div>
        <div className="admin-card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>09</h1>
        </div>
        <div className="admin-card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{users.length}</h1>
        </div>
      </div>

      <div className="charts">
        <h2 id="products">Products</h2>
        <table className="table table-dark table-hover table-bordered table-responsive">
          <thead>
            <tr>
              <th className="text-center" colspan="2">
                Product Name
              </th>
              <th className="text-center">Product Category</th>
              <th className="text-center">Product Description</th>
              <th className="text-center">Product Price</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr>
                <td>
                  <img
                    src={API_URL + "/" + product.pimage}
                    alt=""
                    style={{ width: "100px" }}
                  />
                </td>
                <td>{product.pname}</td>
                <td>{product.category}</td>
                <td>{product.pdesc}</td>
                <td>Rs.{product.price}/-</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 id="customers">Customers</h2>
        <table className="table table-dark table-hover table-bordered table-responsive">
          <thead>
            <tr>
              <th className="text-center"> Username</th>
              <th className="text-center"> Email</th>
              <th className="text-center"> Phone No.</th>
              <th className="text-center"> Liked Products</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.likedProducts.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default AdminHome;
