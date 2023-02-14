import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/layouts/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
