function App() {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="w-[650px]  flex bg-white gap-5">
          <div>
            <img className="h-[465px]" src="/images/image-product-desktop.jpg" alt="" />
          </div>

          <div className="w-[350px]">
           <p className="tracking-widest text-gray-500 mt-4">PERFUME</p> 
           <h1 className="text-5xl font-bold font-serif mt-5">Gabriells</h1>
           <h1 className="text-5xl font-bold font-serif">Essence Eau</h1>
           <h1 className="text-5xl font-bold font-serif">De Parfum</h1>
           <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vero beatae odio? Distinctio aliquid sed, ratione, iste voluptatum officiis .</p>
           <div className="mt-5 ">
            <span className="text-3xl text-[#4E7E6C] font-bold font-mono">$145.00</span>
            <span className="line-through ml-4"> $180</span>
           </div>
           <button className="flex mt-5 items-center bg-[#4E7E6C] gap-4 px-[90px] rounded py-2 "><img src="/images/icon-cart.svg" alt="" /> <span className="text-white">Add to Cart</span></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
