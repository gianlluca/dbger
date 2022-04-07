// Format Helpers
function appendLine(outputLines, line) {
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
// Format Helpers

// PostgreSQL
function getPostgreSQLMigrateUp(tables) {
  const outputLines = [];

  for (let i = 0; i < tables.length; i += 1) {
    appendLine(outputLines, `-- ${tables[i].name}`);
    appendLine(outputLines, `CREATE TABLE IF NOT EXISTS "${tables[i].name.toLowerCase()}" (`);

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

      appendLine(outputLines, line);
    }

    appendLine(outputLines, ');');
    appendLine(outputLines, '\n');
  }
  appendLine(outputLines, '\n');

  let hasAtLeastOneRelation = false;
  // Relations
  for (let i = 0; i < tables.length; i += 1) {
    const { columns } = tables[i];
    let hasRelation = false;
    for (let j = 0; j < columns.length; j += 1) {
      if (columns[j].relation) {
        hasRelation = true;
        const relSplit = columns[j].relation.name.split('.');
        if (relSplit.length < 2) { break; }
        // eslint-disable-next-line max-len
        appendLine(outputLines, `ALTER TABLE "${tables[i].name.toLowerCase()}" ADD FOREIGN KEY ("${columns[j].name.toLowerCase()}") REFERENCES "${relSplit[0].toLowerCase()}" ("${relSplit[1].toLowerCase()}");`);
      }
    }
    if (hasRelation) {
      appendLine(outputLines, '\n');
      hasAtLeastOneRelation = true;
    }
  }
  if (hasAtLeastOneRelation) { appendLine(outputLines, '\n'); }

  // Indexes
  for (let i = 0; i < tables.length; i += 1) {
    const { columns } = tables[i];
    let hasIndexed = false;
    for (let j = 0; j < columns.length; j += 1) {
      if (!columns[j].pk && columns[j].indexed) {
        hasIndexed = true;
        // eslint-disable-next-line max-len
        appendLine(outputLines, `CREATE INDEX IF NOT EXISTS "idx_${columns[j].name.toLowerCase()}" ON "${tables[i].name.toLowerCase()}"("${columns[j].name.toLowerCase()}");`);
      }
    }
    if (hasIndexed) { appendLine(outputLines, '\n'); }
  }

  return outputLines;
}

function getPostgreSQLMigrateDown(tables) {
  const outputLines = [];

  appendLine(outputLines, '-- WARNING THIS WILL DELETE ALL DATABASE DATA');
  appendLine(outputLines, '\n');

  for (let i = 0; i < tables.length; i += 1) {
    appendLine(outputLines, `DROP TABLE IF EXISTS ${tables[i].name.toLowerCase()} CASCADE;`);
  }
  appendLine(outputLines, '\n');

  return outputLines;
}
// PostgreSQL

// Prisma
function getPrismaMigrateUp(tables) {
  // Return this while not implemented yet
  return [{ id: 1, line: '\n' }];
}
function getPrismaMigrateDown(tables) {
  // Return this while not implemented yet
  return [{ id: 1, line: '\n' }];
}
// Prisma

// GoRm
function getGoRmMigrateUp(tables) {
  // Return this while not implemented yet
  return [{ id: 1, line: '\n' }];
}
function getGoRmMigrateDown(tables) {
  // Return this while not implemented yet
  return [{ id: 1, line: '\n' }];
}
// GoRm

// outputType
//  0 = PostgreSQL
//  1 = Prisma
//  2 = GoRm
export function getMigrateUpOutput(tables, templateType) {
  switch (templateType) {
    case 0:
      return getPostgreSQLMigrateUp(tables);
    case 1:
      return getPrismaMigrateUp(tables);
    case 2:
      return getGoRmMigrateUp(tables);
    default:
      return [];
  }
}

// outputType
//  0 = PostgreSQL
//  1 = Prisma
//  2 = GoRm
export function getMigrateDownOutput(tables, templateType) {
  switch (templateType) {
    case 0:
      return getPostgreSQLMigrateDown(tables);
    case 1:
      return getPrismaMigrateDown(tables);
    case 2:
      return getGoRmMigrateDown(tables);
    default:
      return [];
  }
}
