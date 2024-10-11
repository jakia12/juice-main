import Link from "next/link";

const GENESISPOOL = () => {
  return (
    <div className="flex  items-center justify-center  gap-16 text-white mt-12 mb-28 2xl:h-[80vh] lg:h-[90vh] h-[90vh]">
      <div className="w-full md:w-[470px] 2xl:w-[24%]">
        <div className="border p-3 2xl:p-8 rounded-[6px] bg-[#0D0E17]">
          <div className="flex items-center gap-2 ">
            <img src="/images/star2.png" className="w-[15px]" alt="" />
            <h3 className="text-[13px] text-[#fff]">
              Genesis Pool <span className="text-[#03F0FF]">$SPX</span>
            </h3>
          </div>
          <div className="mt-[17px]">
            <h3 className="text-white text-[14px] font-[400] mt-[11px] font-DmSans">
              Total Value Contributed
            </h3>
            <h3 className="text-white text-[14px] font-[400] mt-[0px] font-DmSans">
              <span className="text-white text-[26px] font-[700] ">
                {" "}
                11.56 ETH
              </span>{" "}
              ($27,501.87)
            </h3>
          </div>
          <div className="mt-[17px]">
            <h3 className="text-white text-[14px] font-[400] mt-[11px] font-DmSans">
              {" "}
              Your $SPX Earned
            </h3>
            <h3 className="text-white text-[14px] font-[400] mt-[0px] font-DmSans">
              <span className="text-white text-[26px] font-[700]">
                {" "}
                12,589 SPX
              </span>
            </h3>
          </div>
          <div className="mt-[17px]">
            <h3 className="text-white text-[14px] font-[400] mt-[11px] font-DmSans">
              {" "}
              Your Value Contributed
            </h3>
            <h3 className="text-white text-[14px] font-[400] mt-[0px] font-DmSans">
              <span className="text-white text-[26px] font-[700] ">1 ETH </span>{" "}
              ($2,381.52)
            </h3>
          </div>

          <div className="flex items-center gap-5 my-[23px]">
            <img src="/images/image1.png" alt="" className="w-[65px]" />
            <p className="text-white text-[14px]">
              Welcome to the S&P6900, an advanced blockchain cryptography token
              with limitless possibilities and scientific utilization.
            </p>
          </div>

          <h3 className="text-white text-[15px] font-[400] mt-[11px] font-DmSans">
            When this token’s premarket phase is finished,{" "}
            <span className="text-[#FF1DE8]">
              you can withdraw your earned tokens
            </span>{" "}
            with no penalty
            <br />
            <br />
            <span className="text-white text-[12px] font-[400] mt-[11px]">
              Juice takes 1% of genesis pool contributions to help keep the
              lights on.
            </span>
          </h3>

          <div className="text-center mt-[30px]">
            <Link
              href={"/"}
              className="text-center text-white text-[20px] font-[700]"
            >
              [ claim tokens ]
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GENESISPOOL;
