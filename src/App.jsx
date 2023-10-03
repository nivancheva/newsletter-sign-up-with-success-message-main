import './App.css'
import iconList from './images/icon-list.svg'
import signDesctop from './images/illustration-sign-up-desktop.svg';
import signMobile from './images/illustration-sign-up-desktop.svg';


function App() {
  return (
    <div className='wraper'>
      <div className='container'>
        <picture>
          <source srcSet={signDesctop} media="(min-width:600px)"/>
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
          <div>
            <label className='label' htmlFor='email'>Email adress</label>
            <input 
              id='email'
              name='email'
              placeholder='email@company.com'
              className='input'
            />
          </div>
          <button className='button'>Subscribe to monthly newsletter</button>
        </div>
      </div>
    </div>
  )
}

export default App
