import type React from 'react';
import { type ReactElement, cloneElement, useEffect, useRef } from 'react';

interface DraggableProps {
  children: ReactElement;
}

export function Draggable({ children }: DraggableProps): ReactElement {
  const positionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const relRef = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef<boolean>(false);
  const elementRef = useRef<HTMLElement | null>(null);

  const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    if (!elementRef.current) return;

    draggingRef.current = true;
    relRef.current = {
      x: e.pageX - positionRef.current.x,
      y: e.pageY - positionRef.current.y,
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!draggingRef.current || !relRef.current || !elementRef.current) {
      return;
    }
    const newX = e.pageX - relRef.current.x;
    const newY = e.pageY - relRef.current.y;

    requestAnimationFrame(() => {
      if (elementRef.current) {
        elementRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
        positionRef.current = { x: newX, y: newY };
      }
    });
    e.stopPropagation();
  };

  const onMouseUp = () => {
    if (!draggingRef.current) return;

    draggingRef.current = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  });

  const draggableChild = cloneElement(children, {
    onMouseDown,
    ref: (node: HTMLElement) => {
      elementRef.current = node;
    },
    style: {
      ...children.props.style,
    },
  });

  return draggableChild;
}
