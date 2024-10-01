function Hello() {
  let name = "sujal";
  let number = 369;
  let post = () => {
    return "developer";
  };

  return (
    <h3>
      message No: {number}
      <br />
      Hello this is {name} from future. I am the best {post()}.
    </h3>
  );
}

export default Hello;
