function AddStatus() {
  return (
    <div className="container">
      <h3 className="mt-3">Add Status</h3>
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label class="col-form-label">Name</label>
        </div>
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-auto">
          <label class="col-form-label">Team</label>
        </div>
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-auto">
          <label class="col-form-label">Status</label>
        </div>
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div class="row g-3 align-items-center pt-3">
        <div class="col-auto">
          <label class="col-form-label">Jira ticket</label>
        </div>
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-auto">
          <label class="col-form-label">Date</label>
        </div>
        <div class="col-auto">
          <input
            type="date"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>

      <div class="row pt-3">
        <div class="col-1">
          <label class="col-form-label">Description</label>
        </div>
        <div class="col-11">
          <input
            type="text"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>

      <div class="pt-2 row">
        <div className="col-1"></div>
        <div class="form-floating col-11">
          <textarea class="form-control"></textarea>
        </div>
      </div>

      <div className="text-center mt-5"> 
      <button type="button" className="btn btn-primary">Add/Update</button>
      <button type="button" className="ms-2 btn btn-primary">Reset</button>
      </div>

    </div>
  );
}
export default AddStatus;
