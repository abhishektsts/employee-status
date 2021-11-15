function AddUser() {
  return (
    <div className="container">
      <h3 className="mt-3">Add User</h3>
      <div class="row pt-3">
        <div class="col-1">
          <label class="col-form-label"></label>
        </div>
        <div class="col-auto">
          <input type="text" class="form-control" placeholder="Name" />
        </div>
        <div class="col-1">
          <label class="col-form-label"></label>
        </div>
        <div class="col-auto">
          <input type="email" class="form-control" placeholder="email" />
        </div>
      </div>
      <div class="row pt-3">
        <div class="col-1">
          <label class="col-form-label">Team</label>
        </div>
        <div class="col-2">
          <select className="form-select">
            <option>Add Team</option>
          </select>
        </div>
        <div class="col-1">
          <label class="col-form-label">Role</label>
        </div>
        <div class="col-2">
          <select className="form-select">
            <option>Assign Role</option>
          </select>
        </div>
      </div>

      <div className="m-5">
        <button type="button" className="btn btn-primary">
          Add/Update
        </button>
      </div>
    </div>
  );
}
export default AddUser;
