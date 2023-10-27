
import './Items.css'

function Items(props) {
    const itemName = props.name;
    return (
    <div>
    <p className="Nirma">{itemName}</p>
    {props.children}
    </div>
    );

}

export default Items;