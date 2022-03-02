import { useState } from 'react';
import { getTemplateOutput } from '../../helpers/helperFunctions';
import { Container } from './styles';

export function TemplateOutput({ props }) {
  const [height, setHeight] = useState(100);

  const handleMouseUp = (event) => {
    if (event.button === 0) {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  };

  const handleMouseMove = (event) => {
    setHeight(Math.max(window.innerHeight - event.clientY, 40));
  };

  const handleMouseDown = (event) => {
    if (event.button === 0) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  return (
    <Container>
      <div className="resize-area" onPointerDown={handleMouseDown} />
      <div className="output" style={{ minHeight: `${height}px`, height: `${height}px` }}>
        <table>
          <tbody>
            {
              getTemplateOutput(props.tables).map(
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
    </Container>
  );
}
