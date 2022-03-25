import React, { useState } from 'react';
import { Container } from './styles';

function ColumnProperties({ tableId, column, projectDispatch }) {
  const [defaultValue, setDefaultValue] = useState(column.defaultValue || '');
  const [check, setCheck] = useState(column.check || '');
  const [comment, setComment] = useState(column.comment || '');

  const toggleColumnPk = () => {
    projectDispatch({
      type: 'UpdateColumn', tableId, column: { ...column, pk: !column.pk },
    });
  };
  const toggleColumnNotNull = () => {
    if (column.pk) { return; }
    projectDispatch({
      type: 'UpdateColumn', tableId, column: { ...column, notNull: !column.notNull },
    });
  };
  const toggleColumnIndexed = () => {
    if (column.pk) { return; }
    projectDispatch({
      type: 'UpdateColumn', tableId, column: { ...column, indexed: !column.indexed },
    });
  };
  const toggleColumnUnique = () => {
    if (column.pk) { return; }
    projectDispatch({
      type: 'UpdateColumn', tableId, column: { ...column, unique: !column.unique },
    });
  };

  const updateColumnDefault = (event) => {
    projectDispatch({
      type: 'UpdateColumn', tableId, column: { ...column, default: event.target.value },
    });
  };
  const updateColumnCheck = (event) => {
    projectDispatch({
      type: 'UpdateColumn', tableId, column: { ...column, check: event.target.value },
    });
  };
  const updateColumnComment = (event) => {
    projectDispatch({
      type: 'UpdateColumn', tableId, column: { ...column, comment: event.target.value },
    });
  };

  const handleChangeColumnDefault = (event) => {
    setDefaultValue(event.target.value);
  };
  const handleChangeColumnCheck = (event) => {
    setCheck(event.target.value);
  };
  const handleChangeColumnComment = (event) => {
    setComment(event.target.value);
  };
  const handleDeleteColumn = () => {
    projectDispatch({ type: 'RemoveColumn', tableId, columnId: column.id });
  };

  return (
    <Container className="column-properties">
      <div className="controls">
        <button onClick={toggleColumnPk} type="button" className={`material-icons ${column.pk ? 'key' : ''}`}>
          {column.pk ? 'key' : 'key_off'}
        </button>
        <button
          onClick={toggleColumnNotNull}
          type="button"
          className={`material-icons ${column.pk || column.notNull ? 'notnull' : ''}`}
        >
          {column.pk || column.notNull ? 'block' : 'radio_button_unchecked'}
        </button>
        <button
          onClick={toggleColumnIndexed}
          type="button"
          className={`material-icons ${column.pk || column.indexed ? 'indexed' : ''}`}
        >
          format_list_numbered
        </button>
        <button
          onClick={toggleColumnUnique}
          type="button"
          className={`material-icons ${column.pk || column.unique ? 'unique' : ''}`}
        >
          diamond
        </button>
        <span />
        <button type="button" className="material-icons arrow">arrow_upward</button>
        <button type="button" className="material-icons arrow">arrow_downward</button>
        <button type="button" className="material-icons delete" onClick={handleDeleteColumn}>clear</button>
      </div>
      <div className="properties">
        <div>
          <span className="title">Default:</span>
          <input
            type="text"
            className="value"
            placeholder="none"
            value={defaultValue}
            onChange={handleChangeColumnDefault}
            onBlur={updateColumnDefault}
          />
        </div>
        <div>
          <span className="title">Check:</span>
          <input
            type="text"
            className="value"
            placeholder="none"
            value={check}
            onChange={handleChangeColumnCheck}
            onBlur={updateColumnCheck}
          />
        </div>
        <div>
          <span className="title">Comment:</span>
          <input
            type="text"
            className="value"
            placeholder="none"
            value={comment}
            onChange={handleChangeColumnComment}
            onBlur={updateColumnComment}
          />
        </div>
      </div>
    </Container>
  );
}

export default React.memo(ColumnProperties);
