import Styled from 'styled-components';

export const FooterArea = Styled.div`
    height:100px;
    display:flex;
    background-color:#131313;
    position:fixed;
    bottom:0;
    right:0;
    left:0;
    border-top:1px solid #CCC;

    .area--one{
        width:35%;
        color:#CCC;
        ul{
            margin:5px;;
            list-style:none;
            font-size:18px;
        
            li{
                margin:5px;
                a{

                    display:flex;
                    width:100%;
                    text-decoration:none;
                    color:#CCC;

                    img{
                        width:25px;
                        height:25px;
                        border-radius:5px;
                        margin-right:5px;
                    }

                        p{
                            margin:0px 20px;;
                        } 
                        
                }     
            }
        }
    }
    .area--two{
        width:45%;
        color:#CCC;
        ul{
            margin:5px;;
            list-style:none;
            font-size:18px;
        
            li{
                margin:5px;
                margin-top:20px;
            }
        }
        
    }
    .area--three{
        width:20%;
        color:#CCC;
        display:flex;
        justify-content:center;
        align-items:center;
        font-weight:bold;
        cursor:pointer;
        
        .chat{
            display:flex;
            height:40%;
            width:70%;
            background-color:green;
            border-radius:20px;
            p{  
                margin:auto;
                width:fit-content;
            }
        }   
            
            .window--chat{
                position:fixed;
                top:120px;
                right:5px;
                width:440px;
                height:400px;
                border-radius:20px;
                background-color:#131313d3;
                
                .mensagem{
                    position:fixed;
                    top:434px;
                }

                button{
                    position:fixed;
                    width:380px;
                    bottom:130px;
                    right:30px;
                    font-size:20px;
                    border-radius:5px;
                    background-color:#131313;
                    border:2px solid #00FF00;
                    color:#FFF;
                    font-weight:bold;
                    cursor:pointer;
                    
                }
                    label{
                        font-size:20px;
                        display:block;
                        padding:10px;

                        input, .box--message{
                            position:fixed;
                            right:20px;
                            font-size:18px;
                            width:290px;
                        }
                        .box--message{
                            width:21.2vw;
                            bottom:207px;
                            height:260px;
                            background-color:#FFF;
                            overflow:auto;

                            div{
                                max-width:21.2vw;
                                font-size:14px;
                                background-color:red;
                            }

                        }
                        input[type=text]{
                            top:445px;
                        }

                        
                    }
            }
    }

`;