import noteContext from "../components/noteContext";

const NoteState = (props) => {
  const state = {
    name: "sujal",
    class: "Bachelor",
  };

  return (
    <>
      <NoteContext.Provider value={state}>
        {props.children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteState;
