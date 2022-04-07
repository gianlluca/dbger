import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  background-color: #222222;
  position: relative;

  .btn-container{
      position: absolute;
      top: 0;
      left: 0;
      overflow: visible;
  }

  .resize-area{
      min-height: 4px;
      background-color: none;
      cursor: ns-resize;
      position: relative;

      transition: all 0.3s;

      &:active, &:focus-within, &:hover{
          cursor: ns-resize;
          background-color: #323232;
      }
  }

  .content{
    overflow: auto;

    .config{
        padding-left: 2.5rem;
        padding-top: 0.3125rem;
        font-size: 0.75rem;
        color: #666;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        button{
            border: 0;
            border-radius: 0.25rem;
            background-color: #2C2C2C;
            padding: 0.125rem 0.4375rem;
            color: #aaa;

            transition: all 0.2s;
            
            &:hover{
                filter: brightness(1.5);
            }
        }

        select{
          padding: 0.125rem 0.4375rem;
          background: none;
          border: none;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          color: #888;

          transition: all 0.2s;

          &:hover{
            filter: brightness(1.5);
          }

          &:active{
            background-color: #484848;
            color: #ccc;
          }
        }

    }

    .output{
      padding-top: 0.75rem;
      
      table{
        display: inline-block;
        border-spacing: 1rem 0;
        width: 100%;
      }

      td{
        font-size: 0.75rem;
        line-height: 1rem;
        color: #444;
      }

      .line{
        vertical-align: top;
        text-align: right;
      }

      .text{
        width: 100%;
        color: #666;
        font-family: 'Roboto Mono', monospace;
        white-space: pre;
        
        &:hover{
            background-color: #2c2c2c;
            width: 100%;
        }

        &::selection {
            color: #888;
            background: #333;
        }

        /* Code for Firefox */
        &::-moz-selection {
            color: #888;
            background: #333;
        }

        cursor: text;
        -webkit-touch-callout: text;  /* iOS Safari */
        -webkit-user-select: text;    /* Safari */
        -khtml-user-select: text;     /* Konqueror HTML */
        -moz-user-select: text;       /* Old versions of Firefox */
        -ms-user-select: text;        /* Internet Explorer/Edge */
        user-select: text;            /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
      }
    }
  }
`;
