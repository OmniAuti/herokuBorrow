const EmptyAskSuppliesPlaceHolder = () => {
    return ( <div className=" mt-10 mx-auto text-center flex items-center justify-around flex-col">
    <div className="empty-supplies-array my-5"></div>

    <h2 className="text-2xl my-5 font-light">
      There appears to be no one asking for supplies at the moment. 
      <br></br>
      Check Back Soon!
    </h2>
  </div>)
}

export default EmptyAskSuppliesPlaceHolder;