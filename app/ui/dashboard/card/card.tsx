import { MdSupervisedUserCircle } from "react-icons/md"
import styles from "./card.module.css"

export default function Card(){
    return(
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
                <span className={styles.title}>Total Users</span>
                <span className={styles.number}>10.273</span>
                <span className={styles.detail}>
                <span className={styles.positive}>12%</span> More than Previous Week 
                </span>
            </div>
            
            
        </div>
    )
}