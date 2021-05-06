
import css from 'styled-jsx/css'

export const searcher = css` 
    span{
        position: relative;
    }
    input{
        border: none;
        outline: none;
        border-bottom: 1px solid var(--border);
        min-width: 150px;
        width: 30%;
        margin: 2rem 0 3rem 0;
        font-size: 20px; 
    }
    ::placeholder {
        color: rgb(194, 194, 194);
    }
    .span{
        height: 64px;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
    .input{
        margin: 0;
        width: 100%;
        border-radius: 3px 0px 0px 3px;
        font-size: 16px;
        min-width: 240px;
        min-height: 25px;
        padding: 0.2rem;
    }
    .no-display{
        display: none;
    }
    @media (max-width: 550px) {
        input{
            width: 70%;
        }
    }
`
