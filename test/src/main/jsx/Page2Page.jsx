import React from "react";
import ReactDom from "react-dom";

import { Button } from "grommet";

class Page2Page extends React.Component {
  render() {
    return (
      <header className="page2">
        <Button label="Page2" onClick={() => {}} />
      </header>
    );
    //<div className="main">no4gift 메인 페이지</div>;
  }
}

ReactDom.render(<Page2Page />, document.getElementById("root"));
