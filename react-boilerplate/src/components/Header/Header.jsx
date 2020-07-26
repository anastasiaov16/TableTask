import React from 'react'
import './Header.scss'

const Header = () => {
    return(
        <div className="header-container">
            <div className="header-container__searcher">
                <input 
                className="header-container__searcher__input"
                type="text"
                placeholder="Search..."/>
                <button className="header-container__searcher__search-button">Search</button>
            </div>
            <div className="header-container__addNewItem">
                <button className="header-container__addNewItem__add-button">Add</button>
            </div>
        </div>
    )
}
export default Header;