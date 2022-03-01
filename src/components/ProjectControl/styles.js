import styled from 'styled-components';

export const Container = styled.div`

  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  width: 100%;
  gap: 8px;
  border-radius: 4px; 

  transition: all 0.2s;

  &:hover{
    background-color: #00000044;
  }

  span{
    display: flex;
    align-items: center;
    height: 28px;
  }

  button{
    border: 0;
    background: 0;
    color: #775757;
    border-radius: 4px;

    transition: all 0.2s;

    :hover{
      background-color: #00000044;
    }
  }
`;
