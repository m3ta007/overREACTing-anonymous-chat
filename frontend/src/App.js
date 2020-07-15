import React from 'react'
import './App.css'
import MessageHistory from './components/MessageHistory'
import log from './data/chat-log.json'

function App() {
  const messages = log

  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>
    </div>
  )
}

export default App
