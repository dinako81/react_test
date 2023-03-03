function Joke({ joke }) {
  return (
    <div
      style={{
        letterSpacing: "1px",
        fontSize: "10px",
        backgroundColor: "#282c34",
        color: "green",
        padding: "5px",
        // marginRight: "8%",
      }}
    >
      <ul>
        <ol>
          <h2>{joke.joke}</h2>
        </ol>
        <ol>
          <h2 style={{ color: "yellow" }}>{joke.setup}</h2>
          <h2 style={{ color: "red" }}>{joke.delivery}</h2>
        </ol>
      </ul>
    </div>
  );
}

export default Joke;
