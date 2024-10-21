export default function AboutContent({ title }) {
  return (
    <div className="flex gap-5 items-start w-[800px] bg-white rounded-[10px] px-5 pt-[30px] pb-[23px] shadow-lg">
      <img src="public/svg/check-about.svg" alt="" />
      <div className="flex flex-col gap-3">
        <h6 className="uppercase text-2xl font-semibold text-[#232233]">
          {title}
        </h6>
        <p className="text-lg text-[#6C6C72]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero at iure
          accusamus cupiditate quod illum nulla corrupti. Vitae, ab
          exercitationem eum autem vero commodi, neque, quos similique quam sint
          provident!
        </p>
      </div>
    </div>
  );
}
