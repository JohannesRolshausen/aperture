type Props = {
  disc: string
  light: string
}

export default function Logo({ disc, light }: Props) {
  return (
    <a className="logo" href="#top">
      <svg aria-hidden="true" width="30" height="30" viewBox="-200 -200 400 400">
        <circle r="200" fill={disc} />
        <polygon
          points="110,0 55,95.26 -55,95.26 -110,0 -55,-95.26 55,-95.26"
          fill={light}
        />
      </svg>
      Aperture
    </a>
  )
}
