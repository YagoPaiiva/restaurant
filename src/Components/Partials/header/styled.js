import Styled from 'styled-components';

export const HeaderArea = Styled.div`

    background-color:#131313;
    height:110px;
    border-bottom:1px solid #CCC;

    a{
        text-decoration:none;
    }

        .area--image{
            position:relative;
            width:1000px;
            margin:auto;
            diplay:flex;
            
            .imagelogoOne, .imagelogoTwo{
                width:107px;
                height:107px;
                border:2px solid #FFF;
                border-radius:10px;
            }
            .imagelogoTwo{
                position:fixed;
                right:180px;
            }
        }

        .area--header{
            position:fixed;
            top:0;
            left:290px;
            width:790px;
            justify-content:center;

            .area--title{
                width:100%;           
                text-align:center;   
                height:55px;
                .home{
                    width:fit-content;
                    font-size:48px;
                    color:#FFF;
                    text-shadow:2px 2px 3px #f5a73a;

                }
            }
            .area--menu{
                width:790px;
                ul{
                    width:750px;
                    display:flex;
                    list-style:none;
                    margin:0;
                
                    li{
                        margin:auto;
                        p{
                            font-size:20px;
                            color:#CCC;
                            text-shadow: 1px 1px 1px #FFF;
                            transition:all linear 1s;
                            border-bottom:3px solid #131313;

                            &:hover{
                                border-bottom:3px solid #f5a73a;
                            }
                        }
                    }
                }

            }
        }
`;