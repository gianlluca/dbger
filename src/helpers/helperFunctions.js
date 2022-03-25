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

export function getMigrateUpSqlOutput(tables) {
  const outputLines = [];

  function appendLine(line) {
    outputLines.push({ id: outputLines.length + 1, line });
  }

  function appendSpaces(line, curLength, maxLength) {
    let curLine = line;
    const difLength = maxLength - curLength;

    for (let i = 0; i < difLength; i += 1) {
      curLine += ' ';
    }
    return curLine;
  }

  function appendComma(line) {
    let curLine = line;

    let lastChar = curLine.slice(curLine.length - 1);

    while (lastChar === ' ') {
      curLine = curLine.slice(0, curLine.length - 1);
      lastChar = curLine.slice(curLine.length - 1);
    }
    return `${curLine},`;
  }

  for (let i = 0; i < tables.length; i += 1) {
    appendLine(`-- ${tables[i].name}`);
    appendLine(`CREATE TABLE IF NOT EXISTS "${tables[i].name.toLowerCase()}" (`);

    let maxNameLenght = 0;
    let maxTypeLenght = 0;

    const { columns } = tables[i];
    for (let j = 0; j < columns.length; j += 1) {
      maxNameLenght = (columns[j].name.length > maxNameLenght) ? columns[j].name.length : maxNameLenght;
      maxTypeLenght = (columns[j].type.length > maxTypeLenght) ? columns[j].type.length : maxTypeLenght;
    }

    for (let j = 0; j < columns.length; j += 1) {
      const name = `"${columns[j].name.toLowerCase()}" `;
      const nameLine = `${appendSpaces(name, columns[j].name.length, maxNameLenght)}`;
      const typeLine = `${appendSpaces(columns[j].type.toUpperCase(), columns[j].type.length, maxTypeLenght)}`;

      let line = `    ${nameLine}${typeLine}`;
      line += columns[j].pk ? ' PRIMARY KEY NOT NULL' : '';
      line += !columns[j].pk && columns[j].notNull ? ' NOT NULL' : '';
      line += !columns[j].pk && columns[j].unique ? ' UNIQUE' : '';
      line += columns[j].default && columns[j].default !== '' ? ` DEFAULT ${columns[j].default}` : '';
      line += columns[j].check && columns[j].check !== '' ? ` CHECK ${columns[j].check}` : '';
      line = j !== columns.length - 1 ? appendComma(line) : line;
      line += columns[j].comment && columns[j].comment !== '' ? ` -- ${columns[j].comment}` : '';

      appendLine(line);
    }

    appendLine(');');
    appendLine('\n');
  }
  appendLine('\n');

  // Relations
  for (let i = 0; i < tables.length; i += 1) {
    const { columns } = tables[i];
    let hasRelation = false;
    for (let j = 0; j < columns.length; j += 1) {
      if (columns[j].relation) {
        hasRelation = true;
        const relSplit = columns[j].relation.name.split('.');
        if (relSplit.length < 2) {
          break;
        }
        // eslint-disable-next-line max-len
        appendLine(`ALTER TABLE "${tables[i].name.toLowerCase()}" ADD FOREIGN KEY ("${columns[j].name.toLowerCase()}") REFERENCES "${relSplit[0].toLowerCase()}" ("${relSplit[1].toLowerCase()}");`);
      }
    }
    if (hasRelation) { appendLine('\n'); }
  }
  appendLine('\n');

  // Indexes
  for (let i = 0; i < tables.length; i += 1) {
    const { columns } = tables[i];
    let hasIndexed = false;
    for (let j = 0; j < columns.length; j += 1) {
      if (!columns[j].pk && columns[j].indexed) {
        hasIndexed = true;
        // eslint-disable-next-line max-len
        appendLine(`CREATE INDEX IF NOT EXISTS ON "${columns[j].name.toLowerCase()}" ("${tables[i].name.toLowerCase()}");`);
      }
    }
    if (hasIndexed) { appendLine('\n'); }
  }

  return outputLines;
}

export function getMigrateDownSqlOutput(tables) {
  const outputLines = [];

  function appendLine(line) {
    outputLines.push({ id: outputLines.length + 1, line });
  }

  appendLine('-- WARNING THIS WILL DELETE ALL DATABASE DATA');
  appendLine('\n');

  for (let i = 0; i < tables.length; i += 1) {
    appendLine(`DROP TABLE IF EXISTS ${tables[i].name.toLowerCase()};`);
  }
  appendLine('\n');

  return outputLines;
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
