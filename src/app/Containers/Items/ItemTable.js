import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function ItemTable(props) {
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Name</th>
            <th scope="col">Contributed by</th>
            <th scope="col">Brewed Date</th>
            <th scope="col">Target FG</th>
            <th scope="col">Target OG</th>
          </tr>
        </thead>
        <tbody>
          {props.apiResultArray &&
            props.apiResultArray?.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.contributed_by}</td>
                  <td>{item.first_brewed}</td>
                  <td>{item.target_fg}</td>
                  <td>{item.target_og}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ItemTable;
