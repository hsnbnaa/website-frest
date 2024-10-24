export default function Footer() {
  return (
    <section className="py-[120px] px-[182px] max-[1700px]:px-[122px] max-[1350px]:px-[52px] bg-[#232333] text-white flex justify-between">
      <div className="flex gap-[65px]">
        <div className="flex flex-col justify-between max-w-[400px] max-h-[200px]">
          <div>
            <h4 className="text-[36px] font-bold uppercase">Logo</h4>
            <p className="text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              fuga, laudantium, officia odit ullam ipsam omnis at inventore rem
              corrupti deleniti nihil delectus.{" "}
            </p>
          </div>
          <div className="flex mt-[40px]">
            <img src="/svg/fb-light.svg" alt="" className="pr-[35px]" />
            <img
              src="/svg/ig-light.svg"
              alt=""
              className="border-x border-white px-[35px]"
            />
            <img
              src="/svg/tw-light.svg"
              alt=""
              className="px-[35px] border-r border-white"
            />
            <img src="/svg/yt-light.svg" alt="" className="pl-[35px]" />
          </div>
        </div>
        <div className=" flex flex-col gap-3 max-w-[400px] max-h-[200px]">
          <h5 className="text-[30px]">Quick Link</h5>
          <ul className="text-[20px] flex flex-col gap-6">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Products</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[400px] max-h-[200px] flex flex-col gap-3">
        <h5 className="text-[30px] ">New Letter</h5>
        <p className="text-[22px]">
          Subscribe our newsletter to get our latest update & news
        </p>
        <div className="flex bg-white rounded-md mt-12">
          <input
            type="text"
            className="w-full h-[60px] px-3 rounded-l-lg outline-none text-black bg-transparent"
            placeholder="Enter your email"
          />
          <button className="bg-[#5956e9] py-[11px] px-[14px] rounded-lg m-1">
            <img
              src="public/svg/submit-button.svg"
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
