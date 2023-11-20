import React from 'react';
import "./SidebarOption.css"

function SidebarOption({Icon, title, isSelected,number, onItemClick}) {
  return (
    <div className={`sidebarOption ${isSelected ? 'sidebarOption--active' : ''}`} onClick={() => onItemClick(number)}>

        <Icon />
        <h3>{title}</h3>
    </div>
  )
}

export default SidebarOption