import AskedForItems from "../components/AskedForItems";

const Asked = ({ modalDispatch, refreshAfterEdit }) => {
  return (
    <section className="w-full flex flex-col">
      <h1 className="text-5xl  text-center">Asked For Supplies</h1>
      <AskedForItems modalDispatch={modalDispatch} />
    </section>
  );
};

export default Asked;
