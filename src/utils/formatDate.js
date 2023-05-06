export function formatDate(dateString) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', options)
    .replace(/(^|\s)de\s/g, '$1')
    .replace(date.getDate(), `<strong>${date.getDate()}</strong>`);
}