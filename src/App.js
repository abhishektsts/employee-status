import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddStatus from "./components/AddStatus";
import ViewStatus from "./components/ViewStatus";
import Login from "./components/Login";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App container-fluid">
        {/* Header */}
        <header className="App-header">
          <Header></Header>
        </header>

        <Routes>
          <Route path="view-status" element={<ViewStatus />} />
          <Route path="add-status" element={<AddStatus />} />
          <Route path="login" element={<Login />} />
        </Routes>

        <div className="main-content conatiner"></div>
        {/* footer */}
        <footer className="container-fluid">
          <Footer></Footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
