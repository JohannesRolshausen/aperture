import { useId } from 'react'

type Props = {
  /** Colour of the blades. */
  disc: string
  /** Colour of the light coming through the opening. */
  light: string
  /** Colour of the fine lines between the blades. */
  line: string
  /** How far the aperture is open. 0.3 is nearly closed, 1.8 is wide open. */
  open?: number
  /** Rotation of the blades in degrees. */
  rotate?: number
  /** Opens and closes continuously. Ignores `open` and `rotate`. */
  animated?: boolean
  /** Accessible name. Without it the graphic is decorative. */
  label?: string
  className?: string
}

// Hexagonal opening with radius 80 around the origin.
const HEXAGON = '80,0 40,69.28 -40,69.28 -80,0 -40,-69.28 40,-69.28'

// Each blade edge runs from one corner of the hexagon along the direction
// of the neighbouring side, far past the outer circle. The clip path cuts
// it off at the rim, so the geometry stays correct at every opening size.
const BLADE_EDGES: [number, number, number, number][] = [
  [80, 0, 1430, 2338],
  [40, 69.28, -1310, 2407],
  [-40, 69.28, -2740, 69.28],
  [-80, 0, -1430, -2338],
  [-40, -69.28, 1310, -2407],
  [40, -69.28, 2740, -69.28],
]

export default function Aperture({
  disc,
  light,
  line,
  open = 1,
  rotate = 0,
  animated = false,
  label,
  className,
}: Props) {
  const clipId = useId()

  return (
    <svg
      className={className}
      viewBox="-200 -200 400 400"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <clipPath id={clipId}>
        <circle r="200" />
      </clipPath>
      <circle r="200" fill={disc} />
      <g clipPath={`url(#${clipId})`}>
        <g
          className={animated ? 'aperture-blades is-animated' : 'aperture-blades'}
          transform={animated ? undefined : `rotate(${rotate}) scale(${open})`}
        >
          <polygon points={HEXAGON} fill={light} />
          <g stroke={line} strokeWidth="2" fill="none">
            {BLADE_EDGES.map(([x1, y1, x2, y2]) => (
              <line
                key={`${x2},${y2}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </g>
        </g>
      </g>
    </svg>
  )
}
