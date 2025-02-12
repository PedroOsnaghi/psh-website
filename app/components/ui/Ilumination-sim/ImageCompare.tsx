"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import type {
  CSSProperties,
  FC,
  HtmlHTMLAttributes,
  ReactElement,
} from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import luz_baja from "@assets/image/luz_baja.webp";
import luz_alta from "@assets/image/luz_alta.webp";

//"absolute inset-1 rounded-full bg-sky-500 not-in-data-dragging:animate-ping"

interface ImageCompareProps {
  onSlide?: (position: number) => void;
}

const BOUNDING_PADDING = 30;

export const ImageCompare = ({ onSlide }: ImageCompareProps) => {
  const [currentPosition, setCurrentPosition] = useState(BOUNDING_PADDING); // Valor inicial
  const [boundsPadding, setBoundsPadding] = useState(BOUNDING_PADDING);
  const [isDragging, setIsDragging] = useState(false);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePositionChange = useCallback(
    (position: number) => {
      setIsDragging((prev) => true);
      setTimeout(() => setIsDragging((prev) => false), 3000);

      if (Math.abs(position - currentPosition) > 0.3) {
        onSlide?.(position);
      }

      setBoundsPadding(position < 50 ? (BOUNDING_PADDING * width) / 100 : 30);
      setCurrentPosition(position);
    },
    [currentPosition]
  );

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setWidth(rect.width);
    }
  }, []);
  return (
    <div ref={containerRef}>
      <ReactCompareSlider
        boundsPadding={boundsPadding}
        onPositionChange={handlePositionChange}
        position={currentPosition}
        className="rounded-md"
        itemOne={<ReactCompareSliderImage src={luz_alta.src} alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src={luz_baja.src} alt="Image two" />}
        handle={
          <ReactCompareSliderHandle
            dragging={isDragging}
            buttonStyle={{
              backdropFilter: "none",
              backgroundColor: "var(--color-sky-500)",
              border: "2xp solid var(--color-sky-500)",
            }}
            linesStyle={{
              width: "5px",
              backgroundColor: "var(--color-sky-500)",
            }}
          ></ReactCompareSliderHandle>
        }
      />
    </div>
  );
};

interface ThisArrowProps {
  /** Whether to flip the arrow direction. */
  flip?: boolean;
}

const ThisArrow: FC<ThisArrowProps> = ({ flip }) => {
  const style: CSSProperties = {
    width: 0,
    height: 0,
    borderTop: "8px solid transparent",
    borderRight: "10px solid",
    borderBottom: "8px solid transparent",
    transform: flip ? "rotate(180deg)" : undefined,
  };

  return <div className="__rcs-handle-arrow" style={style} />;
};

/** Props for `ReactCompareSliderHandle`. */
interface ReactCompareSliderHandleProps {
  /** Optional styles for handle the button. */
  buttonStyle?: CSSProperties;
  /** Optional styles for lines either side of the handle button. */
  linesStyle?: CSSProperties;
  /** Optional styles for the handle root. */
  style?: CSSProperties;

  dragging?: boolean;
}

/** Default `handle`. */
const ReactCompareSliderHandle: FC<
  ReactCompareSliderHandleProps & HtmlHTMLAttributes<HTMLDivElement>
> = ({
  className = "__rcs-handle-root",
  buttonStyle,
  linesStyle,
  dragging = false,
  style,
  ...props
}): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (dragging) {
        ref.current.setAttribute("data-dragging", "");
      } else {
        ref.current.removeAttribute("data-dragging");
      }
    }
  }, [dragging]);

  const _style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
    height: "100%",
    cursor: "ew-resize",
    pointerEvents: "none",
    color: "#fff",
    ...style,
  };

  const _linesStyle: CSSProperties = {
    flexGrow: 1,
    height: "100%",
    width: 4,
    backgroundColor: "currentColor",
    pointerEvents: "auto",
    boxShadow: "0 0 4px rgba(0,0,0,.5)",
    ...linesStyle,
  };

  const _buttonStyle: CSSProperties = {
    display: "grid",
    gridAutoFlow: "column",
    gap: 8,
    placeContent: "center",
    flexShrink: 0,
    width: 56,
    height: 56,
    borderRadius: "50%",
    borderStyle: "solid",
    borderWidth: 2,
    pointerEvents: "auto",
    backdropFilter: "blur(7px)",
    WebkitBackdropFilter: "blur(7px)", // For Safari.
    backgroundColor: "rgba(0, 0, 0, 0.125)",
    boxShadow: "0 0 4px rgba(0,0,0,.35)",
    position: "relative",
    zIndex: 1,

    ...buttonStyle,
  };

  return (
    <div {...props} className={className} style={_style}>
      <div className="__rcs-handle-line" style={_linesStyle} />
      <div className="__rcs-handle-button" style={_buttonStyle} ref={ref}>
        <ThisArrow />
        <ThisArrow flip />
        <div className="absolute inset-1 -z-10 rounded-full bg-sky-500 not-in-data-dragging:animate-ping"></div>
      </div>
      <div className="__rcs-handle-line" style={_linesStyle} />
    </div>
  );
};
