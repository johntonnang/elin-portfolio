'use client';

import { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
}

interface CanvasDrawProps {
  className?: string;
}

const CanvasDraw: React.FC<CanvasDrawProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingPaths, setDrawingPaths] = useState<Point[][]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d') as CanvasRenderingContext2D | null;

    if (canvas && context) {
      const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        redrawStoredDrawings();
      };

      const redrawStoredDrawings = () => {
        drawingPaths.forEach((path) => {
          drawPath(path);
        });
      };

      const drawPath = (path: Point[]) => {
        if (!context) return;

        context.lineWidth = 5;
        context.lineCap = 'round';
        context.strokeStyle = '#FE6232';

        context.beginPath();
        context.moveTo(path[0].x, path[0].y);

        path.forEach((point) => {
          context.lineTo(point.x, point.y);
        });

        context.stroke();
      };

      const getMousePos = (
        event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
      ) => {
        const rect = canvas.getBoundingClientRect();
        const offsetX = 4;
        const offsetY = 4;
        return {
          x: event.clientX - rect.left + offsetX,
          y: event.clientY - rect.top + offsetY,
        };
      };

      const draw = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (!isDrawing || !context) return;

        const { x, y } = getMousePos(event);
        const updatedPaths = [...drawingPaths];
        const lastPath = updatedPaths[updatedPaths.length - 1];
        lastPath.push({ x, y });

        setDrawingPaths(updatedPaths);
        drawPath(lastPath);
      };

      const startDrawing = (
        event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
      ) => {
        if (!context) return;

        setIsDrawing(true);

        const { x, y } = getMousePos(event);
        setDrawingPaths([...drawingPaths, [{ x, y }]]);
      };

      const stopDrawing = () => {
        setIsDrawing(false);
      };

      canvas.addEventListener(
        'mousedown',
        startDrawing as unknown as EventListener
      );
      canvas.addEventListener('mousemove', draw as unknown as EventListener);
      canvas.addEventListener(
        'mouseup',
        stopDrawing as unknown as EventListener
      );
      canvas.addEventListener(
        'mouseout',
        stopDrawing as unknown as EventListener
      );

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        canvas.removeEventListener(
          'mousedown',
          startDrawing as unknown as EventListener
        );
        canvas.removeEventListener(
          'mousemove',
          draw as unknown as EventListener
        );
        canvas.removeEventListener(
          'mouseup',
          stopDrawing as unknown as EventListener
        );
        canvas.removeEventListener(
          'mouseout',
          stopDrawing as unknown as EventListener
        );
      };
    }
  }, [isDrawing, drawingPaths]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute left-0 top-0 h-full w-full ${className} canvas-draw-cursor`}
      style={{ pointerEvents: 'auto' }}
    />
  );
};

export default CanvasDraw;
