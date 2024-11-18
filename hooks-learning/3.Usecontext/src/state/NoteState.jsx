import NoteContext from "../components/NoteContext";

const NoteState = (props) => {
  const state = {
    name: "Sujal",
    class: "Bachelor",
  };

  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
