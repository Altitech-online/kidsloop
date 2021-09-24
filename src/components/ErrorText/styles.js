import styled, { keyframes } from "styled-components";

const shake = keyframes`
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
`;

export const Error = styled.div`
  color: #ff522b;
  font-size: 10px;
  margin-left: 5px;
  animation-name: ${shake};
  animation-duration: 1s;
`;
