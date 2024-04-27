import { useEffect, useState } from "react";
import CoffeeCard from "./components/CoffeeCard";
import { coffeeList } from "./data";

function App() {
  const [filter, setfilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProducts(coffeeList);
    } else if (filter === "available") {
      setFilteredProducts(coffeeList.filter((item) => item.available));
    } else if (filter === "popular") {
      setFilteredProducts(coffeeList.filter((item) => item.popular));
    }
  }, [filter]);
  return (
    <>
      <div
        className={`w-full bg-[url('./design/bg-cafe.jpg')] bg-no-repeat bg-cover bg-center h-[265px] md:w-[300px]`}
      ></div>
      <div className={`bg-n-2 rounded-xl container w-[70%] -mt-[120px] mb-[120px] md:-mt-[134px] pt-[85px] relative`}>
        <div className="w-[90%] mx-auto ">
          
          <div className=" bg-[url('./design/vector.svg')] bg-no-repeat bg-right-top pb-4">
          <h1 className="text-center text-heading mb-4 tracking-wider">Our Collection</h1>
          <p className="text-body text-n-3 max-w-[500px] mx-auto text-center">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          </div>

          <div className="flex gap-4 justify-center mb-9 items-center">
            <span className={`button ${(filter=== 'all') && 'active'} `} onClick={() => setfilter("all")}>All Products</span>
            <span className={`button ${(filter=== 'available') && 'active'} `} onClick={() => setfilter("available")}>Available Now</span>
            <span className={`button ${(filter=== 'popular') && 'active'} `} onClick={() => setfilter("popular")}>Popular</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((item) => (
              <CoffeeCard key={item.id} data={item}></CoffeeCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
