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
        className={` bg-[url('./design/bg-cafe.jpg')] bg-no-repeat bg-cover bg-center h-40`}
      ></div>
      <div className="bg-n-2 rounded-md container">
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>

        <div>
          <span onClick={() => setfilter("all")}>All Products</span>
          <span onClick={() => setfilter("available")}>Available Now</span>
          <span onClick={() => setfilter("popular")}>Popular</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((item) => (
            <CoffeeCard key={item.id} data={item}></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
