import { v4 as uuidv4 } from 'uuid';

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
        pos: { x: (window.innerWidth / 2.0 - 78), y: (window.innerHeight / 2.0 - 67) },
      },
    ],
    controls: true,
    viewOffset: { x: 0, y: 0 },
  };
}

export function loadProjectName(projectId) {
  const loadedProject = JSON.parse(localStorage.getItem(projectId));
  return loadedProject.name;
}

export function loadProjectData(projectId) {
  return JSON.parse(localStorage.getItem(projectId));
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
    return JSON.parse(localStorage.getItem(lastProjectId));
  }
  return newProjectObject();
}

export function loadProjectList() {
  return JSON.parse(localStorage.getItem('project_list')) || [];
}

export function saveProjectList(projectList) {
  localStorage.setItem('project_list', JSON.stringify(projectList));
}
