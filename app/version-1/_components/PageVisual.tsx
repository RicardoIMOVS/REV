type PageVisualProps = {
  caption: string;
  className?: string;
  label: string;
};

export function PageVisual({
  caption,
  className = "",
  label,
}: PageVisualProps) {
  return (
    <figure
      className={`relative overflow-hidden border border-[#c4c7c7]/35 bg-white ${className}`}
    >
      <img
        alt={label}
        className="aspect-[4/5] h-full w-full object-cover"
        src="/placeholder.svg"
      />
      <figcaption className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-black/85 p-5 text-white backdrop-blur">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
          {label}
        </span>
        <span className="mt-2 block text-sm font-semibold uppercase leading-5 tracking-widest">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}
