import { useEffect, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getAddTablePosition } from './helpers/helperFunctions';
import {
  deleteProjectData, loadLastProject, loadProjectData, loadProjectList,
  newProjectObject, saveProject, saveProjectList,
} from './helpers/storage';
import Viewport from './components/Viewport';
import { Header } from './components/Header';
import { GlobalStyle } from './GlobalStyle';
import { TemplateOutput } from './components/TemplateOutput';

function App() {
  const [projectList, setProjectList] = useState(loadProjectList());
  const [project, projectDispatch] = useReducer(projectReducer, loadLastProject());

  function projectReducer(state, action) {
    switch (action.type) {
      case 'AddTable':
        return {
          ...state,
          tables: [
            ...state.tables,
            {
              id: uuidv4(),
              name: 'Table',
              columns: [
                {
                  id: uuidv4(), name: 'id', type: 'int', pk: true,
                },
              ],
              pos: getAddTablePosition(state.viewOffset),
            },
          ],
        };
      case 'UpdateTableName':
        return {
          ...state,
          tables: [
            ...state.tables.map(
              (table) => (table.id !== action.id ? table
                : { ...table, name: action.name }),
            ),
          ],
        };
      case 'UpdateTablePos':
        return {
          ...state,
          tables: [
            ...state.tables.map(
              (table) => (table.id !== action.id ? table
                : { ...table, pos: action.pos }),
            ),
          ],
        };
      case 'RemoveTable':
        return {
          ...state,
          tables: [
            ...state.tables.filter((table) => table.id !== action.id),
          ],
        };
      case 'AddColumn':
        return {
          ...state,
          tables: [
            ...state.tables.map(
              (table) => (table.id !== action.id ? table
                : {
                  ...table,
                  columns: [...table.columns, {
                    id: uuidv4(), name: 'name', type: 'varchar', pk: false,
                  }],
                }),
            ),
          ],
        };
      case 'ToggleColumnPk':
        return {
          ...state,
          tables: [
            ...state.tables.map(
              (table) => (table.id !== action.tableId ? table
                : {
                  ...table,
                  columns: [
                    ...table.columns.map(
                      (column) => ((column.id !== action.columnId)
                        ? column : { ...column, pk: !column.pk }),
                    ),
                  ],
                }
              ),
            ),
          ],
        };
      case 'UpdateColumnName':
        return {
          ...state,
          tables: [
            ...state.tables.map(
              (table) => (table.id !== action.tableId ? table
                : {
                  ...table,
                  columns: [
                    ...table.columns.map(
                      (column) => (column.id !== action.columnId ? column
                        : { ...column, name: action.columnName }),
                    ),
                  ],
                }
              ),
            ),
          ],
        };
      case 'UpdateColumnType':
        return {
          ...state,
          tables: [
            ...state.tables.map(
              (table) => (table.id !== action.tableId ? table
                : {
                  ...table,
                  columns: [
                    ...table.columns.map(
                      (column) => (column.id !== action.columnId ? column
                        : { ...column, type: action.columnType }),
                    ),
                  ],
                }
              ),
            ),
          ],
        };
      case 'RemoveColumn':
        return {
          ...state,
          tables: [
            ...state.tables.map(
              (table) => (table.id !== action.tableId ? table
                : {
                  ...table,
                  columns: [
                    ...table.columns.filter((column) => column.id !== action.columnId),
                  ],
                }
              ),
            ),
          ],
        };
      case 'AddColumnRelation':
        return {
          ...state,
          tables: [
            ...state.tables.map(
              (table) => (table.id !== action.tableId ? table
                : {
                  ...table,
                  columns: [
                    ...table.columns.map(
                      (column) => (column.id !== action.columnId ? column
                        : {
                          ...column,
                          relation: {
                            id: uuidv4(),
                            name: `${state.tables[0].name}.${state.tables[0].columns[0].name}`,
                            inCard: 0,
                            outCard: 0,
                          },
                        }),
                    ),
                  ],
                }
              ),
            ),
          ],
        };
      case 'UpdateColumnRelation':
        return {
          ...state,
          tables: [
            ...state.tables.map(
              (table) => (table.id !== action.tableId ? table
                : {
                  ...table,
                  columns: [
                    ...table.columns.map(
                      (column) => (column.id !== action.columnId ? column
                        : {
                          ...column,
                          relation: action.relation,
                        }),
                    ),
                  ],
                }
              ),
            ),
          ],
        };
      case 'RemoveColumnRelation':
        return {
          ...state,
          tables: [
            ...state.tables.map(
              (table) => (table.id !== action.tableId ? table
                : {
                  ...table,
                  columns: [
                    ...table.columns.map(
                      (column) => (column.id !== action.columnId ? column
                        : { ...column, relation: null }),
                    ),
                  ],
                }
              ),
            ),
          ],
        };
      case 'SetViewOffset':
        return { ...state, viewOffset: action.viewOffset };
      case 'ToggleControls':
        return { ...state, controls: !state.controls };
      case 'UpdateProjectName':
        return {
          ...state,
          name: action.name,
        };
      case 'SetProject':
        return action.project;
      default:
        throw new Error('Action type unrecognizable');
    }
  }

  const createProject = () => {
    const newProject = newProjectObject();
    saveProject(newProject);

    setProjectList((previousList) => [...previousList, newProject.id]);
    projectDispatch({ type: 'SetProject', project: newProject });
  };

  const loadProject = (projectId) => {
    const loadedProject = loadProjectData(projectId);
    projectDispatch({ type: 'SetProject', project: loadedProject });
  };

  const deleteProject = (projectId) => {
    const newList = projectList.filter((id) => id !== projectId);

    deleteProjectData(projectId);
    setProjectList(newList);

    if (projectId === project.id) {
      if (newList.length <= 0) {
        createProject();
      } else {
        loadProject(newList[0]);
      }
    }
  };

  useEffect(() => {
    saveProject(project);
    if (!projectList.includes(project.id)) {
      setProjectList((previousList) => [...previousList, project.id]);
    } else {
      setProjectList([...projectList]);
    }
  }, [project]);

  useEffect(() => {
    saveProjectList(projectList);
  }, [projectList]);

  return (
    <>
      <Header
        props={{
          projectName: project.name,
          projectList,
          projectDispatch,
          createProject,
          loadProject,
          deleteProject,
        }}
      />
      <Viewport props={{ project, projectDispatch }} />
      <TemplateOutput props={{ tables: project.tables }} />
      <GlobalStyle />
    </>
  );
}

export default App;
