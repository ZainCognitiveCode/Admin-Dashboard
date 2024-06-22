import styles from "./add.module.css"


function  AddProductPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Title" name="title"  required/>
        <select name="category" id="cat">
          <option value="General">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="Price" name="Price" />
        <input type="number" placeholder="Stock" name="Stock" />
        <input type="number" placeholder="Color" name="Color" />
        <input type="number" placeholder="Size" name="Size" />
        <textarea name="desc" id="desc"  rows="16" placeholder="Description" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage