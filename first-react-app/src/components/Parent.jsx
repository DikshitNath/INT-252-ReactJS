function Child({sendData}) {
    return <button onClick={sendData}>Send Data to Parent</button>
}

function Parent({sendData}) {
    const handleData = () => alert('Data recieved')
    return <Child sendData={handleData}/>
}

export default Parent