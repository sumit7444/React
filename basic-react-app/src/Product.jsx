import "./Product.css";
import Price from "./price.jsx";
function Product ({title,idx}) {
    let oldprices=["12,495","29,999","1,499","2,455"];
    let newprices=["11,999","27,999","1,299","2,199"];
    let description=["8,000 DPI","intutive surface","designed for i pad","23 inch"];
    return(
        <div className="Product" >
            <h4>{title}</h4>
           <p>{description}[idx]</p>
        <Price oldPrice={oldPrices[idx]}newPrice={newPrices[idx]}/>
        </div>
    );
    }


export default Product;