import ListNode from "./ListNode";
import './extras.css';
import React, { useState, useEffect } from 'react';

function List() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        // Fetch JSON data from server
        fetch('/datos')
        .then(response => response.json())
        .then(data => setJsonData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return (
        <div className="w-full h-full flex flex-col items-center">
            
            <div id="list_parent" className="flex flex-wrap gap-4 p-6  justify-self-center justify-center text-lg font-serif w-75 ">
                {
                    jsonData.map((item, i) => (
                        <ListNode key={item.id} user={item.username} password={item.password} note={item.note}></ListNode>
                    ))
                }
            </div>

        </div>
      
    );
}
  
export default List;