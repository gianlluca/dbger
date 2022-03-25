import styled from 'styled-components';

export const Container = styled.div`
  min-height: 10rem;
  flex: 1 0;
  width: 100%;
  position: relative;
  overflow: hidden;

  div{
    &.ui-controls{
      position: absolute;
      display: flex;
      flex-flow: column nowrap;
      left: 0.75rem;
      bottom: 2rem;
      gap: 0.5rem;
      z-index: 2;

      button,span{
        height: fit-content;
        width: fit-content;
        border: 0;
        background: #00000044;
        border-radius: 50%;
        color: #444;
        padding: 0.5rem;
        font-size: 1.5rem;

        transition: all 0.2s;

        &.visibility{
          font-size: 1.25rem;
          padding: 0.625rem;
        }

        &:hover{
          background: #00000088;
          color: #888;
          font-size: 1.875rem;
        }

        &.delete-area{
          color: #5F4040;
        }
      }
    }
  }


  &>button{
    position: absolute;
    left: 0.75rem;
    bottom: 0;
    height: fit-content;
    width: fit-content;
    border: 0;
    background: #00000044;
    border-radius: 0.125rem;
    color: #444;
    padding: 0 0.5rem;
    font-size: 1.5rem;
    line-height: 1rem;

    transition: all 0.2s;

    &:hover{
      background: #00000088;
      color: #888;
    }
  }
`;
