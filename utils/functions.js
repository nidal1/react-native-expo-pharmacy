function capitalize(str) {
  return (
    str.toString().slice(0, 1).toUpperCase() +
    str.toString().slice(1, str.toString().length)
  );
}

export { capitalize };
