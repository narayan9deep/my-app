import React from "react"
import "../App.css"

export default function Header(props){
    return(
        <div>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <span className="-m-1.5 p-1.5">
                           
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                        </span>
                    </div>
                    
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={props.onButtonClick}>
                                Create Job
                        </button>
                    </div>

                </nav>
                <hr/>
            </header>
        </div>
    )
}