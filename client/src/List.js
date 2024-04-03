import ListNode from "./ListNode";
import './extras.css';
import React, { useState, useEffect } from 'react';

function List() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        // Fetch JSON data from localhost server
        fetch('http://localhost:3001/datos')
        .then(response => response.json())
        .then(data => setJsonData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return (

        <div className="w-full h-full flex flex-col items-center">
            
            <div className="mb-3 flex flex-row align-items-start w-full justify-between">
                
                <h1 className="font-bold" style={{fontSize:'1.5rem', marginLeft:'3rem'}}>Contraseñas guardadas</h1>
                <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " style={{marginRight: '3rem'}}> Agregar </button>

            </div>

            <div className="flex w-full border border-t-2 border-t-black"></div>

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