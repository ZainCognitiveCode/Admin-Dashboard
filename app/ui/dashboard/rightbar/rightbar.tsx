import styles from "./right.module.css"
import Image from "next/image"
import { MdPlayCircleFilled } from "react-icons/md"

export default function RightBar(){
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin Dashboard</h3>
                    <span className={styles.subtitle}>Take 4 minutes to Learn</span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  quo amet debitis qui quia tenetur, asperiores 
                        iusto molestiae. Deleniti facere commodi qui quisquam veniam animi eligendi laborum.</p>
                        <button className={styles.button}>
                            <MdPlayCircleFilled/> 
                            Watch
                        </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.texts}>
                <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin Dashboard</h3>
                    <span className={styles.subtitle}>Take 4 minutes to Learn</span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  quo amet debitis qui quia tenetur, asperiores 
                        iusto molestiae. Deleniti facere commodi qui quisquam veniam animi eligendi laborum.</p>
                        <button className={styles.button}>
                            <MdPlayCircleFilled/> 
                            Watch
                        </button>
                </div>
            </div>
        </div>
    )
}