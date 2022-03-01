import styled from 'styled-components';

export const Container = styled.div`
  min-height: 44px;
  width: 100%;
  background-color: #242424;
  box-shadow: 0 1px 4px 1px #00000022;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  div{
    display: flex;
    align-items: center;
  }

  .div-project{
    justify-content: center;
    gap: 4px;

    > span{
      background-color: #2B2B2B;
      height: 28px;
      display: flex;
      align-items: center;
      vertical-align: middle;
      border-radius: 4px;
    }

    .project-name{
      font-size: 14px;
      font-weight: 600;
      padding: 0 16px;
      min-width: 24px;

      transition: all 0.2s;

      :hover{
        background-color: #282828;
      }
    }

    .list-projects-area{
      position: relative;
      justify-content: center;
      width: 28px;

      .list-projects-content{
        position: absolute;
        top: 100%;
        left: 0px;
        display: none;
        flex-flow: column nowrap;
        background-color: #2B2B2B;
        border-radius: 2px 8px 8px 8px;
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
    margin-left: 8px;
    border: 0;
    border-radius: 4px;
    background-color: #2B2B2B;
    font-size: 22px;
    padding: 4px;
    color: #A2A2A2;
  }
`;
