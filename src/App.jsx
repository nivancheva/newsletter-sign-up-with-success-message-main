import { useState } from 'react'
import './App.css'
import SubscribeCard from './components/SubscribeCard'
import ThankYouCard from './components/ThankYouCard'

function App() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  function handleSubmit(email) {
    setSubscribed(true);
    setEmail(email);
  }

  function handleDismiss() {
    setSubscribed(false);
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        {subscribed
        ?
        <ThankYouCard email={email} onSubmit={handleDismiss}/>      
        :
        <SubscribeCard onSubmit={handleSubmit}/>
        }

      </div>
    </div>
  )
}

export default App
