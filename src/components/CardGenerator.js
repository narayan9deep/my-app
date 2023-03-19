import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card";
import "../App.css"

export default function CardGenerator() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = () => {
    Axios.get(
      `https://${process.env.REACT_APP_API_KEY}.mockapi.io/api/vi/tasks/newList`
    )
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  };

  console.log(isError)

    return(
      
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 container">
                {myData.length > 0 && myData.map((data) => <Card key={data.id} 
                                                                  title={data.jobTitle} 
                                                                  company={data.companyName}
                                                                  industry={data.industry} 
                                                                  location={data.location} 
                                                                  remotetype={data.remoteType} 
                                                                  expMin={data.experienceMin} 
                                                                  expMax={data.experienceMax} 
                                                                  salaryMin={data.salaryMin} 
                                                                  salaryMax={data.salaryMax} 
                                                                  employeeNo={data.totalEmployees} 
                                                                  quickApply={data.quickApply} 
                                                                  externalApply={data.externalApply} 
                                                                />)}
            </div>
     
    )
}
