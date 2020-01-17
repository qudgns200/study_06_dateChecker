import React from "react";
import ReactDom from "react-dom";

import { Button } from "grommet";

class MainPage extends React.Component {
  render() {
    return <Button label="Edit" onClick={() => {}} />;
    //<div className="main">no4gift 메인 페이지</div>;
  }
}

ReactDom.render(<MainPage />, document.getElementById("root"));
