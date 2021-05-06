import React from 'react'

export const HeaderSkeleton = () => {
  return (
    <>
      <div>
      </div>
      <style jsx>{`
        div{
            height: 64px;
            width: 100%;
            background-color: var(--colorSkeleton);
        }  
        `}
      </style>
    </>
  )
}

export default HeaderSkeleton
