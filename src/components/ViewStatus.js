import React, { useMemo } from "react";
import { useTable } from "react-table";
import data from "../data/data.json";
import { COLUMNS } from "./Columns";

function ViewStatus() {
  const columns = useMemo(() => COLUMNS, []);
  const tableData = useMemo(() => data, []);

  const tableInstance = useTable({
    columns: columns,
    data: tableData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="container">
      <h3 className="mt-3">View Status</h3>
      <form>
        <h6>Filters:</h6>
        <div className="row mb-3 border">
          <div className="filters col-sm-10">
            <div className="row">
              <div className="col">
                <label></label>
                <select className="form-select">
                  <option>Name</option>
                </select>
              </div>
              <div className="col">
                <label></label>
                <select className="form-select">
                  <option>Team</option>
                </select>
              </div>
              <div className="col">
                <label></label>
                <select className="form-select">
                  <option>Ticket</option>
                </select>
              </div>
              <div className="col">
                <label>From Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col">
                <label>To Date</label>
                <input type="date" className="form-control" />
              </div>
            </div>
          </div>
          <div className="add-user col-sm-2 p-2 border-start text-center">
            <button type="button" className="mt-3 btn btn-primary">
              Add Status
            </button>
          </div>
        </div>
      </form>
      <table {...getTableProps()} className="table table-hover table-bordered">
        <thead>
          {// Loop over the header rows
       headerGroups.map(headerGroup => (
        // Apply the header row props
        <tr {...headerGroup.getHeaderGroupProps()}>
          {// Loop over the headers in each row
          headerGroup.headers.map(column => (
            // Apply the header cell props
            <th {...column.getHeaderProps()}>
              {// Render the header
              column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {// Loop over the table rows
       rows.map(row => {
        // Prepare the row for display
        prepareRow(row)
        return (
          // Apply the row props
          <tr {...row.getRowProps()}>
            {// Loop over the rows cells
            row.cells.map(cell => {
              // Apply the cell props
              return (
                <td {...cell.getCellProps()}>
                  {// Render the cell contents
                  cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
        </tbody>
      </table>
    </div>
  );
}
export default ViewStatus;
