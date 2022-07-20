import PostItemForm from "../components/PostItemForm";

const Offer = () => {

 // PLACE HOLDER FOR PROIFLE HASNT OFFERED ANYTHING YET. OR SIGN IN SECTION TO OFFER SOMETHING -- WHEN SIGNED IN SHOWS YOUR OFFERED ITEMS SIDE BY SIDE WITH FORM TO SUBMIT ITEMS

 // LAYOUT SHOULD HAVE ONE HALF THE LIST OF POSTED ITEMS -- OTHER SIDE FORM TO ADD MORE. IF NOT SIGN IN TO PROFILE

  return (
    <section className="flex items-center justify-center flex-col">
      <h1 className="text-center mb-20 text-5xl">What do you have to offer</h1>
      <PostItemForm />
    </section>
  );
};

export default Offer;
