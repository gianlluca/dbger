import React from 'react';
import { Container } from './styles';

function ColumnControl({
  tableId, columnId, projectDispatch, columnPk,
}) {
  return (
    <Container>
      <button
        type="button"
        className={`material-icons ${columnPk ? 'key' : ''}`}
        onClick={() => { projectDispatch({ type: 'ToggleColumnPk', tableId, columnId }); }}
      >
        {columnPk ? 'key' : 'key_off'}
      </button>
      <button
        type="button"
        className="material-icons delete"
        onClick={() => { projectDispatch({ type: 'RemoveColumn', tableId, columnId }); }}
      >
        clear
      </button>
    </Container>
  );
}

export default React.memo(ColumnControl);
