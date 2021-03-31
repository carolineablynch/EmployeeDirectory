import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Error from "./Error";
import "./App.css";

async function fetchEmployees({ success, fail }) {
    try {
      const response = await fetch("https://randomuser.me/api/?results=100");
      const data = await response.json();
  
      if(data.error)
        fail(data.error);
      else
        success(data);
    } catch(error) {
      fail(error);
    }
  }

  function App() {
    const [employees, setSemployees] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);