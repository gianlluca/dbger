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

  const outputLines = getTemplateOutput(props.tables);
  console.log(outputLines);

  return (
    <Container style={{ minHeight: `${height}px` }}>
      <div className="resize-area" onPointerDown={handleMouseDown} />
      <div className="output">
        <div className="output-lines">
          {
            outputLines.map(
              (line) => <span key={line.id}>{line.id}</span>,
            )
          }
        </div>
        <div className="output-text">
          {
            outputLines.map(
              (line) => <span className="span-text" key={line.id}>{line.line}</span>,
            )
          }
        </div>
      </div>
    </Container>
  );
}
