import React, { useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0.2,
    short: 0.1,
    long: 0.5,
    active: "work",
  });

  const { updateExecute } = useContext(SettingsContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    const setNewTimerHandler = (newTimer, name, value) =>
      setNewTimer({ ...newTimer, [name]: value });

    switch (name) {
      case "work":
        setNewTimerHandler(newTimer, "work", value);
        break;
      case "shortBreak":
        setNewTimerHandler(newTimer, "short", value);
        break;
      case "longBreak":
        setNewTimerHandler(newTimer, "long", value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };
  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            className="input"
            type="number"
            name="work"
            onChange={handleChange}
            value={newTimer.work || ""}
          />
          <input
            className="input"
            type="number"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short || ""}
          />
          <input
            className="input"
            type="number"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long || ""}
          />
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  );
};

export default SetPomodoro;
