import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Column from '../Column';
import { isOnDeleteArea } from '../../helpers/helperFunctions';
import { Relation } from '../Relation';

function Table({
  controls, viewOffset, table, projectDispatch,
}) {
  const [pos, setPos] = useState(table.pos);
  const [dragging, setDragging] = useState(false);

  const updateTableName = (newName) => {
    projectDispatch({ type: 'UpdateTable', table: { ...table, name: newName } });
  };

  const updateTablePos = () => {
    projectDispatch({ type: 'UpdateTable', table: { ...table, pos } });
  };

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
    setPos((previousPos) => (
      {
        x: Math.round(previousPos.x + event.movementX),
        y: Math.round(previousPos.y + event.movementY),
      }
    ));
  };

  const handleMouseDown = (event) => {
    if (event.button === 0) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      setDragging(true);
    }
  };

  useEffect(() => {
    if (!dragging) { updateTablePos(); }
  }, [dragging]);

  return (
    <Container style={{ transform: `translate(${pos.x - viewOffset.x}px,${pos.y - viewOffset.y}px)` }}>
      <div className="container-left">
        {
          table.columns.map(
            (column) => (
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
            ),
          )
        }
      </div>
      <div className="container-center">
        <div className="header" onPointerDown={handleMouseDown}>
          <p
            suppressContentEditableWarning
            contentEditable="true"
            spellCheck="false"
            onBlur={(event) => { updateTableName(event.target.innerHTML); }}
          >
            {table.name}
          </p>
        </div>
        <div className="columns">
          {
            table.columns ? (
              <table>
                <tbody>
                  {
                    table.columns.map(
                      (column) => (
                        <Column
                          key={column.id}
                          tableId={table.id}
                          column={column}
                          projectDispatch={projectDispatch}
                        />
                      ),
                    )
                  }
                </tbody>
              </table>
            ) : (null)
          }
        </div>
        {
          controls ? (
            <button
              type="button"
              className="material-icons add-column-button"
              onClick={
                (event) => {
                  projectDispatch({ type: 'AddColumn', id: table.id });
                  event.target.blur();
                }
              }
            >
              add_circle
            </button>
          ) : (null)
        }
      </div>
    </Container>
  );
}

export default React.memo(Table);
