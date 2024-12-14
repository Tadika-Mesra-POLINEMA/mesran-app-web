import React, { useEffect, useRef } from "react";

interface CircularProgressProps {
  capturedCount: number;
  totalCount: number;
  circleSize: number;
  activeColor?: string;
  inactiveColor?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  capturedCount,
  totalCount,
  circleSize,
  activeColor = "orange",
  inactiveColor = "lightgrey",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const radius = circleSize / 2;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const segmentAngle = (2 * Math.PI) / totalCount;
    const strokeWidth = 8;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = "round";

    for (let i = 0; i < totalCount; i++) {
      const startAngle = segmentAngle * i - Math.PI / 2;
      const endAngle = startAngle + segmentAngle - 0.08;

      ctx.strokeStyle = i < capturedCount ? activeColor : inactiveColor;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
      ctx.stroke();
    }
  }, [capturedCount, totalCount, circleSize, activeColor, inactiveColor]);

  return (
    <canvas
      ref={canvasRef}
      width={circleSize + 30}
      height={circleSize + 30}
      style={{ display: "block", margin: "0 auto" }}
    />
  );
};
