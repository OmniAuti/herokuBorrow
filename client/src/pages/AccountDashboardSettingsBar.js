const AccountDashboardSettingsBar = ({handleLogOutUser}) => {
    return (
        <div className="flex flex-col items-center col-start-1 col-end-2 row-start-1 row-end-7">
        <div className="w-full mt-5 flex justify-center relative overflow-hidden group">
          <button
            onClick={() => console.log("ok")}
            className=" w-full h-full flex justify-center items-center flex-col"
          >
            <img
              className="w-[50px] mt-5 mb-7 group-hover:-rotate-180 group-hover:cursor-pointer transition-transform duration-1000"
              src="./imgs/settings.svg"
              alt="Settings Icon"
            />
            <p className="absolute bottom-0 -left-[250px] group-hover:left-[50%] group-hover:-translate-x-[50%] transition-all duration-1000">
              Settings
            </p>
          </button>
        </div>
        <div className="w-full mt-5 flex justify-center relative overflow-hidden group">
          <button
            onClick={() => console.log("ok")}
            className=" w-full h-full flex justify-center items-center flex-col"
          >
            <img
              className="w-[50px] mt-5 mb-7 group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-1000"
              src="./imgs/chat.svg"
              alt="Messages Icon"
            />
            <p className="absolute -bottom-[100px] right-0 group-hover:bottom-0 transition-all duration-500">
              Messages
            </p>
          </button>
        </div>
        <div className="w-full flex-col items-center mt-5 flex justify-center relative overflow-hidden group">
          <button
            onClick={() => handleLogOutUser()}
            className=" w-full h-full flex justify-center items-center flex-col"
          >
            <img
              className="w-[50px] mt-5 group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-1000"
              src="./imgs/exit-door.svg"
              alt="Messages Icon"
            />
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              Log Out
            </p>
          </button>
        </div>
      </div>

    )
}

export default AccountDashboardSettingsBar;