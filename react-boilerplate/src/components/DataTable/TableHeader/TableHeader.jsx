import React from "react";
import { useDispatch } from "react-redux";
import { sortTableOnIdAction } from "../../../store/action";

const TableHeader = () => {
  const dispatch = useDispatch();
  const sortTableOnId = () => {
    dispatch(sortTableOnIdAction());
  };
  return (
    <div className="data-table__header">
      <div className="data-table__header__column-id">
        <span className="data-table__header__column-id__title">id</span>
        <span
          className="data-table__header__column-id__sort-button"
          onClick={sortTableOnId}
        >
          <i className="fas fa-chevron-circle-up" />
          {/* <i class="fas fa-chevron-circle-down"/> */}
        </span>
      </div>

      <div className="data-table__header__column-firstName">
        <span className="data-table__header__column-firstName__title">
          firstName
        </span>
        <span className="data-table__header__column-firstName__sort-button">
          <i className="fas fa-chevron-circle-up" />
          {/* <i class="fas fa-chevron-circle-down"/> */}
        </span>
      </div>

      <div className="data-table__header__column-lastName">
        <span className="data-table__header__column-lastName__title">
          lastName
        </span>
        <span className="data-table__header__column-lastName__sort-button">
          <i className="fas fa-chevron-circle-up" />
          {/* <i class="fas fa-chevron-circle-down"/> */}
        </span>
      </div>

      <div className="data-table__header__column-email">
        <span className="data-table__header__column-email__title">email</span>
        <span className="data-table__header__column-email__sort-button">
          <i className="fas fa-chevron-circle-up" />
          {/* <i class="fas fa-chevron-circle-down"/> */}
        </span>
      </div>

      <div className="data-table__header__column-phone">
        <span className="data-table__header__column-phone__title">phone</span>
        <span className="data-table__header__column-phone__sort-button">
          <i className="fas fa-chevron-circle-up" />
          {/* <i class="fas fa-chevron-circle-down"/> */}
        </span>
      </div>
    </div>
  );
};

export default TableHeader;
