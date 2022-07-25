import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AccountDashboard = () => {

  const navigate = useNavigate()

  const { user, logOutUser } = UserAuth();
  console.log(user);

  const handleLogOutUser = async () => {
    await logOutUser()
    navigate('/account-gateway')
  }

  return (
    <section className=" grid grid-cols-7 grid-rows-6 gap-3 pt-5">
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
      <div className="row-start-1 row-end-5 min-h-[350px] col-start-2 col-end-5 bg-slate-400 rounded-sm">
        <p className="w-full text-2xl text-center my-2">Asked</p>
      </div>
      <div className="row-start-1 row-end-5 min-h-[350px] col-start-5 col-end-8 bg-slate-400 rounded-sm">
        <p className="w-full text-2xl text-center my-2">Offered</p>
      </div>
      <div className="row-start-5 min-h-[250px] row-end-7  col-start-2 col-span-6 bg-slate-400 rounded-sm">
        <p className="w-full text-2xl text-center my-2">Borrowed</p>
      </div>
    </section>
  );
};

export default AccountDashboard;
