export default function FeaturesContent({ text, items }) {
  return (
    <div
      className={`flex flex-col gap-5 ${items} max-[415px]:items-center w-[400px] min-[2500px]:w-[600px] max-[1919px]:w-[300px] max-[415px]:w-[223px]`}
    >
      <img src="public/svg/comment-icon.svg" className="w-[50px] h-[50px] " />
      <h5 className="uppercase text-[25px] min-[2500px]:text-4xl max-[1919px]:text-[20px] max-[415px]:text-xl font-semibold text-white">
        Full Free Chat
      </h5>
      <p
        className={`text-[20px] min-[2500px]:text-2xl max-[1919px]:text-[16px] max-[415px]:text-base text-white ${text} max-[415px]:text-center max-[850px]:hidden`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        saepe dolorum recusandae illo provident earum dolor voluptatum quo
      </p>
      <p
        className={`text-[20px] min-[2500px]:text-2xl max-[1919px]:text-[16px] max-[415px]:text-base text-white ${text} max-[415px]:text-center min-[850px]:hidden`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
