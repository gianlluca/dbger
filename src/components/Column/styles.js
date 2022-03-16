import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.75rem;
  padding: 0 0.5rem;
  min-width: 9rem;
  gap: 2.5rem;

  &:hover{
    background-color: #00000044;
  }

  p{
    color: #a6a6a6;
    font-weight: ${(props) => (props.pk === 'true' ? 700 : 400)};
    vertical-align: middle;
    min-width: 1rem;
  }
`;
