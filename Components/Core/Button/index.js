import React from 'react'
import { useRouter } from 'next/router'

export const Button = ({
  children,
  withClass = false,
  goBack = false
}) => {
  const router = useRouter()

  const classes = withClass ? 'position-button' : ''
  const handleGoBack = () => {
    goBack && router.back()
  }

  return (
    <>
      <button className={classes} onClick={handleGoBack}>
        {children}
      </button>
      <style jsx>{`
        button{
            background-color: var(--blue);
            padding: .5rem 2rem;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 8px;
            color: white;
            border: solid transparent;
            outline: none;
            cursor: pointer;
        }
        button:hover{
            background-color: white;
            color: var(--blue);
        }  
        @media (max-width: 550px){
          button{
            border-radius: 50%;
            padding: .8rem;
          }
        }
        `}
      </style>
    </>
  )
}

export default Button
