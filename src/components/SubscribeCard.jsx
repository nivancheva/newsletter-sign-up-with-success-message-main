import { useState } from 'react';
import iconList from '../images/icon-list.svg'
import signDesctop from '../images/illustration-sign-up-desktop.svg';
import signMobile from '../images/illustration-sign-up-desktop.svg';

export default function SubscribeCard({onSubmit}) {
  const [email, setEmail] = useState('');

  function handleClick() {
    onSubmit(email);
  }

    return (
        <>
        <picture className='signUp-image'>
          <source srcSet={signDesctop} media="(min-width:900px)"/>
          <img src={signMobile}/>
        </picture>
        <div className='card-content grid-container'>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className='list'>
            <li className='list-item'>
              <img src={iconList}/>
              <p>Product discovery and building what matters</p>
            </li>
            <li className='list-item'>
              <img src={iconList}/>
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className='list-item'>
              <img src={iconList}/>
              <p>And much more</p>
            </li>
          </ul>
          <form>
            <label className='label' htmlFor='email'>Email adress</label>
            <input 
              id='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='email@company.com'
              className='input'
            />
          </form>
          <button className='button' onClick={handleClick}>Subscribe to monthly newsletter</button>
        </div>
        </>
    )
}