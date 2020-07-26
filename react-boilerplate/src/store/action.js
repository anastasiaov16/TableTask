export const getAll = "DATA_GET_ALL",
  sortTableOnId = "SORT_TABLE_ON_ID",
  addData = "ADD_DATA";

export const getAllData = () => {
  return {
    type: getAll,
  };
};

export const sortTableOnIdAction = () => {
  return {
    type: sortTableOnId,
  };
};
