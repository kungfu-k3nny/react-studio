export default function BakeryItem(props) {
    const twoFuncs = () => {
        props.totalPrice(props.price);
        props.totalItems(props.name);
    }
    
    return (
        <div>
            <hstack>
                <div>{props.name}</div>
                <img src={props.image} />
                <div>{props.description}</div>
                <div>{props.price}</div>
                <button onClick={() => twoFuncs()}> Add to cart </button>
            </hstack>
        </div>
    );
}