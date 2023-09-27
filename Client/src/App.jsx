import "./App.css";
import { useState } from "react";
import Form from "./assets/components/Form";
import { useProducts } from "./hooks/useProducts";
import Table from "./assets/components/Table";

function App() {
  const [updateInfo, setUpdateInfo] = useState();
  const [openForm, setOpenForm] = useState(false);

  const { products, deleteProduct, createProduct, updateProduct } =
    useProducts();

  // handle update
  const handleUpdate = (data) => {
    handleClickOpenForm();
    setUpdateInfo(data);
  };

  const handleClickOpenForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <>
      <section className="app">
        <h1>Restaurant App</h1>
        <div>
          <button onClick={handleClickOpenForm}>Agregar una comida</button>
        </div>
        <section className="content-body">
          <Table
            products={products}
            handleUpdate={handleUpdate}
            deleteProduct={deleteProduct}
          />
        </section>
      </section>
      {openForm ? (
        <Form
          setOpenForm={setOpenForm}
          updateInfo={updateInfo}
          createProduct={createProduct}
          updateProduct={updateProduct}
          deleteProduct={deleteProduct}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
