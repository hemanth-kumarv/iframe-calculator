import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: "" };
  }

  componentDidMount() {
    if (this.iframeNode) {
      this.iframeDocument = this.iframeNode.contentWindow.document;

      const root = this.iframeDocument.createElement("div");
      root.id = "calculator-root";
      this.iframeDocument.body.appendChild(root);
      ReactDOM.createRoot(root).render(
        <Calculator updateResult={(result) => this.setState({ result })} />
      );
    }
  }

  render() {
    return (
      <div id="container">
        <h1>Calculator in IFrame</h1>
        <iframe
          title="Calculator Iframe"
          width="80%"
          height="30%"
          style={{ margin: "1.5rem 0" }}
          ref={(node) => (this.iframeNode = node)}
        />
        <h3>{this.state.result}</h3>
      </div>
    );
  }
}

export default App;
