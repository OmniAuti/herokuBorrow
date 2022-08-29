const Loading = ({background, outerBackground, fontColor}) => {
  return (
    <div className="w-full h-full py-5 flex px-5 items-center justify-center">
      <div className={`${outerBackground} h-[350px] w-[350px]  rounded-full flex items-center justify-center relative overflow-hidden`}>
        <div className={`${background} rounded-full w-[340px] h-[340px]`}></div>
        <div className={`${background} h-full w-24 absolute z-0 animate-spin`}></div>
        <h2 className={`${fontColor} absolute text-2xl`}>Loading . . .</h2>
      </div>
    </div>
  );
};

export default Loading;
