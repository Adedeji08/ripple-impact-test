import "./App.css";
import Layout from "./component/Layout";
import Dashboard from "./views/Dashboard";
import LandingPage from "./views/LandingPage";
import { Routes, Route } from "react-router-dom";
import Wallet from "./views/Wallet";
import Employee from "./views/Employee";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route path="/" element={<LandingPage />}/>
        <Route path="/wallet" element={<Wallet />}/>
        <Route path="/employee" element={<Employee />}/>
      </Routes>
    </div>
  );
}

export default App;
