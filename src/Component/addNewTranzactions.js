import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { addNewTranzactions } from "../API/CategoriesRequest/TranzactionsRequestAPI";

function AddTranzactions(data) {
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
    console.log(event.target.value);
  };
  const HandleChangeType_of_operation = (event) => {
    setType_of_operation(event.target.value);
    console.log(event.target.value);
  };
  const HandleChangeSum = (event) => {
    setSum(event.target.value);
    console.log(event.target.value);
  };
  const HandleChangeDate = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };
  const HandleChangeDescription = (event) => {
    setDescription(event.target.value);
    console.log(event.target.value);
  };

  const createTranzactions = async () => {
    try {
      const update = await addNewTranzactions(
        categories,
        type_of_operation,
        sum,
        date,
        description
      );
      if (update) {
        setDefaultValueOne("");
        setDefaultValueTwo("");
        setDefaultValueThree("");
        setDefaultValueFour("");
        setDefaultValueFive("");
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
          value={valueOne}
          label="Категорія:"
          onChange={(e) => HandleChangeCategories(e)}
        />{" "}
      </div>
      <div>
        {" "}
        <TextField
          value={valueTwo}
          label="Операція:"
          onChange={(e) => HandleChangeType_of_operation(e)}
        />{" "}
      </div>
      <div>
        {" "}
        <TextField
          value={valueThree}
          label="Сумма:UAH"
          onChange={(e) => HandleChangeSum(e)}
        />{" "}
      </div>
      <div>
        {" "}
        <TextField
          value={valueFour}
          label="Дата:YYY-MM-DD"
          onChange={(e) => HandleChangeDate(e)}
        />{" "}
      </div>
      <div>
        {" "}
        <TextField
          value={valueFive}
          label="Короткий опис:"
          onChange={(e) => HandleChangeDescription(e)}
        />{" "}
      </div>
      <div>
        <Button size="small" onClick={createTranzactions}>
          Зберегти Транзакцію
        </Button>
      </div>
    </div>
  );
}

export default AddTranzactions;
