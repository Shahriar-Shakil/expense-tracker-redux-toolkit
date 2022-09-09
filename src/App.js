import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AllTransaction from "./Pages/allTransaction";
import Home from "./Pages/home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alltransaction" element={<AllTransaction />} />
      </Routes>
    </Layout>
  );
}

export default App;
