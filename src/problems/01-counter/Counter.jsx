import { useState } from "react";

function counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Counter : {count} </h2>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
            <br></br>
            <br></br>
            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>
            <br></br>
            <br></br>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}
export default counter;