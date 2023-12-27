const container = React.createElement("div", { id: "container" }, [
  React.createElement(
    "h1",
    {},
    "React Js is a Client side library to build UI"
  ),
  React.createElement("p", {}, "React is all about component and reusability"),
]);

console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
