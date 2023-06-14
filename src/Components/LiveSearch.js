import React, { useEffect, useState } from 'react';

let data = ["Kyamu", "Sagar", "Sufia", "Lubna", "Sanu", "Sakshi", "Salman", "Sarukh", "Ram", "Sayam", "Mohan", "Noor", "Fatima"]

const LiveSearch = () => {
    let [search, setSearch] = useState("");
    let [filteredData, setFilteredData] = useState(data);


    useEffect(() => {
        console.log("filtered data");
        setFilteredData(data.filter((value) => value.includes(search)));
    }, [search])

    return (
        <div>
            <input type='text' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
            {
                filteredData.map((value) => (
                    <p>{value}</p>
                ))
            }
        </div>
    )
}

export default LiveSearch;