import css from 'styled-jsx/css'

const borderRadius = '8px'

export const CardStyles = css`       
    section{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 24px;
        width: 100%;
        margin-bottom: 3rem;
        padding: 0 4rem;
    }
    h3, h6{
        color: #4e4e4e;
        margin: 0;
    }
    span{
        display: flex;
        flex-wrap: wrap;
    }
    span > h6{
        margin-right: .5rem;        
    }
    div{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.171);
        cursor: pointer;     
        border-radius: ${borderRadius};
        padding: 1rem;
        transition: transform .3s; 
        min-height: 250px;
        max-width: 270px;
    }    
    div:hover{
        transform: scale(1.05);
    }
    footer{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }  
    footer > h6{
        margin-top: .5rem;
    }
    img{
        border-radius: ${borderRadius};
        width: 100%;
    }
    @media (max-width: 880px) {
        section {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
    }
    @media (max-width: 550px) {
        section {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            place-items: center;
            padding: 0 2rem;
        }
        div, img{
            width: 80%;
        }
        div > img{
            margin-top: .5rem;
            margin-bottom: .5rem;            
        }
    }
  /*   @media (max-width: 410px) {
        section {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        }
    } */
`

export const CardDetailsStyes = css`    
        main{
            height: calc(100vh - 64px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        main > img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;    
            z-index: -100;
            height: calc(100vh - 64px);
            max-height: unset;
            border-radius: 0;
        }
        section{
            display: grid;
            grid-template-columns: 1fr 2fr;
            margin-bottom: 3rem;
        }  
        picture{
            text-align: end;
            background: #1b1b1e;
            border-bottom-left-radius: ${borderRadius};
            border-top-left-radius: ${borderRadius};
        }   
        img{
            border-bottom-left-radius: ${borderRadius};
            border-top-left-radius: ${borderRadius};
        }     
        div{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.171); 
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          min-width: 460px;
          max-width: 460px;
          padding: 1rem;
          transition: transform .3s;  
          width: 50%; 
          background: #1b1b1e;
          opacity: 0.8;
          color: white;
        }    
        h1, h6{
            margin: 0;
        }
        footer{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
        }
        span{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .flex{
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            margin-top: .5rem;
        }
        .flex > h5{
            margin-right: 1rem;
        }
        .rating{
            min-width: 25%;
            text-align: end;
        }
        span > h5{
            display: inline-block;
            margin: 0;            
        }       
        @media (max-width: 1475px){
            div{
                width: 460px;
            }
        }
        @media (max-width: 820px){
            div{
                width: 100%;
            }
        }  
        @media (max-width: 700px){
            section{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding: 0 2rem;
            }
            picture{
                background-color: unset;
            }
            picture > img{
                width: auto;
                max-height: 40vh;
                border-radius: ${borderRadius};
                margin-top: 39px;
            }         
            div{
                box-shadow: none;
                align-items: center;
                border-radius: ${borderRadius};
                min-width: unset;
                max-width: unset;
            }               
            h1, h6{
                margin-bottom: 1rem;
            }
            h1{
                font-size: 16px;
            }
            footer{
                font-size: 13px;
            }
            .button{
                position: absolute;
                top: 10%;
                left: 10%;
            }
        }
      `

export const ChangePageStyles = css`
    .container--change-page{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 2rem;
    }
    h6{
        display: inline-block;
        margin: 0;
        font-size: 1rem;
    }
    nav{
        box-shadow: 0 0px 10px rgb(0 0 0 / 17%);
        padding: 0.5rem .8rem;
        position: relative;
        border-radius: 35px;
        display: flex;
        align-items: center;
    }
    button{
        cursor: pointer;
        border-radius: 50%;
        border: none;
        outline: none;
        padding: 1rem;
        background-color: var(--blue);
        color: white;
        transition: background-color .3s;
        margin: 0 .5rem;
    }
    button:hover{
        background-color: var(--lightBlue);
        color: black;
    }
    .button-disabled{
        background-color: #b7b7b7;
    }
    .button-disabled:hover{
        cursor: not-allowed;
        color: white;
        background-color: #b7b7b7;
        user-select: none;
    }
    @media (max-width: 550px){
        button{
            padding: .5rem;
        }
        h6{
            font-size: .8rem;
        }
    }
`
