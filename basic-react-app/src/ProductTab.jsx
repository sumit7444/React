import Product from "./Product.jsx";
function ProductTab(){
    let option=["hi-tech","durable","fast"];
    return (
    <>
    <Product title="Logitech MX master" id={0}/>
    <Product title="Apple  pencil(2nd gen)"id={1}/>
    <Product title="Zebronics Zeb-transformer"id={2}/>
     <Product title="Petronics Toad 23"id={3}/>
  
    </>
    );
}

export default ProductTab;