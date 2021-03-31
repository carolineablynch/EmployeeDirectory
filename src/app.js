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

  useEffect(() => {
    if(!employees) {
      setFetching(true);
      fetchEmployees({
        success: data => {
          setSemployees(data);
          setFetching(false);
          setError(null);
        },
        fail: () => {
          setError({ message: "Unable to fetch employees" });
          setFetching(false);
        }
      });
    }
  }, [employees]);

  return (
    <div className="App">
      <div style={{
        background: "linear-gradient(180deg, rgba(255,198,181,1) 30%, rgba(110,202,175,1) 100%, rgba(159,238,126,0.6223623238357843) 100%)",
        height: "100px"
      }}>
        <h1>Employee Dashboard</h1>
      </div>
      {error && <Error error={error} />}
      {fetching && "fetching..."}
      {employees && <Dashboard employees={employees.results} />}
    </div>
  );
}

export default App;