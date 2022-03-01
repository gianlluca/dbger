import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1;
    min-height: 40px;
    background-color: #222222;

    .resize-area{
        height: 4px;
        cursor: ns-resize;
        background-color: #323232;
    }

    .output{
        display: flex;
        flex-flow: row nowrap;
        padding-top: 12px;
        font-size: 14px;
        color: #ffffff44;
        line-height: 18px;

        .output-lines{
            display: flex;
            flex-flow: column nowrap;
            min-width: 48px;
            text-align: center;
        }
        .output-text{
            display: flex;
            flex-flow: column nowrap;
            width: 100%;
        }

        span{
            height: 18px;
            &:hover{
                background-color: #ffffff11;
                width: 100%;
            }
        }

        .span-text{
            cursor: text;
            -webkit-touch-callout: text;  /* iOS Safari */
            -webkit-user-select: text;    /* Safari */
            -khtml-user-select: text;     /* Konqueror HTML */
            -moz-user-select: text;       /* Old versions of Firefox */
            -ms-user-select: text;        /* Internet Explorer/Edge */
            user-select: text;            /* Non-prefixed version, currently
                                            supported by Chrome, Edge, Opera and Firefox */
        }
    }
`;
