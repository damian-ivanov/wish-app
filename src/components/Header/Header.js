import { useLocation } from 'react-router-dom';
export default function Header() {

    let location = useLocation();

    if (location.pathname !== '/notfound') {
        return (
            <header className="App-header">
                <div className="title">
                    <h1>Share your Christmas wish!</h1>
                    <h3>See the how it is rated by Santa</h3>
                </div>
                <img src="https://c.tenor.com/D_gQuXRVQ2wAAAAC/sports-sportsmanias.gif" className="App-logo" alt="logo" />
            </header>
    
        )
    } else {
        return null
    }

   
}