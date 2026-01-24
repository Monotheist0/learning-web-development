import { useEffect, useState } from "react";

function EffectOne() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("Effect ran!");
    }, [count]);
    return (
        <div style={{ border: "2px solid orange", padding: "20px", margin: "20px" }}>
            <h2>Day 3: useEffect</h2>
            <p>Count: {count}</p>
            <button
                style={{ padding: "20px", margin: "10px 0" }}
                onClick={() => setCount(count + 1)}
            ></button>
        </div>
    );
}
export default EffectOne;
