import styled from 'styled-components';

export const Container = styled.div`

  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  width: 100%;
  gap: 0.5rem;
  border-radius: 0.25rem; 

  transition: all 0.2s;

  &:hover{
    background-color: #00000044;
  }

  span{
    display: flex;
    align-items: center;
    height: 1.75rem;
  }

  button{
    border: 0;
    background: 0;
    color: #775757;
    border-radius: 0.25rem;
    font-size: 1.25rem;

    transition: all 0.2s;

    :hover{
      background-color: #00000044;
    }
  }
`;
