export default function AboutContent({ title }) {
  return (
    <div className="flex gap-5 items-center w-[800px] min-[2500px]:w-[1000px] max-[1919px]:w-[680px] max-[1300px]:w-[630px] max-[1100px]:w-[570px] max-[930px]:w-[391px] max-[430px]:w-[343px] max-[361px]:w-[320px] bg-white rounded-[10px] px-5 pt-[30px] pb-[23px] shadow-lg">
      <img
        src="public/svg/check-about.svg"
        alt=""
        className="min-[2500px]:h-[34px] w-auto self-baseline"
      />
      <div className="flex flex-col gap-3 max-[930px]:gap-0">
        <h6 className="uppercase text-2xl min-[2500px]:text-4xl max-[1919px]:text-lg max-[430px]:text-xl font-semibold text-[#232233]">
          {title}
        </h6>
        <p className="text-lg min-[2500px]:text-2xl max-[1919px]:text-[16px] text-[#6C6C72] max-[850px]:hidden">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero at iure
          accusamus cupiditate quod illum nulla corrupti. Vitae, ab
          exercitationem eum autem vero commodi, neque, quos similique quam sint
          provident!
        </p>
        <p className="text-lg min-[2500px]:text-2xl max-[1919px]:text-[16px] text-[#6C6C72] min-[850px]:hidden">
          Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}
