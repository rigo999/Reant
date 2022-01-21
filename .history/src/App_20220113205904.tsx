import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Button disabled>
                    disabled default
                </Button>
                <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
                    pSmall
                </Button>
                <Button btnType={ButtonType.Danger}>
                    daSmall
                </Button>
                <Button onClick={(e) => {e.preventDefault(); alert(123)}}>
                    default
                </Button>
                <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
                    pLarge
                </Button>
                <Button btnType={ButtonType.Link} href="http://wwww.baidu.com" target="_blank">
                    Baidu Link
                </Button>
                <Button btnType={ButtonType.Link} href="http://wwww.baidu.com" disabled>
                    disabled Link
                </Button>
                <hr />
                <hr />
                {/* <Alert></Alert> */}
                <Alert title="你好" type={AlertType.Danger}></Alert>
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
