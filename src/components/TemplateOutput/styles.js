import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1;
    position: relative;
    background-color: #222222;


    &>button{
        position: absolute;
        left: 0.75rem;
        bottom: 100%;
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

    .resize-area{
        min-height: 4px;
        background-color: none;
        cursor: ns-resize;

        transition: all 0.3s;

        &:hover{
            background-color: #323232;
        }
    }

    .output{
        padding-top: 1rem;
        overflow: auto;

        
        table{
            display: inline-block;
            border-spacing: 1rem 0;
            width: 100%;
        }

        td{
            font-size: 0.875rem;
            line-height: 1.125rem;
            color: #444;
        }

        .line{
            vertical-align: top;
            text-align: right;
        }

        .text{
            width: 100%;
            color: #666;
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
`;
