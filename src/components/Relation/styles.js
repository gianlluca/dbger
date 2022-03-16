import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 1.75rem;
    line-height: 1.75rem;
    align-items: center;

    button {
      border: none;
      background: none;
      line-height: 1.75rem;
      font-size: 1.125rem;
      color: #3D3D3D;
      margin-right: 0.25rem;

      transition: all 0.1s;

      &.delete{
        color: #905050;
      }

      &:hover {
        filter: brightness(1.5);
        font-size: 1.25rem;
      }
    }
    
    .rel-column{
        position: relative;
        height: 1.5rem;
        line-height: 1.5rem;
        padding: 0 0.5rem;
        background-color: rgb(60,60,60);
        border-radius: 0.25rem;
        border: 1px solid rgb(90,90,90);
        box-shadow: 1px 1px 2px #00000044;


        p {
          border: none;
          background: none;
          color: #bcbcbc;
          font-size: 0.875rem;
          font-weight: 700;
          display: flex;
          height: 1.5rem;
          line-height: 1.5rem;
        }
    }

    img{
      height: 2rem;
      width: 1rem;
    }

    .rel-interact{
        transition: all 0.2s;
        
        &:hover{
            filter: brightness(3.0);
        }
    }
`;
