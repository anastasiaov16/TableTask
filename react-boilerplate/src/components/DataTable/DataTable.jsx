import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import "./DataTable.scss";
import TableRow from "./TableRow/TableRow.jsx";
import TableHeader from "./TableHeader/TableHeader.jsx";
import { getAllData } from "../../store/action";

const DataTable = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.data.data, shallowEqual);

  useEffect(() => {
      dispatch(getAllData())
  }, []);
  console.log(state)
  return (
    <div className="data-table">
      <TableHeader />
      {state
        ? state.map((item, index) => {
            return <TableRow props={item} key={index} />;
          })
        : null}
    </div>
  );
};

export default DataTable;
