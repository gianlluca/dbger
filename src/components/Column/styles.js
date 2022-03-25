import styled from 'styled-components';

export const Container = styled.tr`
  position: relative;
  line-height: 1.75rem;
  cursor: pointer;

  &:hover{
    background-color: #00000044;
  }
  &:focus-within{
    background-color: #00000044;

    .column-properties{
      transform: scaleY(1);
      transition: all 0.2s ease;
    }
  }

  td{
    padding: 0 0.75rem;
    min-width: 1rem;
    font-weight: ${(props) => (props.pk === 'true' ? 700 : 400)};
    color: #a6a6a6;

    &.name{
      text-align: left;
    }
    &.type{
      text-align: right;
    }
    &.properties{
      position: absolute;
      top: 0;
      left: 100%;
      min-width: 0;
      padding: 0;
      width: 0;
    }
  }
`;
