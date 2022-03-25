import { ProjectControl } from '../ProjectControl';
import { Container } from './styles';

export function Header({ props }) {
  const handleChangeName = (event) => {
    props.projectDispatch({ type: 'UpdateProjectName', name: event.target.textContent });
  };
  return (
    <Container>
      <div>
        <button
          type="button"
          className="material-icons home-button"
          onClick={(event) => { event.target.blur(); }}
        >
          home
        </button>
      </div>
      <div className="div-project">
        <span
          suppressContentEditableWarning
          contentEditable="true"
          spellCheck="false"
          onBlur={handleChangeName}
          className="project-name"
        >
          {props.projectName}
        </span>
        <span className="material-icons list-projects-area">
          arrow_drop_down
          <div className="list-projects-content">
            {
              props.projectList.map((projId) => (
                <ProjectControl
                  key={projId}
                  props={{
                    projectId: projId,
                    createProject: props.createProject,
                    loadProject: props.loadProject,
                    deleteProject: props.deleteProject,
                  }}
                  remove
                />
              ))
            }
            <ProjectControl props={{
              projectId: 0,
              createProject: props.createProject,
              loadProject: props.loadProject,
              deleteProject: props.deleteProject,
            }}
            />
          </div>
        </span>
      </div>
      <div />
    </Container>
  );
}
