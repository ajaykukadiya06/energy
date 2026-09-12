export function AerisLogo({ className, title = "AERIS logo" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <circle cx="29" cy="13" r="7" fill="#3b9b83" />
      <circle cx="15" cy="27" r="7" fill="#5cad89" />
      <circle cx="28" cy="35" r="7" fill="#82c49b" />
    </svg>
  );
}
