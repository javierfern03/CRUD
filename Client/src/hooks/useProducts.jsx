import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);

  // READ All MEAL
  async function readAllProducts() {
    const UrlGetAllProducts = "http://localhost:4123/api/v1/products";
    const response = await fetch(UrlGetAllProducts);
    return response
      .json()
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }

  // READ ONE MEAL
  // async function readOneProduct(id) {
  //   const UrlGetOneProduct = `http://localhost:4123/api/v1/products/${id}`;
  //   const response = await fetch(UrlGetOneProduct);
  //   return response
  //     .json()
  //     .then((data) => setoneProdut(data.product))
  //     .catch((err) => console.log(err));
  // }

  //  CREATE MEAL
  async function createProduct(data) {
    const UrlCreateProduct = "http://localhost:4123/api/v1/products";
    const response = await fetch(UrlCreateProduct, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    readAllProducts();
    return response
      .json()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  // UPDATE MEAL
  async function updateProduct(id, data) {
    const UrlUpdateProduct = `http://localhost:4123/api/v1/products/${id}`;
    const response = await fetch(UrlUpdateProduct, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    readAllProducts();
    // setUpdateInfo();
    return response
      .json()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  // DELETE MEAL
  async function deleteProduct(id) {
    const UrlUpdateProduct = `http://localhost:4123/api/v1/products/${id}`;
    const response = await fetch(UrlUpdateProduct, { method: "DELETE" });
    readAllProducts();
    return response.json();
  }

  useEffect(() => {
    readAllProducts();
  }, []);

  return {
    products,
    readAllProducts,
    // readOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
