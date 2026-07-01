import logo from "@/assets/flomir-logo.jpeg";

export function Logo({
  className = "h-10 w-10",
}: {
  className?: string;
}) {
  return (
    <img
      src={logo}
      alt="Flomir Events"
      className={`${className} object-contain select-none`}
      draggable={false}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
      }}
    />
  );
}