import React from 'react';
import { Container } from './styles';

function Column({ tableId, column, projectDispatch }) {
  return (
    <Container pk={column.pk.toString()}>
      <p
        suppressContentEditableWarning
        contentEditable="true"
        spellCheck="false"
        onBlur={(event) => {
          projectDispatch({
            type: 'UpdateColumnName', tableId, columnId: column.id, columnName: event.target.innerHTML,
          });
        }}
      >
        {column.name}
      </p>
      <p
        suppressContentEditableWarning
        contentEditable="true"
        spellCheck="false"
        onBlur={(event) => {
          projectDispatch({
            type: 'UpdateColumnType', tableId, columnId: column.id, columnType: event.target.innerHTML,
          });
        }}
      >
        {column.type}
      </p>
    </Container>
  );
}

export default React.memo(Column);
