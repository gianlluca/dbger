import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  div{
    &.left{
      position: absolute;
      top: 32px;
      right: 100%; ;
      display: flex;
      width: 32px;
      flex-flow: column nowrap;
      justify-content: end;
      align-items: flex-end;

      button{
        border: none;
        background: none;
        line-height: 28px;
        font-size: 18px;
        color: #3D3D3D;
        margin-right: 4px;

        transition: all 0.1s;

        &:hover{
          filter: brightness(2.0);
          font-size: 20px;
        }
      }

      &>span{
        white-space: pre;
        line-height: 28px;
      }
    }

    &.center{
      display: flex;
      flex-flow: column nowrap;
      background: linear-gradient(
        rgb(77, 77, 77) 0px,
        rgb(77, 77, 77) 32px,
        rgb(47, 47, 47) 32px,
        rgb(47, 47, 47) 100%
      );
      box-shadow: 1px 1px 2px #00000088;
      border-radius: 8px;

      div{
        &.header{
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 32px;
          line-height: 32px;
          color: #c8c8c8;
          font-weight: 700;
          text-shadow: 1px 1px 3px #00000045;
          cursor: pointer;

          p{
            cursor: text;
          }
        }
      }

      button{
        margin: 0 auto;
        background: transparent;
        border: 0;
        border-radius: 50%;
        color: #525252;
        font-size: 22px;
        width: 26px;
        height: 26px;

        transition: all 0.2s;

        &:hover{
          background-color: #00000088;
          filter: brightness(0.8);
        }
      }
    }
    
    &.right{
      position: absolute;
      top: 32px;
      left: 100%;
      z-index: -1;
    }
  }
`;
