import React, { useEffect, useState } from 'react';
import { FooterArea } from './styled'
import {v4} from 'uuid';
import io from 'socket.io-client';
import imgWhats from './img/whats.png'
import imgFace from './img/facebook.png'
import imgInsta from'./img/instagram.webp'

    const socket =io('http://192.168.1.91:3001');
    
    socket.on('connect',()=>{
        console.log('conectado!')
    })

const Footer = () => {


    const [chatVisible, setChatVisible]=useState(true);
    const [messages, setMessages]=useState('')
    const [email, setEmail]=useState('');
    const [messageClient, setMessageClient]=useState('');


     const handleSubmit =event =>{
        event.preventDefault();

        setMessages({
            email:email,
            message:messageClient,
        })
        
        socket.emit('receiveMessage',{
            email:email,
            message:messageClient
        });

    }  
    
useEffect(()=>{

    const correctScroll=()=>{
        setTimeout(() => {
            var elemento = document.querySelector('.box--message');
            elemento.scrollTop = elemento.scrollHeight; 
            setMessageClient('');
        }, (10));
    }
     correctScroll();
},[messages])



    return(
        <FooterArea>
            <div className='area--one'>
                <ul>
                    <li>
                        <a target="_blanck" href="https://api.whatsapp.com/send?phone=5521979469524">
                        <img src={imgWhats} alt="ERROR" />
                        <p>WhatsApp:   (21) 97946-9524</p>
                        </a>
                    </li>

                    <li>
                        <a target="_blanck" href="https://www.facebook.com/yagopaiiva">
                        <img src={imgFace} alt="ERROR" />
                        <p>Facebook:   facebook.com/Restaurant</p>
                        </a>
                    </li>
                
                    <li>
                        <a target="_blanck" href="https://www.instagram.com/paivayago_">
                        <img src={imgInsta} alt="ERROR"/>
                        <p>Instagram:   instagram.com/Restaurant</p>
                        </a>
                    </li>
                </ul>

            </div>

            <div className='area--two'>
              
                <ul>

                    <li>
                        Endereço: Rua Panamense, Número 251
                    </li>

                    <li>
                        Copyright © 2020 - All Rights Reserved - paiivas.com
                    </li>

                </ul>

            </div>

            <div className="area--three">

                <div className="chat" onClick={()=>{
                    setChatVisible(!chatVisible)
                }}>
                    <p>Posso ajudar?</p>
                </div>

                <div hidden={chatVisible} className="window--chat">
                    <form onSubmit={handleSubmit}>

                    <label>
                        Email:
                        <input 
                        placeholder="Digite seu email..."
                        required
                        onChange={state=>setEmail(state.target.value)}
                        type="email" />
                    </label>

                    <label>
                        Conversa:
                    <div className="box--message">
                        {
                            useEffect(()=>{
                            const renderMessages =()=>{
                                var elemento = document.querySelector('.box--message');
                                var newDiv = document.createElement('div')
                                newDiv.setAttribute('class', v4())
                                newDiv.innerText=messages.message
                                elemento.appendChild(newDiv);
                             }


                            if(messages)renderMessages()
        
                            },[messages])
                        }                     
                    </div>
                    </label>

                    <label className ="mensagem">
                        Mensagem:
                        <input 
                        type="text" 
                        placeholder="Digite sua mensagem"
                        value={messageClient}
                        onChange={state=>setMessageClient(state.target.value)}
                        required
                        /></label>
                    <button>Enviar</button>
                </form>
                </div>

            </div>

        </FooterArea>
    )
}

export default Footer;