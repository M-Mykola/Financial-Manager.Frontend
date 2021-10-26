import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { addNewCategories } from "../API/CategoriesRequest/CategoriesRequestAPI";

function AddNewCategories() {
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [value, setDefaultValue] = useState();
  const [valueOne, setDefaultValueOne] = useState();

  const HandleChangeCategories = (event) => {
    setCategories(event.target.value);
    console.log(event.target.value);
  };
  const HandleChangeDescription = (event) => {
    setDescription(event.target.value);
    console.log(event.target.value);
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
          helperText={"Будь ласка введідть назву категорії"}
          value={value}
          id="demo-helper-text-aligned"
          label="Категорія:"
          onChange={(e) => HandleChangeCategories(e)}
        />{" "}
      </div>
      <div>
        {" "}
        <TextField
          helperText={"Будь ласка введідть короткий опис"}
          value={valueOne}
          id="demo-helper-text-aligned"
          label="Опис:"
          onChange={(e) => HandleChangeDescription(e)}
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
