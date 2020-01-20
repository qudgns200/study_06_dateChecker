import React from "react";
import ReactDom from "react-dom";

import { WorldMap } from "grommet";

class Page1Page extends React.Component {
  render() {
    return (
      <header className="page2">
        <WorldMap
          color="neutral-1"
          continents={[
            {
              name: "Africa",
              color: "light-5",
              onClick: name => {}
            }
          ]}
          onSelectPlace={(lat, lon) => {}}
          places={[
            {
              name: "Sydney",
              location: [-33.8830555556, 151.216666667],
              color: "accent-2",
              onClick: name => {}
            }
          ]}
          selectColor="accent-2"
        />
      </header>
    );
  }
}

ReactDom.render(<Page1Page />, document.getElementById("root"));
