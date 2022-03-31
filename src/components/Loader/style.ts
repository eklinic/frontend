import styled, { keyframes } from 'styled-components'

const rotate = keyframes`

    from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
  `

export const Container = styled.div`
    width:80vw;
    height:80vh;
    display:flex;
    align-items:center;
    justify-content:center;

  .loader{
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${rotate} 2s linear infinite;
  }



}
`


