export default function Menu_item() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/75 transition-all">
      <div className="text-center ">
        <img
          src={"/pizza1.png"}
          className=" max-h-auto max-h-28 block mx-auto"
          alt=""
        />
      </div>
      <h4 className=" font-semibold text-xl text-center my-3  ">
        Italian Pizza
      </h4>
      <p className="text-gray-600 text-sm w-72 h-40">
        Italian Pizza, the Italian take on thin, crispy crust, minimalist yet
        high-quality toppings, and a focus on simple, balanced flavors. A
        traditional Italian pizza would just resort to some fresh basil leaves
        which, together with the red tomato sauce and the white Mozarella
        <br /> di Bufala cheese complete the tri-colour of the Italian flag
      </p>
      <button className="bg-blue-500 mt-3 text-white rounded-full px-8 py-2">
        Add to cart Rs.450
      </button>
    </div>
  );
}
