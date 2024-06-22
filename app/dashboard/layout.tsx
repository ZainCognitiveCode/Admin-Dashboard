import Footer from "../ui/dashboard/footer/footer"
import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import styles from "@/app/ui/dashboard/dashboard.module.css"

const Layout= ({children,}: {children: React.ReactNode})=>{
    return(
        <div className={styles.container}>
        <div className={styles.menu}>
            {/* Menu matlab sidebar left wala uski styling */}
            <Sidebar/>
        </div>
        <div className={styles.content}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
        </div>
    )
}

export default Layout 