import { useEffect, useState } from 'react';

import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  const handleSubmittest = async (e) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      handleSubmittest2(e) 
  } else {
    handleSubmittest3(e) 
  }
    }

  const handleSubmittest3 = async () => {
    
  try {
    const response = await axios.get("https://morning-refuge-53145-0fa23c113e12.herokuapp.com/api/hello");
    alert(response.data.message);
  
  } catch (error) {
    console.error("Error fetching health status:", error);
  }
  };

  const handleSubmittest2 = async () => {
    try {
      const response = await axios.get("http://localhost:5002/api/hello");
      alert(response.data.message);
   
    
    } catch (error) {
      console.error("Error fetching health status:", error);
    }
    };


  useEffect(() => {
    fetch(' http://localhost:5002/api/hello')
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

  return (

    <div>
        <button onClick={handleSubmittest}>Test Post.</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
