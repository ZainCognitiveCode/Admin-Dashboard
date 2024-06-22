import styles from "@/app/ui/dashboard/products/products.module.css"
import Image from "next/image"
import Link from "next/link"
import Search from "@/app/ui/dashboard/search/search"
import Pagination from "@/app/ui/dashboard/pagination/pagination"

export default function ProductsPage(){
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..." />
                <Link href="/dashboard/products/add">
                <button className={styles.addButton}>Add New </button>
                </Link>
            </div> 
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Price</td>
                            <td>Created At</td>
                            <td>Stock</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.user}>
                                    <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.userImage}/>
                                    Iphone 15pro max
                                </div>
                            </td>
                            <td>New Iphone Model</td>
                            <td>11/06/2024</td>
                            <td>$32.50</td>
                            <td>545</td>
                            <td>
                                <div className={styles.buttons}>
                                <Link href="/dashboard/users/test">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Pagination/>
            </div>
        </div>
    )
}