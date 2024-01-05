import React from 'react'

const TabButton = ({children, onSelect,isSelected}) => {
  //the children perameter referse to any data inside a tag <>childre</>
  //onSelect is a custom perameter that will be used when a item is selected
  //isSelected is used for the css styling so that when a item is selected it will have a highlighted background
  return (
    <div>
        <li><button className={isSelected ? 'active' : undefined} onClick= {onSelect}>{children}</button></li>    
    </div>
    //The className says if the item is truthy then the className will come 'active' otherwise leave it undefined
    //onclick function will basically say if the item is clicked on it will call the onselect perameter and grab the children in the element
  
  )
}

export default TabButton