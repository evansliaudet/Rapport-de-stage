export default function Contexte({ font }) {
  return (
    <section className="overflow-hidden">
      <h2 className={`${font.className}`}>Contexte</h2>
      <p className="text-xl">A qui ?</p>
      <svg
        width="1022"
        height="1989"
        viewBox="0 0 1022 1989"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden lg:block"
      >
        <path
          d="M162.981 6.78015C162.981 204.402 265.963 401.984 489.024 401.984C735.125 401.984 966.562 325.59 966.562 601.416C966.562 753.436 1015.96 906.65 1015.96 1052.61C1015.96 1184.18 1011.31 1235.74 900.695 1302.9C613.825 1477.07 311.182 1287.17 311.182 1716.04C311.182 1769.34 292.174 1834.08 258.489 1876.68C185.965 1968.4 76.2635 1961.65 -25.8386 1982.07"
          stroke="#FAC05E"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
}
