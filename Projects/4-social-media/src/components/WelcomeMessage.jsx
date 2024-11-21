const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <>
      <center className="welcome_message">
        <h1>There are not posts.</h1>
        <button
          type="button"
          onClick={onGetPostsClick}
          className="btn btn-primary"
        >
          Get posts from server.
        </button>
      </center>
    </>
  );
};

export default WelcomeMessage;
