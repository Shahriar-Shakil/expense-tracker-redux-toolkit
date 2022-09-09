import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched, typeSelected } from "../../features/filter/filterSlice";
import useDebounce from "../../utils/useDebounce";

export default function FilterUI() {
  const { search, type } = useSelector((state) => state.filter);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(searched(searchTerm));
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  return (
    <div>
      <div className="d-flex space-between">
        <div className="form-group radio ">
          <div className="d-flex">
            <div className="radio_group mr-2">
              <input
                required
                type="radio"
                value="all"
                name="all"
                checked={type === "all"}
                onChange={(e) => dispatch(typeSelected("all"))}
              />
              <label>All</label>
            </div>
            <div className="radio_group mr-2">
              <input
                required
                type="radio"
                value="income"
                name="type"
                checked={type === "income"}
                onChange={(e) => dispatch(typeSelected("income"))}
              />
              <label>Income</label>
            </div>

            <div className="radio_group">
              <input
                type="radio"
                value="expense"
                name="type"
                placeholder="Expense"
                checked={type === "expense"}
                onChange={(e) => dispatch(typeSelected("expense"))}
              />
              <label>Expense</label>
            </div>
          </div>
        </div>
        <div>
          <input
            type="text"
            name="name"
            required
            placeholder="type here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
