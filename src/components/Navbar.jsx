import logo from "../assets/output-onlinepngtools (8).png";

function Navbar() {
  return (
    <div
      className="navbar
 bg-[#1b1d1f] flex gap-2 w-100 justify-between align-top px-4 py-6 text-center"
    >
      <div className="w-[33%]">
        <span
          class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700"
          id="basic-addon1"
        >
          reac
        </span>
        <input
          type="text"
          className="rounded-full w-[13rem] text-lg py-1 bg-[#353535] text-white"
        />
      </div>
      <div className="w-[33%] ">
        <img src={logo} className="w-[75px] m-auto" alt="logo" />
        <h4 className="text-[#908c82] text-xl font-semibold mt-2">
          Things to focus on today.
        </h4>
      </div>
      <div className="w-[33%] ">
        <div className="btn btn-primary rounded ">Create</div>
        <div className="rounded">
          <img src="" alt="Avatar" /> Avatar
        </div>
      </div>
    </div>
  );
}

export default Navbar;
