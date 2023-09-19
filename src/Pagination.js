import React from "react";

export default function Pagination({ gotoPrevPage, gotoNextPage }) {
  return (
    <>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Prev</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </>
  );
}
