import React from 'react'
import './ticket.css'

export default function Ticket({ticketData,userdata,byUser}) {
    const getname=()=>{
        for(let i=0;i<userdata?.length;i++){
            if(userdata[i]["id"]===ticketData["userId"]){
                return userdata[i]["name"][0];
            }
        }
    }
  return (
    <>
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">{ticketData.id}</div>
                {byUser===false && <div style={{backgroundColor:'black',height:'20px',width:'20px',borderRadius:'50%'}}>
                    <p style={{color:'white',margin:'-2px 0px 0px 4px'}}>{getname()}</p>
                </div>}
            </div>
            <div className="card-title">
                {ticketData.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1024 1024"><path fill="currentColor" d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"/></svg></div>,
                        1: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><g fill="currentColor"><path fill-rule="evenodd" d="M35 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4Zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21Zm3-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1h-4Z" clip-rule="evenodd"/><path d="M6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z"/></g></svg></div>,
                        2: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><g fill="currentColor"><path d="M19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z"/><path fill-rule="evenodd" d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9Zm3-1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4Z" clip-rule="evenodd"/></g></svg></div>,
                        3: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><path fill="currentColor" d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM9 30a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H9Z"/></svg></div>,
                        4: <div className="card-tag-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path fill="red" d="M5.96 4.457a2.075 2.075 0 1 1 4.08 0l-.856 4.56a1.205 1.205 0 0 1-2.368 0l-.855-4.56ZM9.5 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"/></svg></div>
                    }[ticketData.priority]
                }

                {
                    ticketData.tag.map((tag) => {
                        return(
                            <div className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
