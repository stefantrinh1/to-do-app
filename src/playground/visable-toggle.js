console.log("visable.js running");

const appRoot = document.getElementById("app");

let visable = true;

let messages = ["message 1", "message 2"];
const singleMessage = "single Message";

const toggleVisable = () => {
  visable = !visable;
  render();
};

const render = () => {
  console.log("render Loaded");
  console.log(visable);
  let templateOne = (
    <div>
      <h1>Visable Toggle</h1>
      <button onClick={toggleVisable}>
        {visable ? "Show Data" : "Hide Data"}
      </button>
      <p>{visable ? "" : singleMessage}</p>
    </div>
  );
  console.log(visable);
  ReactDOM.render(templateOne, appRoot);
};

render();
