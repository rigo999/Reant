import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem"
import SubMenu from "./components/Menu/subMenu";
import Transition from "./components/Transition/transition";
import Icon from "./components/Icon/icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fas)

const App: React.FC = () => {
    const [ show, setShow ] = useState(false)

    return (
        <div className="App">
            <header className="App-header">
                {/* <Icon icon="arrow-down" theme="primary" size="10x"/>
                <FontAwesomeIcon icon={faCoffee} size="10x"/> */}
                <Menu onSelect={(index) => {console.log(index);}}>
                    <MenuItem>cool link</MenuItem>
                    <SubMenu title="dropdown">
                        <MenuItem>dropdown1</MenuItem>
                        <MenuItem>dropdown2</MenuItem>
                        <MenuItem disabled>dropdown3</MenuItem>
                    </SubMenu>
                    <MenuItem disabled>dropdown3</MenuItem>
                    <MenuItem>cool link3</MenuItem>
                </Menu>
                <Button size="lg" onClick={() => { setShow(!show) }}> Toggle </Button>
                <Transition
                    in={show}
                    timeout={300}
                    animation="zoom-in-left"
                >
                    <div>
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                    </div>
                </Transition>
                <Transition
                    in={show}
                    timeout={300}
                    animation="zoom-in-left"
                >
                    <Button btnType="primary" size="lg">A Large Button</Button>
                </Transition>
                {/* <Menu
                    onSelect={(index) => {console.log(index);}}
                    mode="vertical"
                    defaultOpenSubmenu={['3']}
                >
                    <MenuItem>cool link4</MenuItem>
                    <MenuItem disabled>cool link5</MenuItem>
                    <MenuItem>cool link6</MenuItem>
                    <SubMenu title="dropdown">
                        <MenuItem>cool link7.1</MenuItem>
                        <MenuItem>cool link7.2</MenuItem>
                        <MenuItem>cool link7.3</MenuItem>
                        <MenuItem disabled>cool link7.4</MenuItem>
                    </SubMenu>
                    <MenuItem>cool link8</MenuItem>
                </Menu> */}
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