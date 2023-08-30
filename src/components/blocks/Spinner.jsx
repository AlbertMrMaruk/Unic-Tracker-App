import spinner from "../../assets/807.gif";

function Spinner() {
  return (
    <div className="bg-[#1b1d1f] h-max min-h-[100vh] pb-10 shadow-inner py-[20%]">
      <img className="m-auto w-[128px]" src={spinner} />
    </div>
  );
}

export default Spinner;
