import React from "react"
export default function Searchbar({search,setSearch}){
    return(
        <div>
            <input type="text" value={search} className="form-control"
            onChange={(e)=>setSearch(e.target.value)} />
        </div>
    )
}