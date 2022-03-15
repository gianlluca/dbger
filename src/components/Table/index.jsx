import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Column from '../Column';
import ColumnControl from '../ColumnControl';
import { isOnDeleteArea } from '../../helpers/helperFunctions';
import { Relation } from '../Relation';

function Table({
  controls, viewOffset, table, projectDispatch,
}) {
  const [pos, setPos] = useState(table.pos);
  const [dragging, setDragging] = useState(false);

  const handleMouseUp = (event) => {
    if (event.button === 0) {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      setDragging(false);

      if (isOnDeleteArea(event, 'delete-area')) {
        projectDispatch({ type: 'RemoveTable', id: table.id });
      }
    }
  };

  const handleMouseMove = (event) => {
    setPos(
      (previousPos) => (
        {
          x: Math.round(previousPos.x + event.movementX),
          y: Math.round(previousPos.y + event.movementY),
        }
      ),
    );
  };

  const handleMouseDown = (event) => {
    if (event.button === 0) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      setDragging(true);
    }
  };

  useEffect(() => {
    if (!dragging) {
      projectDispatch({ type: 'UpdateTablePos', id: table.id, pos });
    }
  }, [dragging]);

  return (
    <Container style={{ transform: `translate(${pos.x - viewOffset.x}px,${pos.y - viewOffset.y}px)` }}>
      <div className="left">
        {
          table.columns.map(
            (column) => {
              if (column.relation) {
                return (
                  <Relation
                    key={column.id}
                    props={{
                      relation: column.relation,
                      tableId: table.id,
                      columnId: column.id,
                      projectDispatch,
                      controls,
                    }}
                  />
                );
              }
              if (controls) {
                return (
                  <button
                    key={column.id}
                    type="button"
                    className="material-icons"
                    onClick={
                      () => projectDispatch(
                        { type: 'AddColumnRelation', tableId: table.id, columnId: column.id },
                      )
                    }
                  >
                    add_circle
                  </button>
                );
              }
              return <span key={column.id}> </span>;
            },
          )
        }
      </div>
      <div className="center">
        <div className="header" onPointerDown={handleMouseDown}>
          <p
            suppressContentEditableWarning
            contentEditable="true"
            spellCheck="false"
            onBlur={(event) => {
              projectDispatch(
                { type: 'UpdateTableName', id: table.id, name: event.target.innerHTML },
              );
            }}
          >
            {table.name}
          </p>
        </div>
        <div className="columns">
          {
            table.columns.map((column) => (
              <Column
                key={column.id}
                tableId={table.id}
                column={column}
                projectDispatch={projectDispatch}
              />
            ))
          }
        </div>
        {
          controls ? (
            <button
              type="button"
              className="material-icons"
              onClick={(event) => {
                projectDispatch({ type: 'AddColumn', id: table.id });
                event.target.blur();
              }}
            >
              add_circle
            </button>
          ) : (null)
        }
      </div>
      <div className="right">
        {
          controls ? table.columns.map(
            (column) => (
              <ColumnControl
                key={column.id}
                tableId={table.id}
                columnId={column.id}
                columnPk={column.pk}
                projectDispatch={projectDispatch}
              />
            ),
          ) : (null)
        }
      </div>
    </Container>
  );
}

export default React.memo(Table);
