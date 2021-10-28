export const isInvalidDate = (date) => {
  if (!date)
    return {
      errorMessage:
        "The date must be a number in the format YYY-MM-DD,please enter the data correctly",
    };
  return null;
};

export const isInvalidSum = (sum) => {
  if (!sum)
    return {
      errorMessage:
        "The sum is not correct,sum must be a number,please enter the data correctly",
    };
  return null;
};

export const isInvalidCategories = (categories) => {
  if (categories.length <= 5 || !categories)
    return {
      errorMessage:
        "Categories is not correct,category must have minimum 5 letters,please enter the data correctly",
    };
  return null;
};

export const isInvalidTtype_of_operation = (type_of_operation) => {
  if (type_of_operation.length <= 5 || !type_of_operation)
    return {
      errorMessage:
        "Type of operation is not correct,type of operation must have minimum 5 letters,please enter the data correctly",
    };
  return null;
};

export const isInvalidDescryption = (description) => {
  if (!description)
    return {
      errorMessage: "Please enter the data correctly",
    };
  return null;
};
