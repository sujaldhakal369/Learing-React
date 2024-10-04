let CurrentTime = () => {
  let Time = new Date();

  return (
    <p>
      This is current time: {Time.toLocaleDateString()} -
      {Time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
