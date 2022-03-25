import React, { useEffect, useState } from 'react';
import Table from '../Table';
import { Container } from './styles';

function Viewport({ viewportRef, deleteAreaRef, props }) {
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
        {
          x: Math.round(previousOffset.x - event.movementX),
          y: Math.round(previousOffset.y - event.movementY),
        }
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
      // KEY_ENTER
      if (event.which === 13) {
        document.activeElement.blur();
        document.getSelection().removeAllRanges();
        return;
      }
      if (document.activeElement.id !== 'body') return;

      // KEY_A
      if (event.which === 65) {
        if (event.ctrlKey) {
          event.preventDefault();
          return;
        }
        props.projectDispatch({ type: 'AddTable' });
        return;
      }

      // KEY_E
      if (event.which === 69) {
        props.projectDispatch({ type: 'ToggleControls' });
      }
    }
  };

  const handleAddTable = (event) => {
    props.projectDispatch({ type: 'AddTable' });
    event.target.blur();
  };

  const handleToggleControls = (event) => {
    props.projectDispatch({ type: 'ToggleControls' });
    event.target.blur();
  };

  const handleToggleSqlOutput = (event) => {
    props.projectDispatch({ type: 'ToggleSqlOutput' });
    event.target.blur();
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
    <Container ref={viewportRef}>
      {
        props.project.tables.map(
          (table) => (
            <Table
              key={table.id}
              controls={props.project.controls}
              table={table}
              viewOffset={viewOffset}
              projectDispatch={props.projectDispatch}
              deleteAreaRef={deleteAreaRef}
            />
          ),
        )
      }
      <div className="ui-controls">
        <button
          type="button"
          className="material-icons"
          onClick={handleAddTable}
        >
          add
        </button>
        <button
          type="button"
          className="material-icons visibility"
          onClick={handleToggleControls}
        >
          {props.project.controls ? 'visibility' : 'visibility_off'}
        </button>
        <span
          type="button"
          className="material-icons delete-area"
          ref={deleteAreaRef}
        >
          delete_outline
        </span>
      </div>
      <button
        type="button"
        className="material-icons"
        onClick={handleToggleSqlOutput}
      >
        {props.project.sqlOutputConf.visible ? 'arrow_drop_down' : 'arrow_drop_up'}
      </button>
    </Container>
  );
}

export default React.memo(Viewport);
