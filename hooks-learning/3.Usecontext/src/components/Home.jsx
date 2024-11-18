import { useContext } from "react";
import NoteContext from "./NoteContext";

const Home = () => {
  const a = useContext(NoteContext);

  return (
    <div>
      My name is {a.name}. I am reading in {a.class}.
    </div>
  );
};

export default Home;
