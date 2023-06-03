// export function formatDate(dateString) {
//   const options = { day: 'numeric', month: 'long', year: 'numeric' };
//   const date = new Date(dateString);
//   return date.toLocaleDateString('pt-BR', options)
//     .replace(/(^|\s)de\s/g, '$1')
//     .replace(date.getDate(), `<strong>${date.getDate()}</strong>`);
// }

export function formatDate(dateString) {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en', options)
    .replace(/(\d+)(?:st|nd|rd|th)/, '$1') // remove sufixo do dia (st, nd, rd, th)
    .replace(/(\w+) (\d+), (\d+)/, (match, p1, p2, p3) => {
      return `<strong>${p2}</strong> ${p1} ${p3}`;
    });
}