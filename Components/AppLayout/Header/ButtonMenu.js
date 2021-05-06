import React from 'react'

export const ButtonMenu = ({
  children,
  textColor = 'inherit',
  fontWeight = 'auto',
  setClassMenu,
  withClass = false,
  name = ''
}) => {
  const onMouseOver = ({ name }) => {
    withClass && setClassMenu({ [name]: 'display-menu' })
  }
  const onMouseOut = ({ name }) => {
    withClass && setClassMenu({ [name]: '' })
  }

  return (
    <>
      <button
        onMouseOver={() => onMouseOver({ name })}
        onMouseOut={() => onMouseOut({ name })}
      >
        {children}
      </button>
      <style jsx>{`
          button{
              border: none;
              background: none;
              color: ${textColor};
              cursor: pointer;
              padding: 0 1rem;
              display: flex;
              align-items: center;
              font-weight: ${fontWeight};
              transition: background-color .3s;
          }
          button:hover{
              background-color: var(--blue);
          }
           @media (max-width: 550px) {
                button{
                    padding-left: .5rem;
                    padding-right: .5rem;
                }
            }
        `}
      </style>
    </>
  )
}

export default ButtonMenu
