/* eslint-disable react/prop-types */

const Table = ({ products, handleUpdate, deleteProduct }) => {
  return (
    <table>
      <tbody>
        {products?.map((product) => (
          <tr key={product.id}>
            <td>
              <h3>{product.image}</h3>
            </td>
            <td>
              <h2>
                {product.name} - ${product.price}
              </h2>
            </td>
            <td>{product.isNew ? <span className="isnew">new</span> : ""}</td>
            <td>
              <button onClick={() => handleUpdate(product)}>Actualizar</button>
            </td>
            <td>
              <button
                onClick={() =>
                  deleteProduct(product.id)
                    .then((data) => console.log(data))
                    .catch((err) => console.log(err))
                }
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
