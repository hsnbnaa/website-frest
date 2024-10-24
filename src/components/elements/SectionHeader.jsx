export default function SectionHeader({
  title,
  description,
  color,
  descColor,
}) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h4
        className={`text-[36px] min-[2500px]:text-5xl max-[1919px]:text-[28px] max-[430px]:text-[25px] font-bold ${color} uppercase text-center`}
      >
        {title}
      </h4>
      <p
        className={`text-[20px] min-[2500px]:text-2xl max-[1919px]:text-[16px] max-[430px]:text-[16px] ${descColor} w-[60%] max-[1100px]:w-[80%] text-center max-[850px]:hidden`}
      >
        {description}
      </p>
      <p
        className={`text-[20px] min-[2500px]:text-2xl max-[1919px]:text-[16px] max-[430px]:text-[16px] ${descColor} w-[60%] max-[430px]:w-[95%] text-center min-[850px]:hidden`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </p>
    </div>
  );
}
