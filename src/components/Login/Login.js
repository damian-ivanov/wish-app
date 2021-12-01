export default function Login () {

    
        fetch('http://localhost:3030/jsonstore/collections/books')
        .then(res => res.json())
        .then(data => console.log(data));        
    
    return (
        <>
        
        <h1>oh hi!</h1>
        </>
    )   
}