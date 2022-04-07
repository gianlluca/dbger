export function isOnDeleteArea(event, deleteAreaRef) {
  if (deleteAreaRef.current) {
    const delRect = deleteAreaRef.current.getBoundingClientRect();
    const delArea = {
      x: delRect.left + (delRect.width / 2.0),
      y: delRect.top + (delRect.height / 2.0),
    };
    const distance = Math.hypot(event.clientX - delArea.x, event.clientY - delArea.y);

    return distance < (delRect.width / 2.0);
  }
  return false;
}

export function getAddTablePosition(viewportRef, viewOffset) {
  if (viewportRef.current) {
    const viewRect = viewportRef.current.getBoundingClientRect();

    return {
      x: (viewRect.width / 2.0 - 70) + viewOffset.x,
      y: (viewRect.height / 2.0 - 43) + viewOffset.y,
    };
  }
  return { x: 0, y: 0 };
}

export function shiftColumn(columns, columnId, shift) {
  let indexOf = 0;

  for (let i = 0; i < columns.length; i += 1) {
    if (columns[i].id === columnId) {
      indexOf = i;
      break;
    }
  }

  // Don't allow cyclic shift
  if ((indexOf + shift) >= columns.length || (indexOf + shift) < 0) {
    return columns;
  }

  const columnCutOut = columns.splice(indexOf, 1)[0];
  columns.splice(indexOf + shift, 0, columnCutOut);
  return columns;
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
