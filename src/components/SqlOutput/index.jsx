import { useState, useEffect } from 'react';
import { clamp, getMigrateUpSqlOutput, getMigrateDownSqlOutput } from '../../helpers/helperFunctions';
import { Container } from './styles';

export function SqlOutput({ props }) {
  const { project, projectDispatch } = props;

  const [height, setHeight] = useState(project.sqlOutputConf.height);
  const [migrateType, setMigrateType] = useState(0);

  const handleMouseUp = (event) => {
    if (event.button === 0) {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  };

  const handleMouseMove = (event) => {
    const minHeight = 44;

    // -44 cause is the header min height, -192 cause is the viewport min height
    const maxHeight = window.innerHeight - 44 - 192;

    // -2 cause is the half size of resize area, this will make cursor stays on the center
    const bottomDistance = window.innerHeight - event.clientY - 2;

    setHeight(clamp(bottomDistance, minHeight, maxHeight));
  };

  const handleMouseDown = (event) => {
    if (event.button === 0) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  useEffect(() => {
    projectDispatch({ type: 'UpdateTemplateConfig', sqlOutputConf: { ...project.sqlOutputConf, height } });
  }, [height]);

  return (
    <Container>
      <div className="resize-area" onPointerDown={handleMouseDown} />
      <div className="content" style={{ minHeight: `${height}px`, height: `${height}px` }}>
        <div className="config">
          <span>PostgreSQL</span>
          <span>-</span>
          <button type="button" onClick={() => { setMigrateType(0); }}>Migrate Up</button>
          <button type="button" onClick={() => { setMigrateType(1); }}>Migrate Down</button>
        </div>
        <div className="output">
          <table>
            <tbody>
              {
                (!migrateType) ? (
                  getMigrateUpSqlOutput(project.tables).map(
                    (line) => (
                      <tr key={line.id}>
                        <td className="line">{line.id}</td>
                        <td className="text">{line.line}</td>
                      </tr>
                    ),
                  )
                ) : (
                  getMigrateDownSqlOutput(project.tables).map(
                    (line) => (
                      <tr key={line.id}>
                        <td className="line">{line.id}</td>
                        <td className="text">{line.line}</td>
                      </tr>
                    ),
                  )
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
