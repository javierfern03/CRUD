/* eslint-disable react/prop-types */
import { useForm } from "../../hooks/useForm";

const Form = ({ setOpenForm, updateInfo, createProduct, updateProduct }) => {
  const {
    resetValues,
    handleFormSumit,
    stateName,
    stateDescription,
    stateImage,
    stateQuantity,
    stateIngredients,
    statePrice,
    handleStateName,
    handleStateEmaji,
    handleStateIngredients,
    handleStatePrice,
    handleStateDescription,
    handleStateQuantity,
  } = useForm(createProduct, updateProduct, updateInfo);

  const handleCloseForm = () => {
    resetValues();
    setOpenForm(false);
  };

  return (
    <section className="form-container">
      <form action="" className="form" onSubmit={handleFormSumit}>
        <button className="btn-form-close" onClick={handleCloseForm}>
          x
        </button>
        <h2>{updateInfo ? "Actualizar una comida" : "Agregar una comida"}</h2>
        <div>
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input-text"
            type="text"
            placeholder="croissant "
            name="name"
            value={stateName}
            onChange={handleStateName}
            required
          />

          <label className="form__label" htmlFor="image">
            Emoji
          </label>
          <input
            className="form__input-text"
            type="text"
            placeholder=""
            name="image"
            required
            value={stateImage}
            onChange={handleStateEmaji}
          />

          <label className="form__label" htmlFor="ingredients">
            Ingrediends
          </label>
          <input
            className="form__input-text"
            placeholder="Milk,Sugar..."
            required
            name="ingredients"
            value={stateIngredients}
            onChange={handleStateIngredients}
          />

          <label className="form__label" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="form__input-text"
            type="number"
            placeholder="10"
            name="quantity"
            required
            value={stateQuantity}
            onChange={handleStateQuantity}
          />

          <label className="form__label" htmlFor="price">
            Price
          </label>
          <input
            className="form__input-text"
            type="number"
            placeholder="9.99"
            name="price"
            required
            value={statePrice}
            onChange={handleStatePrice}
          />

          <label className="form__label" htmlFor="description">
            Description
          </label>
          <textarea
            className="form__input-text"
            cols="35"
            rows="8"
            placeholder="A croissant is a..."
            name="description"
            required
            value={stateDescription}
            onChange={handleStateDescription}
          />
        </div>
        <button type="submit">
          {" "}
          {updateInfo ? "Update Meal" : "Create Meal"}
        </button>
      </form>
    </section>
  );
};

export default Form;
