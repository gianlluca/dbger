import React, { useState } from 'react';
import ColumnProperties from '../ColumnProperties';
import { Container } from './styles';

function Column({ tableId, column, projectDispatch }) {
  const [focused, setFocused] = useState(false);

  const updateColumnName = (newName) => {
    projectDispatch({
      type: 'UpdateColumn', tableId, column: { ...column, name: newName },
    });
  };
  const updateColumnType = (newType) => {
    projectDispatch({
      type: 'UpdateColumn', tableId, column: { ...column, type: newType },
    });
  };

  return (
    <Container
      pk={column.pk.toString()}
      focused={focused}
      onFocus={() => { setFocused(true); }}
      onBlur={() => { setFocused(false); }}
    >
      <td
        className="name"
        suppressContentEditableWarning
        contentEditable="true"
        spellCheck="false"
        onBlur={(event) => { updateColumnName(event.target.textContent); }}
      >
        {column.name}
      </td>
      <td
        className="type"
        suppressContentEditableWarning
        contentEditable="true"
        spellCheck="false"
        onBlur={(event) => { updateColumnType(event.target.textContent); }}
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
