import { useState, useEffect } from 'react';
import { clamp, getTemplateOutput } from '../../helpers/helperFunctions';
import { Container } from './styles';

export function TemplateOutput({ props }) {
  const { project, projectDispatch } = props;

  const [height, setHeight] = useState(project.templateConf.height);
  const [visible, setVisible] = useState(project.templateConf.visible);

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
    const bottomDistance = window.innerHeight - event.clientY;
    setHeight(clamp(bottomDistance, minHeight, maxHeight));
  };

  const handleMouseDown = (event) => {
    if (event.button === 0) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  useEffect(() => {
    projectDispatch({ type: 'UpdateTemplateConfig', templateConf: { height, visible } });
  }, [height, visible]);

  return (
    <Container>

      <button
        type="button"
        className="material-icons"
        onClick={
          (event) => {
            setVisible((previousVisible) => !previousVisible);
            event.target.blur();
          }
        }
      >
        {visible ? 'arrow_drop_down' : 'arrow_drop_up'}
      </button>
      {
        visible
          ? (
            <>
              <div className="resize-area" onPointerDown={handleMouseDown} />
              <div className="output" style={{ minHeight: `${height}px`, height: `${height}px` }}>
                <table>
                  <tbody>
                    {
                      getTemplateOutput(project.tables).map(
                        (line) => (
                          <tr key={line.id}>
                            <td className="line">{line.id}</td>
                            <td className="text">{line.line}</td>
                          </tr>
                        ),
                      )
                    }
                  </tbody>
                </table>
              </div>

            </>
          )
          : (null)
      }

    </Container>
  );
}
