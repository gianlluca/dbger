import styled from 'styled-components';

export const Container = styled.div`
  min-height: 40%;
  height: 100%;
  width: 100%;
  position: relative;

  div{
    &.ui-controls{
      position: absolute;
      display: flex;
      flex-flow: column nowrap;
      left: 12px;
      bottom: 12px;
      gap: 8px;

      button,span{
        height: fit-content;
        width: fit-content;
        border: 0;
        background: #00000044;
        border-radius: 50%;
        color: #444;
        padding: 8px;
        font-size: 24px;

        transition: all 0.2s;

        &:hover{
          background: #00000088;
          border-radius: 50%;
          color: #888;
          font-size: 30px;
        }

        &#delete-area{
          color: #5F4040;
        }
      }
    }
  }
`;
