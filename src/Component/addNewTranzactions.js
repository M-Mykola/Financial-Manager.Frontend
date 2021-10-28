import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { addNewTranzactions } from "../API/CategoriesRequest/TranzactionsRequestAPI";
import {
  isInvalidDate,
  isInvalidCategories,
  isInvalidDescryption,
  isInvalidSum,
  isInvalidTtype_of_operation,
} from "../Validation/validation";

function AddTranzactions(data) {
  const [categories, setCategories] = useState("");
  const [type_of_operation, setType_of_operation] = useState("");
  const [sum, setSum] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [valueOne, setDefaultValueOne] = useState();
  const [valueTwo, setDefaultValueTwo] = useState();
  const [valueThree, setDefaultValueThree] = useState();
  const [valueFour, setDefaultValueFour] = useState();
  const [valueFive, setDefaultValueFive] = useState();

  const [categoriesErrorMessage, setCategoriesErrorMessage] = useState("");
  const [type_of_operationErrorMessage, setType_of_operationErrorMessage] =
    useState("");
  const [sumErrorMessage, setSumErrorMessage] = useState("");
  const [dateErrorMessage, setDateErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");

  const [categoriesHasError, setCategoriesErrorFlag] = useState(false);
  const [type_of_operationHasError, setType_of_operationErrorFlag] =
    useState(false);
  const [sumHasError, setSumErrorFlag] = useState(false);
  const [dateHasError, setDateErrorFlag] = useState(false);
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

  const HandleChangeType_of_operation = (event) => {
    const type_of_operationValidation = isInvalidTtype_of_operation(
      event.target.value
    );
    if (type_of_operation && type_of_operationValidation) {
      setType_of_operationErrorFlag(true);
      setType_of_operationErrorMessage(
        type_of_operationValidation.errorMessage
      );
    } else {
      setType_of_operationErrorMessage("");
      setType_of_operationErrorFlag(false);
    }
    setType_of_operation(event.target.value);
  };

  const HandleChangeSum = (event) => {
    const sumValidation = isInvalidSum(event.target.value);
    if (sum && sumValidation) {
      setSumErrorFlag(true);
      setSumErrorMessage(sumValidation.errorMessage);
    } else {
      setSumErrorMessage("");
      setSumErrorFlag(false);
    }
    setSum(event.target.value);
  };
  const HandleChangeDate = (event) => {
    const dateValidation = isInvalidDate(event.target.value);
    if (date && dateValidation) {
      setDateErrorFlag(true);
      setDateErrorMessage(dateValidation.errorMessage);
    } else {
      setDateErrorMessage("");
      setDateErrorFlag(false);
    }
    setDate(event.target.value);
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
          error={categoriesHasError}
          helperText={categoriesErrorMessage}
        />{" "}
      </div>
      <div>
        {" "}
        <TextField
          value={valueTwo}
          label="Операція:"
          onChange={(e) => HandleChangeType_of_operation(e)}
          error={type_of_operationHasError}
          helperText={type_of_operationErrorMessage}
        />{" "}
      </div>
      <div>
        {" "}
        <TextField
          value={valueThree}
          label="Сумма:UAH"
          onChange={(e) => HandleChangeSum(e)}
          error={sumHasError}
          helperText={sumErrorMessage}
        />{" "}
      </div>
      <div>
        {" "}
        <TextField
          value={valueFour}
          label="Дата:YYY-MM-DD"
          onChange={(e) => HandleChangeDate(e)}
          error={dateHasError}
          helperText={dateErrorMessage}
        />{" "}
      </div>
      <div>
        {" "}
        <TextField
          value={valueFive}
          label="Короткий опис:"
          onChange={(e) => HandleChangeDescription(e)}
          error={descriptionErrorFlag}
          helperText={descriptionErrorMessage}
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
