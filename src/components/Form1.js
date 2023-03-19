import React, {useState} from "react"
import { colors } from "./colors"
import "../App.css"

export default function Form1(props)
{
  const [data, setData] = useState(
    {
    jobTitle: "",
    companyName: "",
    industry: "",
    location: "",
    remoteType: "",
    }
  )

  function handleChange(e)
  {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  const postData = function(e)
  {
    if(data.jobTitle.trim()==="" || data.companyName.trim()==="" || data.industry.trim()==="")
    {
      alert("Fields marked * are mandatory")
      e.preventDefault()
    }
    else
    {
      props.onButtonClick()
      e.preventDefault()
      props.onFormSubmit(data);
    }
  }

    return(
        <div className="mt-4">
          <div className=" max-w-xl h-auto">

            <form className=" relative shadow-md rounded px-8 pt-6 pb-8 mb-4">

              <ul className="mb-6 flex justify-between">
                <li className="mr-6">
                  <p className={`text-[${colors.dark}] `}>Create a job</p>
                </li>
                <li className="ml-auto ml-6">
                  <p className={`text-[${colors.dark}] `}>Step 1</p>
                </li>
              </ul>

              <div className="mb-6 mt-4">
                <label className={`block  text-[${colors.dark}] text-sm  mb-2 text-left`} htmlFor="job-title">
                  Job title<span className={"text-red-500"}>*</span>
                </label>
                <input id="jobTitle" value={data.jobTitle} onChange={(e)=>handleChange(e)} className={`shadow appearance-none border rounded w-full py-2 px-3 text-[${colors.dark}] leading-tight focus:outline-none focus:shadow-outline`} type="text" placeholder="ex. UX UI Designer"/>
              </div>

              <div className="mb-6">
                <label className={`block text-[${colors.dark}] text-sm  mb-2 text-left`}  htmlFor="company-name">
                  Company Name<span className={"text-red-500"}>*</span>
                </label>
                <input id="companyName" value={data.companyName} onChange={(e)=>handleChange(e)} className={`shadow appearance-none border rounded w-full py-2 px-3 text-[${colors.dark}] leading-tight focus:outline-none focus:shadow-outline`} type="text" placeholder="ex. Google"/>
              </div>

              <div className="mb-6">
                <label className={`block  text-[${colors.dark}] text-sm  mb-2 text-left`} htmlFor="industry">
                  Industry<span className={"text-red-500"}>*</span>
                </label>
                <input id="industry" value={data.industry} onChange={(e)=>handleChange(e)} className={`shadow appearance-none border rounded w-full py-2 px-3 text-[${colors.dark}] leading-tight focus:outline-none focus:shadow-outline`} type="text" placeholder="ex. Information Technology"/>
              </div>

              <div className="flex mb-4">
                <div className="w-1/2 mr-6">
                  <div className="mb-4">
                    <label className={`block  text-[${colors.dark}] text-sm  mb-2 text-left`} htmlFor="location">
                      Location
                    </label>
                    <input id="location" value={data.location} onChange={(e)=>handleChange(e)} className={`shadow appearance-none border rounded w-full py-2 px-3 text-[${colors.dark}]  leading-tight focus:outline-none focus:shadow-outline`} type="text" placeholder="ex. Chennai"/>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="mb-4">
                    <label className={`block  text-[${colors.dark}] text-sm  mb-2 text-left`} htmlFor="remote-type">
                      Remote Type
                    </label>
                    <input id="remoteType" value={data.remoteType} onChange={(e)=>handleChange(e)} className={`shadow appearance-none rounded w-full py-2 px-3 text-[${colors.dark}] leading-tight focus:outline-none focus:shadow-outline mb-24`} type="text" placeholder="ex. In-office"/>
                  </div>
                </div>
              </div>

              <button id="nextButton" className="bg-blue-500 hover:bg-blue-700 border text-white py-2 px-4  rounded absolute right-8 bottom-8" onClick={postData}>
                Next
              </button>

            </form>   
          </div>
        </div>
    )
}