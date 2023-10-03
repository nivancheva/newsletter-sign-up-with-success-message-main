import './App.css'
import iconList from './images/icon-list.svg'


function App() {
  return (
    <div className='toRemove'>
      <div><button className='button'>Test</button></div>
      <ul className='list'>
        <li className='list-item'>
          <img src={iconList}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, suscipit?</p>
        </li>
        <li className='list-item'>
          <img src={iconList}/>
          <p>Testkjsnhasj</p>
        </li>
        <li className='list-item'>
          <img src={iconList}/>
          <p>Testkjsnhasj</p>
        </li>
      </ul>

      <label className='label' htmlFor='email'>Email address</label>
      <div><input 
        className='input'
        id='email'
        name='email'
        type='email'
        placeholder='email@company.com'
      /></div>
    </div>
  )
}

export default App
