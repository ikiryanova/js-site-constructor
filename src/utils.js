export function row(content, styles = '') {
  return `<div class = "row" style="${styles}">${content}</div>`
}

export function col(content, className = '') {
  return `
   <div class = "col-sm ${className}">
      ${content}
    </div>`
}

