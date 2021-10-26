import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { updateCategories } from "../API/CategoriesRequest/CategoriesRequestAPI";

function AddEditCategories(data) {
  const getData = data.location.state.item;
  const [categoriesToSet] = useState(getData.categories);
  const [descriptionToSet] = useState(getData.description);
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

  const getAndUpdateCategories = async () => {
    try {
      const update = await updateCategories(
        categories,
        description,
        getData._id
      );
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
          helperText={"Будь ласка введідть назву катугорії"}
          defaultValue={categoriesToSet}
          value={value}
          id="demo-helper-text-aligned"
          label="Категорія:"
          onChange={(e) => HandleChangeCategories(e)}
        />{" "}
      </div>
      <div>
        {" "}
        <TextField
          defaultValue={descriptionToSet}
          value={valueOne}
          helperText="Будь ласка введідть короткий опис"
          id="demo-helper-text-aligned"
          label="Опис:"
          onChange={(e) => HandleChangeDescription(e)}
        />{" "}
      </div>
      <div>
        <Button size="small" onClick={getAndUpdateCategories}>
          Зберегти
        </Button>
      </div>
    </div>
  );
}

export default AddEditCategories;
