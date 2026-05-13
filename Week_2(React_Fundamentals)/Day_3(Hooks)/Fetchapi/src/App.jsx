import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    setError("");
    try{
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      const data = await res.json();
      if (!data.products) {
        throw new Error("No products returned from API.");
      }
      setProducts(data.products);
    } catch (e){
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
      getProducts();
  },[])
   
  if(error) return <p style={{color:'red'}}>Error: {error}</p>
  return (
    <>
      {
        loading ? 
            <p>Loading...</p>
            :
            products.map((product)=>{
              return( 
                  <div key={product.id} style={{padding:'10px', backgroundColor: 'gray', margin:'10px'}}>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                  </div>
              )
            })
      }
    </>
  )
}

export default App
