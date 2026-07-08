import logo from "@/assets/flomir-logo.jpeg";

export function Logo({
  className = "h-10 w-10",
}: {
  className?: string;
}) {
  return (

    <div
      className={`
      ${className}

      overflow-hidden
      rounded-full

      bg-black

      border
      border-gold/30

      shadow-[0_8px_25px_rgba(198,164,93,.35)]

      select-none
      `}
    >

      <img

        src={logo}

        alt="Flomir Events"

        className="
        h-full
        w-full

        object-cover

        scale-110
        "

        draggable={false}

        onError={(e) => {

          (e.currentTarget as HTMLImageElement).style.visibility =
            "hidden";

        }}

      />

    </div>

  );
}