import styles from "./singleProduct.module.css"
import Image from "next/image"

function SingleProductPage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/avatar.jpg" alt="" fill  />
            </div> Iphone 15
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <label >Title</label>
                <input type="text" placeholder="new_product" required/>
                <label >Price</label>
                <input type="number" placeholder="$450" required/>
                <label >Stock</label>
                <input type="number" placeholder="21313" required/>
                <label >Color</label>
                <input type="number" placeholder="red" required/>
                <label >Size</label>
                <textarea name="size" id="size" cols="30" rows="10" placeholder="45inch"></textarea>
                <select name="cat" id="cat">
                    <option value={false} selected>Cat</option>
                    <option value={true}>Kitchen</option>
                    <option value={false}>Computer</option>
                </select>
                
                <button type="submit">Update</button>
            </form>
        </div>

    </div>
  )
}

export default SingleProductPage