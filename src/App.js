import React, { useState, useEffect } from "react";
import './App.css';
// import AllComponent from './component/AllComponent';
import Loader from './component/Loader';
import Linkpage from './component/Linkpage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <Linkpage />
      )}
    </div>
  );
}

export default App;
