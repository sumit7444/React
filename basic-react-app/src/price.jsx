export default function Price({oldPrice,newPrice}){
    return(
        <div>
            <span>{oldPrice}</span>
            &nbsp; &nbsp;
            <span>{newPrice}</span>
        </div>
    );
}