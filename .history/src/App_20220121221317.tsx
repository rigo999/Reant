import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem"

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Menu onSelect={(index) => {console.log(index);}}>
                    <MenuItem>cool link</MenuItem>
                    <MenuItem disabled>cool link2</MenuItem>
                    <MenuItem>cool link3</MenuItem>
                </Menu>
                <Menu
                    onSelect={(index) => {console.log(index);}}
                    mode="vertical"
                >
                    <MenuItem>cool link4</MenuItem>
                    <MenuItem disabled>cool link5</MenuItem>
                    <MenuItem>cool link6</MenuItem>
                </Menu>
                <hr />
                <hr />
                {/* <Alert></Alert> */}
                {/* <Alert title="你好" type={AlertType.Danger}></Alert> */}
                <hr />
                <hr />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
