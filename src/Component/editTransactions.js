import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { updateTranzactions } from "../API/CategoriesRequest/TranzactionsRequestAPI";

function EditTranzaction(data) {
  const getTranzaction = data.location.state.item;

  const [categoriesToSet] = useState(getTranzaction.categories);
  const [type_of_operationToSet] = useState(getTranzaction.type_of_operation);
  const [sumToSet] = useState(getTranzaction.sum);
  const [dateToSet] = useState(getTranzaction.date);
  const [descriptionToSet] = useState(getTranzaction.description);

  const [categories, setTranzactions] = useState("");
  const [type_of_operation, setType_of_operation] = useState("");
  const [sum, setSum] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [valueOne, setDefaultValueOne] = useState();
  const [valueTwo, setDefaultValueTwo] = useState();
  const [valueThree, setDefaultValueThree] = useState();
  const [valueFour, setDefaultValueFour] = useState();
  const [valueFive, setDefaultValueFive] = useState();

  const HandleChangeCategories = (event) => {
    setTranzactions(event.target.value);
  };
  const HandleChangeType_of_operation = (event) => {
    setType_of_operation(event.target.value);
  };
  const HandleChangeSum = (event) => {
    setSum(event.target.value);
  };
  const HandleChangeDate = (event) => {
    setDate(event.target.value);
  };
  const HandleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const editTranzactions = async () => {
    try {
      const update = await updateTranzactions(
        categories,
        type_of_operation,
        sum,
        date,
        description,
        getTranzaction._id
      );
      if (update) {
        setDefaultValueOne();
        setDefaultValueTwo();
        setDefaultValueThree();
        setDefaultValueFour();
        setDefaultValueFive();
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
        <div>
          {" "}
          <TextField
            defaultValue={categoriesToSet}
            value={valueOne}
            label="Категорія:"
            onChange={(e) => HandleChangeCategories(e)}
          />{" "}
        </div>
        <div>
          {" "}
          <TextField
            defaultValue={type_of_operationToSet}
            value={valueTwo}
            label="Операція:"
            onChange={(e) => HandleChangeType_of_operation(e)}
          />{" "}
        </div>
        <div>
          {" "}
          <TextField
            defaultValue={sumToSet}
            value={valueThree}
            label="Сумма:UAH"
            onChange={(e) => HandleChangeSum(e)}
          />{" "}
        </div>
        <div>
          {" "}
          <TextField
            defaultValue={dateToSet}
            value={valueFour}
            label="Дата:YYY-MM-DD"
            onChange={(e) => HandleChangeDate(e)}
          />{" "}
        </div>
        <div>
          {" "}
          <TextField
            defaultValue={descriptionToSet}
            value={valueFive}
            label="Короткий опис:"
            onChange={(e) => HandleChangeDescription(e)}
          />{" "}
        </div>
        <Button size="small" onClick={editTranzactions}>
          Зберегти
        </Button>
      </div>
    </div>
  );
}

export default EditTranzaction;
