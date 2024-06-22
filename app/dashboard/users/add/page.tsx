import styles from "./addUser.module.css"


function  AddUserPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Username" name="Username"  required/>
        <input type="email" placeholder="Email" name="Email"  required/>
        <input type="password" placeholder="Password" name="Password"  required/>
        <input type="number" placeholder="Phone" name="Phone"  />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={false} selected>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea name="address" id="address"  rows="16" placeholder="Address" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage