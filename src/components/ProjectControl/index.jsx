/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { loadProjectName } from '../../helpers/storage';
import { Container } from './styles';

export function ProjectControl({ props, remove }) {
  const handleLoadCreateProject = () => {
    if (props.projectId === 0) {
      props.createProject();
    } else {
      props.loadProject(props.projectId);
    }
  };
  const handleDeleteProject = () => { props.deleteProject(props.projectId); };

  return (
    <Container>
      <span onClick={handleLoadCreateProject}>
        {
          props.projectId !== 0
            ? loadProjectName(props.projectId)
            : 'New Project'
        }
      </span>
      {
        remove ? (
          <button
            type="button"
            className="material-icons"
            onClick={handleDeleteProject}
          >
            clear
          </button>
        )
          : (null)
      }
    </Container>
  );
}
