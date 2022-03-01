import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #2f2f2f;
  border-radius: 0 4px 4px 0;
  height: 24px;
  margin: 4px 0;
  padding: 0 2px 0 6px;
  gap: 2px;
  align-items: center;
  box-shadow: 0 1px 3px #0000005f;

  transition: all 0.2s;

  &:hover{
    filter: brightness(0.85);
  }

  button{
    border: 0;
    border-radius: 50%;
    background: transparent;
    width: 22px;
    height: 22px;

    transition: all 0.2s;

    &:hover{
      background-color: #00000088;
      filter: brightness(0.8);
    }

    &.key{
      font-size: 20px;
      color: #979767;
    }

    &.delete{
      font-size: 18px;
      color: #976767;
    }
  }
`;
