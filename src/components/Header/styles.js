import styled from 'styled-components';

export const Container = styled.div`
  min-height: 2.75rem;
  width: 100%;
  background-color: #242424;
  box-shadow: 0 1px 4px 1px #00000022;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  div{
    display: flex;
    align-items: center;
  }

  .div-project{
    justify-content: center;
    gap: 0.25rem;

    > span{
      background-color: #2B2B2B;
      font-size: 1.375rem;
      height: 1.75rem;
      display: flex;
      align-items: center;
      vertical-align: middle;
      border-radius: 0.25rem;
    }

    .project-name{
      font-size: 0.875rem;
      font-weight: 600;
      padding: 0 1rem;
      min-width: 1.5rem;

      transition: all 0.2s;

      :hover{
        background-color: #282828;
      }
    }

    .list-projects-area{
      position: relative;
      justify-content: center;
      width: 1.75rem;

      .list-projects-content{
        position: absolute;
        top: 100%;
        left: 0px;
        display: none;
        flex-flow: column nowrap;
        background-color: #2B2B2B;
        border-radius: 0.25rem;
        box-shadow: 0 1px 2px #00000022;
      }
        
      transition: all 0.2s;

      &:hover{
        background-color: #282828;

        .list-projects-content{
          display: flex;
        }
      }
    }
  }

  .home-button{
    margin-left: 0.5rem;
    border: 0;
    border-radius: 0.25rem;
    background-color: #2B2B2B;
    font-size: 1.375rem;
    padding: 0.25rem;
    color: #A2A2A2;
  }
`;
