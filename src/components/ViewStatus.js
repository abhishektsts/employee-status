import { useEffect, useState } from "react";
import axios from "axios";
import data from "../data/data.json";
function ViewStatus() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    data.map((post) => post);
  });

  return (
    <div className="container">
      <h3>View Status</h3>
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
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Serial No.</th>
            <th scope="col">Name</th>
            <th scope="col">Team</th>
            <th scope="col">Ticket No.</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>mdo</td>
            <td>Done</td>
            <td>01-01-2022</td>
            <td>Otto</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default ViewStatus;
