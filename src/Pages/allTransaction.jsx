import React from "react";
import { useSelector } from "react-redux";
import Balance from "../components/Balance";
import FilterUI from "../components/FilterUI/FilterUI";
import Form from "../components/Form";
import Transactions from "../components/Transactions/Transactions";
import { Link } from "react-router-dom";

export default function AllTransaction() {
  const { editing } = useSelector((state) => state.transaction) || {};

  return (
    <div className="container">
      <FilterUI />
      {/* <AllTransactions /> */}

      {editing.id ? <Form /> : <></>}
      <Transactions />
      <div className="container">
        <Link
          to="/"
          style={{
            maxWidth: "400px",
            textDecoration: "none",
            textAlign: "center",
          }}
          className="btn"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
