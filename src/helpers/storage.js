import { v4 as uuidv4 } from 'uuid';
import { getAddTablePosition } from './helperFunctions';

export function newProjectObject() {
  return {
    id: uuidv4(),
    name: 'Untitled',
    tables: [
      {
        id: uuidv4(),
        name: 'User',
        columns: [
          {
            id: uuidv4(), name: 'id', type: 'int', pk: true,
          },
          {
            id: uuidv4(), name: 'name', type: 'varchar', pk: false,
          },
        ],
        pos: getAddTablePosition({ x: 0, y: 0 }),
      },
    ],
    controls: true,
    viewOffset: { x: 0, y: 0 },
    templateConf: { height: 40, visible: false },
  };
}

export function loadProjectName(projectId) {
  const loadedProject = JSON.parse(localStorage.getItem(projectId));
  return loadedProject.name;
}

export function loadProjectData(projectId) {
  const project = JSON.parse(localStorage.getItem(projectId));

  // To avoid error loading projects that was saved before
  // the template conf functionality
  if (!project.templateConf) {
    return { ...project, templateConf: { height: 44, visible: true } };
  }

  return project;
}

export function saveProject(project) {
  localStorage.setItem(project.id, JSON.stringify(project));
  localStorage.setItem('last_project_id', project.id);
}

export function deleteProjectData(projectId) {
  localStorage.removeItem(projectId);
}

export function loadLastProject() {
  const lastProjectId = localStorage.getItem('last_project_id');
  if (lastProjectId) {
    return loadProjectData(lastProjectId);
  }
  return newProjectObject();
}

export function loadProjectList() {
  return JSON.parse(localStorage.getItem('project_list')) || [];
}

export function saveProjectList(projectList) {
  localStorage.setItem('project_list', JSON.stringify(projectList));
}
