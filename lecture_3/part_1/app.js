import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = (
    <h1 className="title" tabIndex="5">
        This is the Title
    </h1>
)

// const HeadingComponent = () => {
//     return <h1>React functional component</h1>;
// }

// const HeadingComponent = () => <h1>React functional component</h1>;

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1>
            React functional component
        </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);