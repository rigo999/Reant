import React, { useState } from "react";
import Input from "./components/Input/input";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
var App = function () {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Input, null),
            React.createElement("hr", null),
            React.createElement("hr", null))));
};
export default App;
