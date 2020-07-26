import React from "react";
import "./TableRow.scss";

const TableRow = ({ props }) => {
  const { id, firstName, lastName, email, phone } = props;

  return (
    <div className="dadtaTable-row">
      <div className="dadtaTable-row__column-id">
        <span>{id}</span>
      </div>

      <div className="dadtaTable-row__column-firstName">
        <span>{firstName}</span>
      </div>

      <div className="dadtaTable-row__column-lastName">
        <span>{lastName}</span>
      </div>

      <div className="dadtaTable-row__column-email">
        <span>{email}</span>
      </div>

      <div className="dadtaTable-row__column-phone">
        <span>{phone}</span>
      </div>
    </div>
  );
};

export default TableRow;
