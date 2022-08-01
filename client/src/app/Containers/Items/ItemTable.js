import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../pagination/Pagination";
function ItemTable(props) {
  const PAGESIZE = [
    {
      label: "5",
      value: "5",
    },
    {
      label: "10",
      value: "10",
    },
  ];
  const DATALIMIT = 10;
  const PAGELIMIT = 5;
  const [dataLimit, setDataLimit] = useState(DATALIMIT);
  const [pageLimit, setPageLimit] = useState(PAGELIMIT);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(dataLimit);
  const [tableData, setTableData] = useState(
    props.apiResultArray && props.apiResultArray
  );
  const getPaginatedData = (pageNumber) => {
    const startIndex = pageNumber * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    const list = props.apiResultArray?.slice(startIndex, endIndex);
    setEndIndex(
      props.apiResultArray?.length > endIndex
        ? endIndex
        : props.apiResultArray?.length
    );
    setStartIndex(startIndex + 1);
    setTableData(list);
  };
  useEffect(() => {
    setTableData(props.apiResultArray && props.apiResultArray);
    getPaginatedData(props.currentPageNumber);
  }, [props.currentPageNumber, dataLimit, props.apiResultArray]);
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.mobile}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          padding: "20px 20px 20px 20px",
        }}
      >
        <Pagination
          items={tableData}
          pageLimit={pageLimit}
          dataLimit={dataLimit}
          setCurrentPageNumber={props.setCurrentPageNumber}
          currentPageNumber={props.currentPageNumber}
          getPaginatedData={getPaginatedData}
          setDataLimit={setDataLimit}
          startIndex={startIndex}
          endIndex={endIndex}
          pageSize={PAGESIZE}
          totalData={props.apiResultArray && props.apiResultArray}
          total={props.apiResultArray?.length}
        />
      </div>
    </div>
  );
}

export default ItemTable;
