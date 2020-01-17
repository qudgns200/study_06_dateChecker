import React from 'react';
import ReactDom from 'react-dom';

import { Button } from 'grommet';

class Page1Page extends React.Component {
    render() {
        return (
            <header className="page1">
              <Button label="Edit" onClick={() => {}} />
            </header>
        );
        //<div className="page1">no4gift Page1 페이지</div>;
    }
}

ReactDom.render(<Page1Page/>, document.getElementById('root'));