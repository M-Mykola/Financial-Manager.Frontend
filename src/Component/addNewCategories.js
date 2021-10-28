import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { addNewCategories } from "../API/CategoriesRequest/CategoriesRequestAPI";
import {
  isInvalidCategories,
  isInvalidDescryption,
} from "../Validation/validation";

function AddNewCategories() {
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [value, setDefaultValue] = useState();
  const [valueOne, setDefaultValueOne] = useState();

  const [categoriesErrorMessage, setCategoriesErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");

  const [categoriesHasError, setCategoriesErrorFlag] = useState(false);
  const [descriptionErrorFlag, setDescriptionErrorFlag] = useState(false);

  const HandleChangeCategories = (event) => {
    const categoriesValidation = isInvalidCategories(event.target.value);
    if (categories && categoriesValidation) {
      setCategoriesErrorFlag(true);
      setCategoriesErrorMessage(categoriesValidation.errorMessage);
    } else {
      setCategoriesErrorMessage("");
      setCategoriesErrorFlag(false);
    }
    setCategories(event.target.value);
  };

  const HandleChangeDescription = (event) => {
    const descriptionValidation = isInvalidDescryption(event.target.value);
    if (description && descriptionValidation) {
      setDescriptionErrorFlag(true);
      setDescriptionErrorMessage(descriptionValidation.errorMessage);
    } else {
      setDescriptionErrorMessage("");
      setDescriptionErrorFlag(false);
    }
    setDescription(event.target.value);
  };

  const createCategories = async () => {
    try {
      const update = await addNewCategories(categories, description);
      if (update) {
        setDefaultValue("");
        setDefaultValueOne("");
      }
      console.log(update);
    } catch (e) {
      console.error(e);
    }
    return;
  };
  return (
    <div>
      <div>
        {" "}
        <TextField
          value={value}
          id="demo-helper-text-aligned"
          label="Категорія:"
          onChange={(e) => HandleChangeCategories(e)}
          error={categoriesHasError}
          helperText={categoriesErrorMessage}
        />{" "}
      </div>
      <div>
        {" "}
        <TextField
          value={valueOne}
          id="demo-helper-text-aligned"
          label="Опис:"
          onChange={(e) => HandleChangeDescription(e)}
          error={descriptionErrorFlag}
          helperText={descriptionErrorMessage}
        />{" "}
      </div>
      <div>
        <Button size="small" onClick={createCategories}>
          Створити нову категорію
        </Button>
      </div>
    </div>
  );
}
export default AddNewCategories;
