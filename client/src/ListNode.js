
import React, { useRef } from 'react';
import './extras.css';

function ListNode(props) {
    const elementRef = useRef(null);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function copyToClipboard(text) {
        try {
            const button = elementRef.current;
            await navigator.clipboard.writeText(text);
            button.innerHTML = "¡Copiado!";
            await sleep(1500);
            button.innerHTML = "Copiar";
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
        
    }

    return (
        <div href="#" className="bg-gray-100 flex-grow text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
            {props.user}
            <div className="text-gray-500 font-thin text-sm pt-1">
                <span>{props.note}</span>
            </div>

            <div className="flex flex-row-reverse">
                <button ref={elementRef} className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => copyToClipboard(props.password)}>Copiar</button>
            </div>
        </div>
    );
}
  
export default ListNode;