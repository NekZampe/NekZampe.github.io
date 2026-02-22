import { useState, useEffect } from "react";

export function StatusBar() {
  const [cpuUsage, setCpuUsage] = useState(4);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // CPU Fluctuation Timer
    const cpuInterval = setInterval(() => {
      const randomUsage = Math.floor(Math.random() * 12) + 2; // Keeps it between 2% and 14%
      setCpuUsage(randomUsage);
    }, 4000);

    // Clock Timer
    const timeInterval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }, 1000);

    return () => {
      clearInterval(cpuInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="status-bar" style={{ fontSize: "14px" }}>
      <p className="status-bar-field">Status: System Ready</p>
      <p className="status-bar-field" style={{ minWidth: "120px" }}>
        CPU Usage: {cpuUsage}%
      </p>
      <p className="status-bar-field">Location: Montreal, QC</p>
      <p
        className="status-bar-field"
        style={{ textAlign: "right", fontWeight: "bold" }}
      >
        {time}
      </p>
    </div>
  );
}
