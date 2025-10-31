const Contact = (props) => {
    const handleClick = (event) => {
        alert(`Calling ${props.name}...`)
        setTimeout(() => {
            event.target.style.display = "none";
        }, 1000);
    }


    return (
        <div className="w-[20%] h-[45%] rounded-lg bg-zinc-300 opacity-80 shadow-lg flex flex-col justify-center items-start p-4">
            <img src={props.image} alt="Profile Picture" className="w-full h-50 mb-5 rounded-xl" />
            <h1 className="font-semibold">Name: {props.name}</h1>
            <p>Email: {props.email}</p>  
            <p>Phone: {props.phone}</p>
            <button className="bg-red-600 p-2 w-full mt-3 text-white rounded-lg" onClick={handleClick}>Call</button>
        </div>
    )
}

export default Contact