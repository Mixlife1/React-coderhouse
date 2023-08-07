import './ItemList.css'
import Items from '../Items/Items'


const ItemList = ({products }) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Items key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList;