import React from "react";
import { colors } from "./colors";
import "../App.css"

export default function Card(props) {
    const braceLeft = "("
    const braceRight = ")"
    const height = 48
    const breadth = 48

    return (
        <div className={`p-4 shadow-md lg:max-w-3xl bg-[${colors.cardColor}] m-5 rounded-md bigger-box border border-[${colors.cardBorder}]`}>
            <div className="box">
                <div className="flex">
                        <div>
                            <img src="https://cdn.svgporn.com/logos/netflix-icon.svg" alt="job-icon" height={height} width={breadth}/>
                        </div>

                        <div>
                            <div className="smallbox text-left ml-2">
                                <h3 className="text-xl text-left">
                                    {props.title}
                                </h3>

                                <div>
                                    <p>
                                        {props.company} - {props.industry}<br />
                                        
                                        {props.location ? (<span className={`text-[#7a7a7a]`}>{props.location}</span>):null} {props.remotetype ? (
                                        <span className={`text-[#7a7a7a]`}>{braceLeft}{props.remotetype}{braceRight}<br /></span>
                                    ) : null}
                          
                                    </p>
                                </div>
                            </div>
                  

                            <div>
                                <div className="mt-6 ml-2">
                                    <p className="text-left">
                                    

                                    <span>Part - Time (9.00 am - 5.00 pm IST)</span> <br/>
                                    {props.expMin ? (<span>Experience {braceLeft}<span>{props.expMin} </span> 
                                    {props.expMax? (<span>- {props.expMax} </span> ):null}
                                    years{braceRight}<br /></span>) : null}  

                                    {props.salaryMin ? (<span>INR (₹) 
                                        {props.salaryMin ? (<span> {props.salaryMin}</span>):null}
                                        {props.salaryMax ? (<span> - {props.salaryMax} </span>):null}
                                         / Month<br /></span>) : null} 

                                    {props.employeeNo ? (<span>{props.employeeNo} employees<br /></span>):null}
                                    
                                        
                                    </p>
                                </div>

                                <div className="flex justify-start">
                                    {props.quickApply === "quick" && <button class="bg-[#1597E4] hover:bg-gray-600 text-white py-2 px-4 rounded-md mt-8 ">
                                        <span>Apply Now</span>
                                    </button>}

                                    {props.externalApply === "external" && <button class="bg-transparent hover:bg-gray-600 hover:border-transparent text-[#1597E4] rounded-md hover:text-white py-2 px-4 border border-[#1597E4] mt-8">
                                        <span>External Apply</span>
                                    </button>}
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>  
       
    );
}