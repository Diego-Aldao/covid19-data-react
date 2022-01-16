export const buscarFecha = (updated) => {
  let fecha = new Date(updated);
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1;
  let año = fecha.getFullYear();
  return `${dia}/${mes}/${año}`;
};
