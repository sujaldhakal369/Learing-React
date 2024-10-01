function Random() {
  let randnum = Math.random() * 100;
  return (
    <h1 style={{ backgroundColor: "aqua" }}>
      random number is: {Math.round(randnum)}
    </h1>
  );
}

export default Random;
