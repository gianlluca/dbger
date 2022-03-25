import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  .container-left {
    position: absolute;
    top: 2rem;
    right: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
  }

  .container-center {
    display: flex;
    flex-flow: column nowrap;
    background: linear-gradient(
      rgb(77, 77, 77) 0px,
      rgb(77, 77, 77) 2rem,
      rgb(47, 47, 47) 2rem,
      rgb(47, 47, 47) 100%
    );
    box-shadow: 1px 1px 2px #00000088;
    border-radius: 0.5rem;

    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 2rem;
      color: #c8c8c8;
      font-weight: 700;
      text-shadow: 1px 1px 3px #00000045;
      cursor: pointer;

      p {
        cursor: text;
        line-height: 2rem;
      }
    }

    .columns{
      table{
        border-spacing: 0;
        width: 100%;
      }
    }

    .add-column-button {
      margin: 0 auto;
      background: transparent;
      border: 0;
      border-radius: 50%;
      color: #525252;
      font-size: 1.25rem;
      width: 1.625rem;
      height: 1.625rem;

      transition: all 0.2s;

      &:hover {
        background-color: #00000088;
        filter: brightness(0.8);
      }
    }
  }

  .container-right {
    position: absolute;
    top: 2rem;
    left: 100%;
    z-index: -1;
  }
`;
