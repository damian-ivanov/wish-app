export default function Login () {

    
        fetch('http://localhost:3030/jsonstore/collections/books')
        .then(res => res.json())
        .then(data => console.log(data));        

        fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify('peter@abv.bg', '123456')
        })
        .then(res => res.json())
        .then(data => console.log(data));        
    
    return (
        <>
        
        <h1>oh hi!</h1>
        </>
    )   
}