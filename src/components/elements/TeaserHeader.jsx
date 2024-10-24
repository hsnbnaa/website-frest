export default function TeaserHeader() {
  return (
    <div className="mt-10 bg-bgTeaser bg-cover bg-no-repeat pt-[120px] max-[430px]:pt-[60px] px-[182px] max-[1426px]:px-[112px] max-[1300px]:px-[82px] max-[1100px]:px-[50px] max-[430px]:px-[20px] h-[500px] max-[430px]:h-[357px] flex flex-col items-center">
      <div className="flex flex-col gap-5 items-center w-[60%] max-[1100px]:w-[80%] max-[430px]:w-[80%]">
        <h4 className="text-[36px] max-[430px]:text-[25px] font-bold max-[430px]:font-semibold text-white uppercase text-center">
          How to Use the App Perfectly
        </h4>
        <p className="text-[20px] text-white text-center max-[850px]:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          excepturi commodi ipsa dolor. Expedita quo vel esse iure explicabo,
          ducimus, asperiores corrupti nam, veritatis in aperiam placeat non id
          accusamus.
        </p>
        <p className="text-[16px] text-white text-center min-[850px]:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae.
        </p>
      </div>
    </div>
  );
}
