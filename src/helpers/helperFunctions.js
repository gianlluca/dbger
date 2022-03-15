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
    outputLines.push({ id: outputLines.length + 1, line });
  }

  for (let i = 0; i < tables.length; i += 1) {
    appendLine(`-- ${tables[i].name}`);

    appendLine(`CREATE TABLE IF NOT EXISTS "${tables[i].name.toLowerCase()}" (`);

    const { columns } = tables[i];
    for (let j = 0; j < columns.length; j += 1) {
      let line = `    "${columns[j].name.toLowerCase()}" ${columns[j].type.toLowerCase()}`;
      line += columns[j].pk ? ' PRIMARY KEY' : ' NOT NULL';
      line += j === columns.length - 1 ? '' : ',';
      appendLine(line);
    }

    appendLine(');');
    appendLine('\n');
  }
  appendLine('\n');

  for (let i = 0; i < tables.length; i += 1) {
    const { columns } = tables[i];
    for (let j = 0; j < columns.length; j += 1) {
      if (columns[j].relation) {
        const relSplit = columns[j].relation.name.split('.');
        if (relSplit.length < 2) {
          break;
        }
        appendLine(`ALTER TABLE "${tables[i].name.toLowerCase()}" ADD FOREIGN KEY ("${columns[j].name.toLowerCase()}") REFERENCES "${relSplit[0].toLowerCase()}" ("${relSplit[1].toLowerCase()}");`);
        appendLine('\n');
      }
    }
  }

  return outputLines;
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
