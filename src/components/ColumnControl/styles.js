import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #2f2f2f;
  border-radius: 0 0.25rem 0.25rem 0;
  height: 1.5rem;
  margin: 0.25rem 0;
  padding: 0 0.125rem 0 0.25rem;
  box-shadow: 0 1px 3px #0000005f;
  gap: 0.125rem;

  transition: all 0.2s;

  &:hover{
    filter: brightness(0.85);
  }

  button{
    border: none;
    background: none;
    border-radius: 25%;
    line-height: 1.375rem;
    width: 1.25rem;
    font-size: 1.125rem;
    color: #4A4A4A;
    text-align: center;
    letter-spacing: -1px;


    transition: all 0.2s;

    &:hover{
      background-color: #00000088;
      filter: brightness(0.8);
    }

    &.key{
      color: #979767;
    }
    &.delete{
      color: #976767;
    }
  }
`;
