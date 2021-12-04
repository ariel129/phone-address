export const numberOnly = (event) => {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
};
