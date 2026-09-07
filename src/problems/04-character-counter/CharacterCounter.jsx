import { useState } from "react";

function CharacterCounter() {
    const [text, setText] = useState("");
    return (
        <div>
            <h2>Character Counter</h2>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write Something...."
            />
            <p>Character :{text.length}</p>
        </div>
    );
}
export default CharacterCounter;