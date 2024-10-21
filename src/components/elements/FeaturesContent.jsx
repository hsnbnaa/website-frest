export default function FeaturesContent({ text, items }) {
  return (
    <div className={`flex flex-col gap-5 ${items} w-[400px]`}>
      <img src="public/svg/comment-icon.svg" className="w-[50px] h-[50px] " />
      <h5 className="uppercase text-[25px] font-semibold text-white">
        Full Free Chat
      </h5>
      <p className={`text-[20px] text-white ${text}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        saepe dolorum recusandae illo provident earum dolor voluptatum quo
      </p>
    </div>
  );
}
