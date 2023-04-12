import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

class Todo extends React.Component {
  render(): React.ReactNode {
    return <h1>LOL</h1>;
  }
}
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
