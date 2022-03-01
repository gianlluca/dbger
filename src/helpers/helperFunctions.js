export function isOnDeleteArea(event, deleteAreaId) {
  const delRect = document.getElementById(deleteAreaId).getBoundingClientRect();
  const delArea = {
    x: delRect.left + (delRect.width / 2.0),
    y: delRect.top + (delRect.height / 2.0),
  };
  const distance = Math.hypot(event.clientX - delArea.x, event.clientY - delArea.y);

  return distance < (delRect.width / 2.0);
}

export function getAddTablePosition(viewOffset) {
  const viewRect = document.getElementById('viewport').getBoundingClientRect();

  return {
    x: (viewRect.width / 2.0 - 70) + viewOffset.x,
    y: (viewRect.height / 2.0 - 43) + viewOffset.y,
  };
}

export function getTemplateOutput(tables) {
  const outputLines = [];

  function appendLine(line) {
    outputLines.push({ id: outputLines.length, line });
  }

  for (let i = 0; i < tables.length; i += 1) {
    appendLine(`// ${tables[i].name}`);

    let createTableLine = `CREATE TABLE IF NOT EXISTS ${tables[i].name.toLowerCase()} ( `;

    const { columns } = tables[i];
    for (let j = 0; j < columns.length; j += 1) {
      createTableLine += `${columns[j].name.toLowerCase()} ${columns[j].type.toUpperCase()}`;
      createTableLine += columns[j].pk ? ' PRIMARY KEY' : '';
      createTableLine += j === columns.length - 1 ? ' );' : ', ';
    }

    appendLine(createTableLine);
    appendLine('');
  }

  return outputLines;
}
