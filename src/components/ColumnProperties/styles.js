import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  display: flex;
  flex-flow: column;
  padding: none;

  top: 0;
  left: 100%;
  min-width: 18rem;
  max-width: 24rem;
  padding: 0.4375rem;
  transform-origin: top;
  transform: scaleY(0);

  background-color: #383838;
  font-size: 0.75rem;
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  box-shadow: 1px 1px 2px 3px #00000022;

  overflow: hidden;

  transition: all 0.0s;
  
  .controls{
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 0.5rem;
    gap: 0.25rem;

    span{
      display: flex;
      flex: 1;
    }

    button{
      border: none;
      background: none;
      border-radius: 25%;
      padding: 0.0625rem;
      font-size: 1.25rem;
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
      &.notnull{
        color: #976767;
      }
      &.indexed{
        color: #8080C2;
      }
      &.unique{
        color: #976797;
      }

      &.arrow{
        color: #679767;
      }
      &.delete{
        color: #976767;
      }
    }
  }

  .properties{
    display: flex;
    flex-flow: column nowrap;

    div{
      width: 100%;
      display: flex;
      flex-flow: row nowrap;

      span{
        color: #B4B4B4;
        min-width: 5rem;

        &.title{
          font-weight: 700;
        }

        &.value{
          transition: all 0.2s;
          margin-bottom: 0.25rem;

          &:hover{
            background-color: #282828;
          }
        }
      }

      input{
        background: none;
        color: #B4B4B4;
        border: none;
        border-radius: 0.25rem;
        flex: 1;
        text-align: right;
        padding: 0 0.5rem;
        word-wrap: break-word;

        &:hover{
          background-color: #00000022;
        }
      }
    }
  }
`;
