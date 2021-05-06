import React from 'react'

const minHeight = '250px'
const minWidth = '170px'

export const SkeletonCardDetails = () => {
  return (
    <>
      <div>
      </div>
      <style jsx>{`
        div{
            width: 750px;
            height: 350px;
            background-color: var(--colorSkeleton);
            border-radius: 8px;         
        }
        @media (max-width: 700px){
            div{          
                position: absolute;
                top: calc(30% - (${minHeight} / 2));
                left: calc(50% -  (${minWidth} / 2));
                width: ${minWidth};
                height: ${minHeight} ;
                background-color: var(--colorSkeleton);
            }

            div::after{
                content: '';
                transform: translate(calc((${minWidth} * .5) / -2), calc(${minHeight} + 1rem));
                display: block;
                width: calc(${minWidth} + (${minWidth} * .5));
                height: 250px;
                background-color: var(--colorSkeleton);
                border-radius: 8px;
            }
        }
        `}
      </style>
    </>
  )
}

export default SkeletonCardDetails
