import styles from "./transactions.module.css"
import Image from "next/image"

export default function Transactions(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/avatar.jpg" alt="" 
                            height={40} width={40} className={styles.userImage} />
                             Zain Ul Abideen
                            </div>
                           
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>06/05/2024</td>
                        <td>$3.436</td>
                    </tr>
                    <tr>
                        <td>
                        <div className={styles.user}>
                            <Image src="/avatar.jpg" alt="" 
                            height={40} width={40} className={styles.userImage} />
                             Bilal Hassan
                             </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>04/05/2024</td>
                        <td>$10.46</td>
                    </tr>
                    <tr>
                        <td>
                        <div className={styles.user}>
                            <Image src="/avatar.jpg" alt="" 
                            height={40} width={40} className={styles.userImage} />
                             Usman Bro
                             </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        </td>
                        <td>05/05/2024</td>
                        <td>$3.536</td>
                    </tr>
                    <tr>
                        <td>
                        <div className={styles.user}>
                            <Image src="/avatar.jpg" alt="" 
                            height={40} width={40} className={styles.userImage} />
                             Abdullah Sultan
                             </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>05/05/2024</td>
                        <td>$3.536</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}