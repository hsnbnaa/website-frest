export default function SectionHeader({
  title,
  description,
  color,
  descColor,
}) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h4
        className={`text-[36px] max-[1919px]:text-[28px] font-bold ${color} uppercase`}
      >
        {title}
      </h4>
      <p
        className={`text-[20px] max-[1919px]:text-[16px] ${descColor} w-[60%] text-center`}
      >
        {description}
      </p>
    </div>
  );
}
