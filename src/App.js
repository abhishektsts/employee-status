import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddStatus from "./components/AddStatus";
import ViewStatus from "./components/ViewStatus";
import ViewUsers from "./components/ViewUsers";
import Login from "./components/Login";
import Footer from "./components/Footer";
import AddUser from "./components/AddUser";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App container-fluid">
        {/* Header */}
        <header className="App-header">
          <Header></Header>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="view-status" element={<ViewStatus />} />
          <Route path="add-status" element={<AddStatus />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="view-user" element={<ViewUsers />} />
          <Route path="login" element={<Login />} />
        </Routes>

        <div className="main-content conatiner">

        </div>
        {/* footer */}
        <footer className="container-fluid">
          <Footer></Footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
