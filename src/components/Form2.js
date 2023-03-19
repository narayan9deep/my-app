import "../App.css"
import Axios from "axios";
import React, {useState} from "react"
import {colors} from "./colors"

export default function Form2(props)
{
  const [data, setData] = useState(
    {
    experienceMin: "",
    experienceMax: "",
    salaryMin: "",
    salaryMax: "",
    totalEmployees:"",
    quickApply:"",
    externalApply: "",
    }
  )

  const { formData } = props;
  
  const clickSubmit = function(e)
  {
    e.preventDefault()
    Axios.post(`https://${process.env.REACT_APP_API_KEY}.mockapi.io/api/vi/tasks/newList`,{
        jobTitle: formData.jobTitle,
        companyName: formData.companyName,
        industry: formData.industry,
        location: formData.location,
        remoteType: formData.remoteType,
        experienceMax: data.experienceMax,
        experienceMin:data.experienceMin,
        salaryMin:data.salaryMin,
        salaryMax:data.salaryMax,
        totalEmployees:data.totalEmployees,
        quickApply: data.quickApply,
        externalApply: data.externalApply
      }
    )
    .then(res=>
      {console.log("posting data",res); 
      props.onFormSubmit();})
    .catch(err=>console.log(err))
  }

  function handleChange(e)
  {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }

    return(
        <div className="mt-4">
          <div className="max-w-xl h-auto">

            <form className=" relative shadow-md rounded px-8 pt-6 pb-8 mb-4">

              <ul className="mb-6 flex justify-between">
                <li className="mr-6">
                  <p className={`text-${colors.dark}`}>Create a job</p>
                </li>
                <li className="ml-auto ml-6">
                  <p className={`text-${colors.dark}`}>Step 2</p>
                </li>
              </ul>

              <div className="mb-6 mt-4">
                <label className={`block text-${colors.dark} text-sm  mb-2 text-left`} htmlFor="experienceMin experienceMax">
                  Experience
                </label>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-6">
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-${colors.dark} leading-tight focus:outline-none focus:shadow-outline`} id="experienceMin" value={data.experienceMin} onChange={(e)=>handleChange(e)} type="text" placeholder="Minimum"/>
                  </div>
                  <div className="w-1/2">
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-${colors.dark} leading-tight focus:outline-none focus:shadow-outline`} id="experienceMax" value={data.experienceMax} onChange={(e)=>handleChange(e)} type="text" placeholder="Maximum"/>
                  </div>
                </div>
              </div>  

              <div className="mb-6">
                <label className={`block text-${colors.dark} text-sm  mb-2 text-left`} htmlFor="salaryMin salaryMax">
                  Salary
                </label>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-6">
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-${colors.dark} leading-tight focus:outline-none focus:shadow-outline`} id="salaryMin" value={data.salaryMin} onChange={(e)=>handleChange(e)} type="text" placeholder="Minimum"/>
                  </div>
                  <div className="w-1/2">
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-${colors.dark} leading-tight focus:outline-none focus:shadow-outline`} id="salaryMax" value={data.salaryMax} onChange={(e)=>handleChange(e)} type="text" placeholder="Maximum"/>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className={`block text-${colors.dark} text-sm  mb-2 text-left`} htmlFor="totalEmployees">
                  Total Employee
                </label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-${colors.dark} leading-tight focus:outline-none focus:shadow-outline`} id="totalEmployees" value={data.totalEmployees} onChange={(e)=>handleChange(e)} type="text" placeholder="ex. 100"/>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm  mb-4 text-left" htmlFor="apply-type">
                  Apply Type
                </label>
                <div className="flex mb-28">
                  <div className="mr-6">
                    <div className="flex  mb-4">
                      <input id="quickApply" type="radio" value="quick" onChange={(e)=>handleChange(e)} name="apply-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quick apply</label>
                    </div>
                  </div>
                  <div>
                    <div className="flex ">
                      <input id="externalApply" type="radio" value="external" onChange={(e)=>handleChange(e)} name="apply-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">External Apply</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button id="submitButton" className="bg-blue-500 hover:bg-blue-700 border text-white py-2 px-4 rounded absolute right-8 bottom-8" onClick={clickSubmit}>
                  Submit
                </button>
              </div>
            </form>   

          </div>

        </div>

    )
}