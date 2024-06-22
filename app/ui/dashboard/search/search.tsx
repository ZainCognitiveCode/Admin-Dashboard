import { MdSearch } from "react-icons/md"
import styles from "./search.module.css"

import React from 'react'

function Search({placeholder}:any) {
  return (
    <div className={styles.container}>
        <MdSearch/>
        <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  )
}

export default Search