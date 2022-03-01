/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { loadProjectName } from '../../helpers/storage';
import { Container } from './styles';

export function ProjectControl({ props, remove }) {
  return (
    <Container>
      <span
        onClick={
          props.projectId !== 0
            ? () => { props.loadProject(props.projectId); }
            : () => { props.createProject(); }
        }
      >
        {props.projectId !== 0 ? loadProjectName(props.projectId) : 'New Project'}
      </span>
      {
        remove
          ? (
            <button
              type="button"
              className="material-icons"
              onClick={() => { props.deleteProject(props.projectId); }}
            >
              clear
            </button>
          )
          : (null)
      }
    </Container>
  );
}
