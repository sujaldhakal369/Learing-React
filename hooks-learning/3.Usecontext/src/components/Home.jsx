import { useContext } from "react";
import noteContext from "./noteContext";
const Home = () => {
  const a = useContext(noteContext);

  return (
    <>
      <div>
        hello
        {/* my name is {a.name}. I am reading in {a.class}. */}
      </div>
    </>
  );
};

export default Home;
