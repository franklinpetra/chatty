import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';


const Messages = ({ messages, name }) => (
    <ScrollToBottom style={{padding: "5% 0", overflow: "auto", flex: "auto"}}>
        {
            messages.map((message, i) => 
            <div 
                key={i}>
                    <Message message={message} name={name}></Message>
            </div>)
        }
    </ScrollToBottom>
);

export default Messages;