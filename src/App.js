import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/layouts/LayoutMain/Layout";

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
