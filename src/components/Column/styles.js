import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 28px;
  padding: 0 8px;
  min-width: 140px;
  gap: 40px;

  &:hover{
    background-color: #00000044;
  }

  p{
    color: #a6a6a6;
    font-weight: ${(props) => (props.pk === 'true' ? 700 : 400)};
    vertical-align: middle;
    min-width: 16px;
  }
`;
