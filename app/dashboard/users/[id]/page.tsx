import styles from "./singleUser.module.css"
import Image from "next/image"

function SingleUserPage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/avatar.jpg" alt="" fill  />
            </div> Zain Ul Abideen
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <label >Username</label>
                <input type="text" placeholder="Zain" required/>
                <label >Email</label>
                <input type="email" placeholder="xain@gmail.com" required/>
                <label >Password</label>
                <input type="password" placeholder="*****" required/>
                <label >Phone</label>
                <input type="number" placeholder="1234" required/>
                <label >Address</label>
                <textarea name="address" id="address" cols="30" rows="10" placeholder="Address"></textarea>
                <select name="isAdmin" id="isAdmin">
                    <option value={false} selected>is Admin</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={false} selected>is Active</option>
                    <option value={true} >Yes</option>
                    <option value={false} >No</option>
                </select>
                <button type="submit">Update</button>
            </form>
        </div>

    </div>
  )
}

export default SingleUserPage