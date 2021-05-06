import React from 'react'

export const ButtonSkeleton = ({ children, withClass = false }) => {
  const classes = withClass ? 'position-button' : ''
  return (
    <>
      <button className={classes}>
        {children}
      </button>
      <style jsx>{`
          button{
            background-color: var(--colorSkeleton);
            padding: .5rem 2rem;
            border-radius: 8px;
            border: solid transparent;
            outline: none;
            color: transparent;
        }
        `}
      </style>
    </>
  )
}

export default ButtonSkeleton
