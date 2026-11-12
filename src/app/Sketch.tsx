// Hand-drawn primitives shared by every page: the wobbly pencil outline and
// the squiggle underline.

import React from "react";

// Three passes of the same outline, each drawn a little differently. At rest
// only the first shows; on hover they cycle ("line boil"), the way a
// hand-animated drawing shimmers between frames.
const RECT_PASSES = [
  "M0.6 1.6 C 30 0.6, 65 2.6, 98.6 1.2 C 99.6 30, 98 68, 99 98.4 C 66 99.6, 32 97.8, 1.2 99 C 0.4 66, 2.2 34, 1.8 0.4",
  "M1 1.2 C 33 2.4, 70 0.4, 99 2 C 98 33, 99.8 70, 98.6 99 C 68 97.8, 30 99.6, 1.6 98.4 C 2.4 70, 0.4 30, 1.2 0.6",
  "M2 1 C 28 1.8, 62 0.2, 98.4 1.6 C 99.4 28, 98.2 64, 99.2 98.8 C 70 99.4, 36 98, 1 99.2 C 1.6 62, 0.6 36, 1.6 1.4",
];

const ROUND_PASSES = [
  "M50 1.5 C 77 1, 99 23, 98.5 50 C 99 77, 77 99, 50 98.5 C 23 99, 1 77, 1.5 50 C 1 23, 23 1.5, 53 2.4",
  "M49 2 C 76 2, 98 24, 98 51 C 98 78, 76 98.5, 49 98 C 22 98.5, 2 76, 2 49 C 2 22, 24 1, 52 1.4",
  "M51 1 C 78 2, 99 25, 98.6 49 C 98 76, 75 99, 50 99 C 24 98, 1.4 75, 1.4 51 C 2 24, 22 2.4, 51 2.2",
];

/** A pencil outline. Position it inside a `relative` parent with `.sketch-host`. */
export function SketchFrame({
  className = "",
  round = false,
}: {
  className?: string;
  round?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`sketch-frame pointer-events-none absolute ${className}`}
    >
      <svg
        focusable="false"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        {(round ? ROUND_PASSES : RECT_PASSES).map((d) => (
          <path key={d} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
    </span>
  );
}

/** A pencil squiggle that draws itself from left to right. */
export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
      className={`squiggle ${className}`}
    >
      <path
        d="M2 5 C 14 1.5, 27 7, 41 4 S 68 1.5, 98 4.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
