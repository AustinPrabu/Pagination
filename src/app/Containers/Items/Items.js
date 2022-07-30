import React, { useState, useEffect } from "react";
import ItemTable from "./ItemTable";
import { Button, InputGroup, Table, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Items(props) {
  const [apiResultArray, setApiResultArray] = useState();
  const [filterDataList, setFilterDataList] = useState();
  const [page, setPage] = useState(1);
  console.log(page, "jk");
  const next = () => {
    let x = page;
    setPage(x + 1);
  };
  const previous = () => {
    if (!page <= 0) setPage(page - 1);
  };
  const filterData = (e) => {
    const filterText = e.target.value;
    const filterList = filterDataList.filter((item) => {
      if (e.target.value) {
        return item.name?.toLowerCase().includes(filterText.toLowerCase());
      } else {
        return item;
      }
    });
    setApiResultArray(filterList);
  };
  useEffect(() => {
    if (page)
      axios
        .get(
          `${"https://api.punkapi.com/v2/beers?page="}${page}${"&per_page=10"}`
        )
        .then(
          (res) => (setApiResultArray(res.data), setFilterDataList(res.data))
        );
  }, [page]);

  return (
    <div class="p-3">
      <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <div class="input-group mb-3 w-25">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => filterData(e)}
          />
        </div>
        <ItemTable apiResultArray={apiResultArray} />
        <div>
          <nav aria-label="Page navigation example">
            <ul class="pagination d-flex justify-content-between">
              <li class="page-item">
                <a
                  class="page-link "
                  href="#"
                  aria-label="Previous"
                  onClick={() => previous()}
                >
                  <span aria-hidden="true">Previous</span>
                </a>
              </li>

              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={() => next()}
                >
                  <span aria-hidden="true">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Items;
