import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import twotalkers from "./twotalkers.png";
import './App.css';


const socket = io.connect('http://localhost:8000')

function App() {
  const [state,setState] = useState({ message:"", name:""})
  const [chat,setChat] = useState([])

  useEffect(()=> {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
  })

const onTextChange = e => {
  setState({...state, [e.target.name]: e.target.value })
}

const onMessageSubmit = (e) => {
  e.preventDefault()
  const { name, message } = state
  socket.emit('message', { name, message })
  setState({ message: '', name })
}


const renderChat= () =>{
  return chat.map(({name, message}, index) => (
    <div key={index}>
      <p>{name}: <span>{message}</span></p>
    </div>
  ))
}

  return (
        <div className="card">
          <form onSubmit={onMessageSubmit}>
            <fieldSet>
              <legend>
                <h4 style={{margin:"0% 0% 0% 20%"}}>Messenger</h4>
              </legend> 
              <div className="name-field">
                <TextField 
                  name="name" 
                  onChange={e => onTextChange(e)} 
                  value={state.name} 
                  label=" &nbsp; &nbsp; Name"/>
              </div>
              <div>
                <TextField 
                  name="message"  
                  onChange={e => onTextChange(e)} 
                  value={state.message} 
                  id="outlined-multiline-static"
                  variant="outlined"
                  label="Message"/>
              </div>
              <button  color="white" >Send Message &nbsp; {<Icon style={{margin:"0% 0% -5% 0%", color:"beige"}}>send</Icon>}</button> <br/> 
            </fieldSet>
          </form>
          <div className="render-chat">
            <fieldSet>
              <legend>
                <h4 style={{margin:"0% 0% 0% 30%"}}>Chat Log</h4>
                <img style={{ margin:"3% 0% 0% 35%", height:"75px", alignContent:"center", mixBlendMode:"multiply"}} src={twotalkers} alt="two people talking" />
              </legend>
              {renderChat()}
            </fieldSet>
          </div>
        </div>
  );
}

export default App;
