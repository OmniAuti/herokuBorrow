const AccountSupplyLoading = () => {
  return (
    <div className="flex justify-around bg-white w-full rounded-md py-5 px-2 h-[200px] mx-3 my-1">
      <div className="w-1/2 bg-slate-500 rounded animate-pulse"></div>
      <div className="w-1/2 pl-2 flex flex-col justify-around items-center">
        <div className="w-full h-[25px] rounded bg-slate-500 animate-pulse"></div>
        <div className="w-full h-[25px] rounded bg-slate-500 animate-pulse"></div>
        <div className="w-full h-[25px] rounded bg-slate-500 animate-pulse"></div>
        <div className="w-full h-[25px] rounded bg-slate-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default AccountSupplyLoading;
