import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [total, setTotal] = useState(Object.keys(formData).length);
    const [progress, setProgress] = useState("0%");
    useEffect(() => {
        setTotal(() => Object.keys(formData).length);
        function progressBar() {
            let fig = 0;
            Object.values(formData).forEach((val) => val.length > 0 && fig++);
            setProgress(() => `${(fig / total) * 100}%`);
        }
        progressBar();
    }, [formData, progress, total]);

    const handleChange = (e) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    return (
        <div
            className="App"
            style={{
                position: "relative",
                width: "50vw",
                margin: "30px auto",
                top: "40%",
            }}
        >
            <div
                className="progressbar_container"
                style={{
                    width: "100%",
                    backgroundColor: "lightgrey",
                    height: "8px",
                    borderRadius: "20px",
                }}
            >
                <div
                    className="progressbar"
                    style={{
                        width: progress,
                        backgroundColor: "dodgerblue",
                        height: "7px",
                        borderRadius: "20px",
                    }}
                ></div>
            </div>
            <form
                action=""
                style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                }}
            >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
            </form>
        </div>
    );
}

export default App;
