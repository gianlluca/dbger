import { Container } from './styles';
import line from '../../assets/line.svg';
import spread from '../../assets/spread.svg';

export function Relation({ props }) {
  const {
    relation, columnId, tableId, controls, projectDispatch,
  } = props;

  const handleChangeRelationName = (event) => {
    projectDispatch(
      {
        type: 'UpdateColumnRelation',
        tableId,
        columnId,
        relation: {
          ...relation, name: event.target.innerHTML,
        },
      },
    );
  };
  const handleToggleCardinalityIn = () => {
    projectDispatch(
      {
        type: 'UpdateColumnRelation',
        tableId,
        columnId,
        relation: {
          ...relation, in: !relation.in,
        },
      },
    );
  };
  const handleToggleCardinalityOut = () => {
    projectDispatch(
      {
        type: 'UpdateColumnRelation',
        tableId,
        columnId,
        relation: {
          ...relation, out: !relation.out,
        },
      },
    );
  };

  return (
    <Container>
      {
        // If controls are enabled
        controls ? (
          // If column has a relation return a button to remove it
          relation ? (
            <button
              type="button"
              className="material-icons delete"
              onClick={
                () => projectDispatch(
                  { type: 'RemoveColumnRelation', tableId, columnId },
                )
              }
            >
              clear
            </button>
          )
          // If column dont has a relation return a button to add
            : (
              <button
                key={columnId}
                type="button"
                className="material-icons"
                onClick={
                  () => projectDispatch(
                    { type: 'AddColumnRelation', tableId, columnId },
                  )
                }
              >
                add_circle
              </button>
            )
        ) : (null)
      }
      {
        // If column has a relation return a the relation right after the button to remove it
        relation ? (
          <>
            <div className="rel-column">
              <p
                suppressContentEditableWarning
                contentEditable="true"
                spellCheck="false"
                onBlur={handleChangeRelationName}
              >
                {relation.name}
              </p>
            </div>
            <img
              className="rel-interact"
              onClick={handleToggleCardinalityOut}
              onKeyDown={handleToggleCardinalityOut}
              src={relation.out ? (spread) : (line)}
              alt={relation.out ? 'spread' : 'line'}
              style={{ transform: 'scaleX(-1)', cursor: 'pointer' }}
            />
            <img src={line} alt="line" />
            <img
              className="rel-interact"
              onClick={handleToggleCardinalityIn}
              onKeyDown={handleToggleCardinalityIn}
              src={relation.in ? (spread) : (line)}
              alt={relation.out ? 'spread' : 'line'}
              style={{ cursor: 'pointer' }}
            />
          </>
        ) : (null)
      }
    </Container>
  );
}
