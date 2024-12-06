import Logo from "../../assets/search.svg";
import Mad from "../../assets/mad.svg";
const Topbar = () => {
  return (
    <div className="h-[80px] w-full flex justify-around">
      <div className="logo text-black text-center justify-center items-center flex text-2xl font-semibold">
        Logo
      </div>
      <div className="w-[620px] h-[80px] bg-white rounded-[10px] justify-between flex p-4">
        <div className="flex">
          <div className="p-2 flex justify-center items-center">
            <img src={Logo} alt="" className="w-20px h-20px" />
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Search here"
              className="font-semibold outline-none text-black"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={Mad} className="w-[26px] h-[26px] text-black" alt="" />
          <span className="text-black font-semibold text-sm">Filters</span>
        </div>
      </div>
      <div className="w-[260px]  justify-center items-center bg-[#88C2BB]  h-[80px] text-white rounded-[10px] flex p-4">
        <div>Become a Member</div>
      </div>
    </div>
  );
};

export default Topbar;
