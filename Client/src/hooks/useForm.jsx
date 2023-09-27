import { useEffect, useState } from "react";

export function useForm(createProduct,updateProduct,updateInfo) {
  // estados para controlar el formulario
  const [stateName, setStateName] = useState("");
  const [stateImage, setstateImage] = useState("");
  const [stateIngredients, setStateIngredients] = useState("");
  const [stateQuantity, setStateQuantity] = useState(0);
  const [statePrice, setStatePrice] = useState(0);
  const [stateDescription, setStateDescription] = useState("");

  // guardando los valores para que se muestren en el formulario
  const handleStateName = (e) => setStateName(e.target.value);
  const handleStateEmaji = (e) => setstateImage(e.target.value);
  const handleStateIngredients = (e) => setStateIngredients(e.target.value);
  const handleStateQuantity = (e) => setStateQuantity(e.target.value);
  const handleStatePrice = (e) => setStatePrice(e.target.value);
  const handleStateDescription = (e) => setStateDescription(e.target.value);

  const handleFormSumit = (e) => {
    e.preventDefault();
    if (updateInfo) {
      updateProduct(updateInfo.id, {
        name: stateName,
        image: stateImage,
        ingredients: stateIngredients,
        quantity: stateQuantity,
        price: statePrice,
        description: stateDescription,
      });
    } else {
      createProduct({
        name: stateName,
        image: stateImage,
        ingredients: stateIngredients,
        quantity: stateQuantity,
        price: statePrice,
        description: stateDescription,
      });
    }
    resetValues();
  };

  useEffect(() => {
    if (updateInfo !== undefined) {
      setStateName(updateInfo.name);
      setstateImage(updateInfo.image);
      setStateIngredients(updateInfo.ingredients);
      setStateQuantity(updateInfo.quantity);
      setStatePrice(updateInfo.price);
      setStateDescription(updateInfo.description);
    }
  }, [updateInfo]);

  const resetValues = () => {
    setStateName("");
    setstateImage("");
    setStateIngredients("");
    setStateQuantity(0);
    setStatePrice(0);
    setStateDescription("");
  };

  return {
    resetValues,
    handleFormSumit,
    stateName,
    stateDescription,
    stateImage,
    statePrice,
    stateIngredients,
    stateQuantity,
    handleStateName,
    handleStateEmaji,
    handleStateIngredients,
    handleStatePrice,
    handleStateDescription,
    handleStateQuantity
  };
}
