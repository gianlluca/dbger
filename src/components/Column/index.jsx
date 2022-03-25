import React from 'react';
import ColumnProperties from '../ColumnProperties';
import { Container } from './styles';

function Column({ tableId, column, projectDispatch }) {
  const handleChangeName = (event) => {
    projectDispatch({
      type: 'UpdateColumn', tableId, column: { ...column, name: event.target.textContent },
    });
  };
  const handleChangeType = (event) => {
    projectDispatch({
      type: 'UpdateColumn', tableId, column: { ...column, type: event.target.textContent },
    });
  };

  return (
    <Container pk={column.pk.toString()}>
      <td
        className="name"
        suppressContentEditableWarning
        contentEditable="true"
        spellCheck="false"
        onBlur={handleChangeName}
      >
        {column.name}
      </td>
      <td
        className="type"
        suppressContentEditableWarning
        contentEditable="true"
        spellCheck="false"
        onBlur={handleChangeType}
      >
        {column.type}
      </td>
      <td className="properties">
        <ColumnProperties
          tableId={tableId}
          column={column}
          projectDispatch={projectDispatch}
        />
      </td>
    </Container>
  );
}

export default React.memo(Column);
