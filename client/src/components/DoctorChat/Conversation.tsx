


import React, { useEffect, useState } from 'react';
import "./style.css"
import io from 'socket.io-client';

const socket = io('http://localhost:5000');
const Conversation = () => {


  interface Provider {
    connected: boolean;
    type: string;
  }
  const [msg, setMsg] = useState<Provider[]>([]);
  const [message, setMessage] = useState("");



  const handleSendMessage = () => {
    console.log("sent")
    if (message.trim()) {
      socket.emit('message', {
        message: message
      })
      setMessage("")
    }

  }

  useEffect(() => {
    socket.on('messageResponse', (data: any) => {
      console.log(data,"this is data")
      setMsg([...msg, data])
    })
  }, [socket, msg])







  return (
    <div className="col-md-6 col-lg-7 col-xl-8">
      
      <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
        Conversation messages from User 1
        {msg.map((message:any,i:number)=>(
 <div className="d-flex flex-row justify-content-start" key={i}>
 <img
   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
   alt="User 1"
   style={{ width: '45px', height: '100%' }}
 />
 <div>
   <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>
    {message.message}
   </p>
   <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
 </div>
</div>
        ))}
       

        
        {/* <div className="d-flex flex-row justify-content-end">
          <div>
            <p className="small p-2 me-3 mb-1 rounded-3" style={{ backgroundColor: 'blue', color: 'white' }}>
              Message from User 2
            </p>
            <p className="small me-3 mb-3 rounded-3 text-muted text-end">12:15 PM | Aug 13</p>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="User 2"
            style={{ width: '45px', height: '100%' }}
          />
        </div> */}

      </div>
      <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
          alt="User 1"
          style={{ width: '40px', height: '100%' }}
        />
        <input
          type="text"
          className="form-control form-control-lg"
          id="exampleFormControlInput2"
          placeholder="Type message"
          value={message}
          onChange={(e)=>{
            setMessage(e.target.value);
          }}
          onKeyUp={(e)=>{
            if(e.key === "Enter"){
              handleSendMessage();
            }
          }}
        />
        <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
        <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
        <a className="ms-3" href="#!" onClick={handleSendMessage}><i className="fas fa-paper-plane"></i></a>
      </div>
    </div>
  );
};

export default Conversation;