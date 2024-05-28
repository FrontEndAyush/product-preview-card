function App() {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] p-5">
        <div className="lg:w-[650px]  flex bg-white flex-col lg:flex-row gap-5">
          <div>
            <img className="h-[465px] hidden lg:block" src="/images/image-product-desktop.jpg" alt="" />
            <img className=" block lg:hidden" src="/images/image-product-mobile.jpg" alt="" />
          </div>

          <div className="lg:w-[325px] px-5 lg:px-0">
           <p className="tracking-widest text-gray-500 mt-4">PERFUME</p> 
           <h1 className="text-5xl font-bold font-serif mt-5">Gabriells</h1>
           <h1 className="text-5xl font-bold font-serif">Essence Eau</h1>
           <h1 className="text-5xl font-bold font-serif">De Parfum</h1>
           <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vero beatae odio? Distinctio aliquid sed, ratione, iste voluptatum officiis .</p>
           <div className="mt-5 ">
            <span className="text-3xl text-[#4E7E6C] font-bold font-mono">$145.00</span>
            <span className="line-through ml-4"> $180</span>
           </div>
           <button className="flex mt-5 mb-2 hover:bg-[#1A4031] duration-300 transition-all items-center bg-[#4E7E6C] gap-4 px-[98px] rounded py-2 "><img src="/images/icon-cart.svg" alt="" /> <span className="text-white">Add to Cart</span></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
