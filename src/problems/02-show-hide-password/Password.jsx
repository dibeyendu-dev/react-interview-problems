import { useState } from "react";

function Password() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <h2>Password</h2>
            <input type={showPassword ? "text" : "password"}
                placeholder="Enter your password" />

            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
            </button>
        </div>
    );
}
export default Password;