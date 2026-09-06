import { useState } from "react";

function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div
            style={{
                backgroundColor: darkMode ? "#222" : "#fff",
                color: darkMode ? "#fff" : "#222",
                padding: "30px",
            }}
        >
            <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Switch To Light Mode" : "Switch to Dark Mode"}
            </button>
        </div>
    );
}
export default DarkMode;