import React, { useEffect, useState } from 'react';
import Table from '../Table';
import { Container } from './styles';

function Viewport({ props }) {
  const [viewOffset, setViewOffset] = useState(props.project.viewOffset);
  const [dragging, setDragging] = useState(false);

  const handleMouseUp = (event) => {
    if (event.which === 2) {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      setDragging(false);
    }
  };

  const handleMouseMove = (event) => {
    if (event.which === 2) {
      setViewOffset((previousOffset) => (
        { x: previousOffset.x - event.movementX, y: previousOffset.y - event.movementY }
      ));
    }
  };

  const handleMouseDown = (event) => {
    if (event.which === 2) {
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove);
      setDragging(true);
    }
  };

  const handleKeyDown = (event) => {
    if (!event.repeat) {
      if (event.which === 13) { // KEY_ENTER
        document.activeElement.blur();
        document.getSelection().removeAllRanges();
        return;
      }
      if (document.activeElement.id !== 'body') return;

      if (event.which === 65) { // KEY_A
        props.projectDispatch({ type: 'AddTable' });
        return;
      }
      if (event.which === 69) { // KEY_E
        props.projectDispatch({ type: 'ToggleControls' });
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  useEffect(() => {
    if (!dragging) {
      props.projectDispatch({ type: 'SetViewOffset', viewOffset });
    }
  }, [dragging]);

  return (
    <Container id="viewport">
      {
        props.project.tables.map(
          (table) => (
            <Table
              key={table.id}
              controls={props.project.controls}
              table={table}
              viewOffset={viewOffset}
              projectDispatch={props.projectDispatch}
            />
          ),
        )
      }
      <div className="ui-controls">
        <button
          type="button"
          className="material-icons"
          onClick={
            () => {
              props.projectDispatch({ type: 'AddTable' });
            }
          }
        >
          add
        </button>
        <button
          type="button"
          className="material-icons"
          onClick={
            () => {
              props.projectDispatch({ type: 'ToggleControls' });
            }
          }
        >
          mode_edit
        </button>
        <span id="delete-area" type="button" className="material-icons">delete_outline</span>
      </div>
    </Container>
  );
}

export default React.memo(Viewport);
