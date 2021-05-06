
import css from 'styled-jsx/css'

import { heightHeader } from 'Constants'

export const container = css`
    main{
        text-align: center;
    }
`
const widthAndHeight = '15px'
const lineHeight = '40px'

export const headerStyles = css`
    header{
        background-color: var(--lightBlue);
        height: ${heightHeader};
        display: flex;
        justify-content: space-between;
        padding: 0 3rem 0 2rem;
        position: sticky;
        top: 0;
        z-index: 10000;
    }

    h1{
        margin: 0;
        line-height: ${heightHeader};
        color: #fafafa;
    }  

    h3{
        line-height: ${heightHeader};
        margin: 0;
    }

    .letter-spacing{
        letter-spacing: 1px;
    }

    ul{
        display: grid;
        grid-template-columns: repeat(2, minmax(150px, 1fr));
        grid-auto-rows: ${lineHeight};
        grid-gap: 0 2rem;
        padding: .5rem 1rem;
        align-items: center;
        background-color: var(--blue);
        color: white;
        font-weight: 600;
        z-index: 100;
        position: absolute;
        border-radius: 5px;
        display: none; 
        margin: 0;
        list-style: none;
        animation: display .5s;
    }    

    .movie-filter-grid{
        grid-template-columns: minmax(150px, 1fr);
    }

    .display-menu{
        display: grid;
    }


    @keyframes display {
        0% {opacity: 0; transform: scale(0);}
        50%{transform: scale(1.05);}
        100% {opacity: 1;transform: scale(1);}
    }
    
    ul::before{
        content: '';
        display: block;
        width: ${widthAndHeight};
        height: ${widthAndHeight};
        background-color: var(--blue);
        position: absolute;
        top: calc(${widthAndHeight} / -2);
        left: 15%;
        transform: rotate(45deg);
        z-index: -1;
    }

    ul::after{
        content: '';
        display: block;
        width: 100%;
        height: 10px;
        background-color: var(--blue);
        position: absolute;
        border-radius: 5px;
        top: -3px;
        left: 0;
    }

    ul > li{
        cursor: pointer;
        margin: 0;
        text-align: start;
        line-height: ${lineHeight};
        padding-left: .5rem;
        border-radius: 3px;
    }

    ul > li:hover{
        background-color: white;
        color: var(--blue);
    }

    nav{
        display: flex;
    }

    span{
        position: relative;
    }

    a{        
        color: #fafafa;
        padding-left: 1rem;
        padding-right: 1rem;        
    }
     @media (max-width: 920px) {
        h1{
            font-size: 24px;
        }
     }
     @media (max-width: 700px) {
        header{
            padding: 0;
        }
        h1{
            display: none;
        }        
        h3{
            font-size: 13px;
        }
    }

    @media (max-width: 550px){
        ul{
            grid-gap: 0 1rem;
            grid-template-columns: repeat(2, minmax(100px, 1fr));
        }
        li{
            font-size: 14px;
        }
    }
`
export const searcher = css` 
    span{
        position: relative;
    }
    input{
        border: none;
        outline: none;
        border-bottom: 1px solid rgb(230, 230, 230);
        min-width: 300px;
        width: 50%;
        margin: 2rem 0 3rem 0;
        font-size: 20px; 
    }
    ::placeholder {
        color: rgb(194, 194, 194);
    }
`
