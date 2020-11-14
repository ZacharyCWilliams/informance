import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from "./TopSearchBar.module.css";

const TopSearchBar = () => {

  const [searchInput, setSearchInput] = useState("")
  const [ focus, setFocus ] = useState(false)

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <form className={styles.container}>
      <span className={focus ? styles.focused : styles.normal }>
        <SearchIcon className={styles.icon} />
      </span>
      <input
        className={styles.searchInput}
        type="text"
        placeholder={`Search Informance`}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </form>
  )
}

export default TopSearchBar