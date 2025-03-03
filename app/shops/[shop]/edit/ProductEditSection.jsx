import ItemCard from "../../../components/ItemCard"
import styles from "./ProductEditSection.module.css"
import NewItemCard from "./NewItemCard"

export default async function ProductEditSection({items}) {    
    return (
        <div className={styles.wrapper}>
        <h3>Your Products</h3>
        <div className={styles.products}>
            <NewItemCard />
            {items?.map(item => (
                <ItemCard item={item} edit={true} delete={true}/>
            ))}
        </div>
        </div>
    )
}