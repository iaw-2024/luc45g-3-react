

function Header() {
	return (
		<div className="mb-3 flex flex-row align-items-start w-full justify-between">
					
			<h1 className="font-bold" style={{fontSize:'1.5rem', marginLeft:'3rem'}}>Contraseñas guardadas</h1>
			<button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " style={{marginRight: '3rem'}}> Agregar </button>

		</div>
		
	);
}

export default Header;
