function Login() {
  return (
    <div>
      <div class="d-flex justify-content-center mt-5">
        <label>
          Login: 
        </label>
        <div className="ps-3">
          <input type="text" class="form-control"/>
        </div>
        <span>@sts</span>
      </div>
      <div className="text-center mt-3">
      <button type="button" className="btn btn-primary">Login</button>
      </div>
    </div>
  );
}
export default Login;
