import notFound from '../../../src/notFound.png'
import './NotFound.css';

export default function NotFound() {

   window.scrollTo(0, window.innerHeight / 2);

    return (
        <div className='notFound'>
            <img src={notFound} alt="not found" />
        </div>
    )
}