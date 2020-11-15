import React from "react";
import styles from "./DropdownPanel.module.css";
import DropdownLink from "../DrowndownLink/DropdownLink"

const DropdownPanel = ({ navItems, sectionTitle }) => {

 const content = navItems.map((item) => {
    return (
      <DropdownLink title={item.title} tagline={item.tagline} icon={item.icon} onClick={item.onClick}  />
    )
  })
  
  return (
    <div className={styles.dropdown}> 
    <h2 className={styles.sectionTitle}>{sectionTitle ? sectionTitle : null}</h2>
    <div className={styles.dynamic}>
      {content}
    </div>
    </div>
  )
}

export default DropdownPanel


// import React from "react";
// import styles from "./DropdownPanel.module.css";
// import DropdownLink from "../DrowndownLink/DropdownLink"

// const DropdownPanel = ({ navItems, sectionTitle }) => {

//  const content = navItems.map((item) => {
//     return (
//       <DropdownLink title={item.title} tagline={item.tagline} icon={item.icon} onClick={item.onClick}  />
//     )
//   })
  
//   return (
//     <div className={styles.dropdown}> 
//     <h2 className={styles.sectionTitle}>{sectionTitle ? sectionTitle : null}</h2>
//     <div className={styles.dynamic}>
//       {content}
//     </div>
//     </div>
//   )
// }

// export default DropdownPanel