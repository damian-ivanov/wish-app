import notFound from '../../../src/notFound.png'
import './NotFound.css';

export default function NotFound () {
    
    return (
        <div className='notFound'>
        <img src={notFound} alt="not found"/>
        </div>
    )
}