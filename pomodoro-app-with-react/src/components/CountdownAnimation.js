import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";

const CountdownAnimation = ({ myKey, timer, animate, children }) => {
  const { stopAnimation } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={myKey}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ["#c9ccea", 0.33],
        ["#c9ccea", 0.33],
        ["#c9ccea", 0.33],
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#1f7c62"
      onComplete={() => {
        stopAnimation();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
