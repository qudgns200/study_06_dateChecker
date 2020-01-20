import React from "react";
import ReactDom from "react-dom";
import Button from '@material-ui/core/Button';

class Page2Page extends React.Component {
  render() {
    return (
      <header className="page2">
        <Button variant="contained" color="primary">
          Hello!!
        </Button>
      </header>
    );
  }
}

ReactDom.render(<Page2Page />, document.getElementById("root"));
