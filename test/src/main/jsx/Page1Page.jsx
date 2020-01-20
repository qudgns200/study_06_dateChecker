import React from "react";
import ReactDom from "react-dom";
import Button from '@material-ui/core/Button';

class Page1Page extends React.Component {
  render() {
    return (
      <div className="page1">
        <Button variant="contained" color="inherit">
          Hello!!
        </Button>
      </div>
    );
  }
}

ReactDom.render(<Page1Page />, document.getElementById("root"));
