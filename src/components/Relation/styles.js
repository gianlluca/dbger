import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 28px;
    line-height: 28px;
    align-items: center;

    .rel-column{
        position: relative;
        height: 24px;
        line-height: 24px;
        padding: 0 8px;
        background-color: rgb(60,60,60);
        border-radius: 4px;
        border: 1px solid rgb(90,90,90);
        box-shadow: 1px 1px 2px #00000044;


        &>p {
            border: none;
            background: none;
            color: #bcbcbc;
            font-size: 14px;
            font-weight: 700;
            display: flex;
            height: 24px;
            line-height: 24px;
        }
    }

    &>img{
        height: 28px;
        width: 14px;
    }

    .rel-interact{
        transition: all 0.2s;
        
        &:hover{
            filter: brightness(3.0);
        }
    }
`;
