import { all } from "axios";
import { useState } from "react";
import "./productStore.css"
import laptop from "./assets/laptop.avif";
import shoes from "./assets/shoes.avif";
import sunscreen from "./assets/sunscreen.avif";
import perfume from "./assets/perfume.avif";
import heels from "./assets/heels.avif";
import headphones from "./assets/headphones.avif";
import lipstick from "./assets/lipstick.webp";
import sandals from "./assets/sandals.avif";



export default function ProductStore() {
  const [products, setProducts] = useState([
    { id: 1, name: "laptop", category: "electronics", price: 35000,image: laptop },
    { id: 2, name: "shoes", category: "footwear", price: 2500 ,image: shoes},
    { id: 3, name: "sunscreen", category: "cosmetics", price: 1000 ,image: sunscreen},
    { id: 4, name: "perfume", category: "cosmetics", price: 900 ,image: perfume},
    { id: 5, name: "heels", category: "footwear", price: 4000 ,image: heels},
    { id: 6, name: "headphones", category: "electronics", price: 7000,image: headphones },
    { id: 7, name: "lipstick", category: "cosmetics", price: 500 ,image: lipstick},
    { id: 8, name: "sandals", category: "footwear", price: 2000,image: sandals },
  ]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(false);

  const filteredProducts = products.filter((product) => {

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category === "all" || product.category === category;

    const matchPrice = price ? product.price > 3000 : true;

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <>
      <header><h1 className="heading">Online Shopping Store</h1> 
             <input className="searchProduct"
          type="text"
          placeholder="Search Products "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="catgory" onChange={(e) => setCategory(e.target.value)}>
          <option value={"all"}>ALL</option>
          <option value={"clothing"}>CLOTHING</option>
          <option value={"electronics"}>ELECTRONICS</option>
          <option value={"footwear"}>FOOTWEAR</option>
          <option value={"cosmetics"}>COSMETICS</option>
        </select>

        <label>
          Product Price above ₹3000
          <input className="priceFilter" type="checkbox" onChange={(e) => setPrice(e.target.checked)} />
        </label>
      </header>
      <section>
   

    {filteredProducts.length>0?
        (
            filteredProducts.map((product) => (
          <div key={product.id}>
            <img src={product.image}/>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <h3>{product.category}</h3>
            <button>Add to Cart</button>
          </div>
        ))
    ):(<h1>NO PRODUCTS MATCHED</h1>)
        }
      </section>
    </>
  );
}
