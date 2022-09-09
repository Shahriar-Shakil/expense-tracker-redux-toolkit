import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const [currentState, setCurrentState] = useState(1);

  const { type, search } = useSelector((state) => state.filter);
  const { transactions, total, isLoading, isError } = useSelector(
    (state) => state.transaction
  );

  // pagination
  const pageNumber = [];
  for (let index = 0; index < Math.ceil(total / 6); index++) {
    pageNumber.push(index + 1);
  }
  const handlePagination = (pageNumber) => {
    setCurrentState(pageNumber);
  };
  useEffect(() => {
    if (pathname === "/") {
      dispatch(fetchTransactions());
    } else {
      dispatch(
        fetchTransactions({ search, type, limit: 6, page: currentState })
      );
    }
  }, [dispatch, pathname, type, search, currentState]);

  // decide what to render
  let content = null;
  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && isError)
    content = <p className="error">There was an error occured</p>;

  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ));
  }

  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p>No transactions found!</p>;
  }

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>

        {pathname !== "/" ? (
          <div class="pagination">
            {pageNumber?.map((item) => (
              <div
                onClick={() => handlePagination(item)}
                className={`item ${item === currentState ? "current" : ""}`}
              >
                {item}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
