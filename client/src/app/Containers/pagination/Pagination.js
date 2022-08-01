import React, { useState, useEffect } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [optionItems, setOptionItems] = useState(props.pageSize);
  const [allData, setAllData] = useState(props.totalData);
  const [strt, setStrt] = useState(0);
  const [end, setEnd] = useState(5);
  const [pages, setPages] = useState(
    Math.ceil(allData?.length / props.dataLimit) == 0
      ? 1
      : Math.ceil(allData?.length / props.dataLimit)
  );
  const pagess = [];
  for (
    let i = 1;
    i <= Math.ceil(props.totalData.length / props.dataLimit);
    i++
  ) {
    pagess.push(i);
  }
  const changePage = (event) => {
    setCurrentPage(Number(event.target.id));
    props.getPaginatedData(Number(event.target.id));
  };
  const indexOfLastItem = currentPage * props.dataLimit;
  const indexOfFirstItem = indexOfLastItem - props.dataLimit;
  const renderPageNumbers = pagess.map((number) => {
    if (number < end + 1 && number > strt) {
      return (
        <button
          key={number}
          id={number}
          onClick={(e) => changePage(e)}
          class={
            currentPage === number
              ? "p-1 m-1 border border-1 border-primary"
              : "p-1 m-1 border border-0"
          }
        >
          {number}
        </button>
      );
    } else {
      return null;
    }
  });
  const goToNextPage = async () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > end) {
      setEnd(end + props.pageLimit);
      setStrt(strt + props.pageLimit);
    }
    props.getPaginatedData(currentPage + 1);
  };

  const goToPreviousPage = async () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % props.pageLimit == 0) {
      setEnd(end - props.pageLimit);
      setStrt(strt - props.pageLimit);
    }
    props.getPaginatedData(currentPage - 1);
  };

  const dataLimitChange = (event) => {
    setPages(
      Math.ceil(allData?.length / parseInt(event.target.value)) == 0
        ? 1
        : Math.ceil(allData?.length / parseInt(event.target.value))
    );
    props.setDataLimit(parseInt(event.target.value));
    setCurrentPage(1);

    setStrt(0);
    setEnd(5);
  };
  return (
    <div class="pagination .d-none" style={{ display: "block" }}>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p style={{ margin: "0" }}>
            {"showing"}
            <span style={{ padding: " 0 4px 0 4px" }}>{props.startIndex}</span>
            {"to"}
            <span
              style={{
                padding: " 0 4px 0 4px",
              }}
            >
              {props.endIndex}
            </span>
            {"of"}
            <span
              style={{
                padding: " 0 4px 0 4px",
              }}
            >
              {props.total}
            </span>
            {"results"}
          </p>
          <div>
            <nav
              style={{
                display: "inline-flex",
                alignItems: "center",
              }}
              aria-label="Pagination"
            >
              <a
                onClick={goToPreviousPage}
                class={
                  currentPage == pagess[0]
                    ? "list-group-item list-group-item-action disabled"
                    : ""
                }
              >
                <HiChevronLeft />
              </a>
              {renderPageNumbers}

              <a
                onClick={goToNextPage}
                class={
                  currentPage == pagess[pagess.length - 1]
                    ? "list-group-item list-group-item-action disabled"
                    : ""
                }
              >
                <HiChevronRight />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
