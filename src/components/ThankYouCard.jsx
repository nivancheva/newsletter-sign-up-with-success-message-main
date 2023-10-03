import iconSuccess from '../images/icon-success.svg'
import './ThankYouCard.css';

export default function ThankYouCard({onSubmit}) {
    function handleClick() {
        onSubmit();
    }

    return (
        <div className='thankYou-card grid-container'>
           
            <img className='icon-success' src={iconSuccess}/>
            <div>
                <h1 className='thankYou-header'>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <span className='bold'>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription</p>
            </div>

            <button className='button button-dismiss' onClick={handleClick}>Dismiss message</button>
        </div>
    )
}