import { useState } from 'react'
import './App.css'
import SubscribeCard from './components/SubscribeCard'
import ThankYouCard from './components/ThankYouCard'


function App() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit() {
    setSubscribed(true);
  }

  function handleDismiss() {
    setSubscribed(false);
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        {subscribed
        ?
        <ThankYouCard onSubmit={handleDismiss}/>      
        :
        <SubscribeCard onSubmit={handleSubmit}/>
        }

      </div>
    </div>
  )
}

export default App
