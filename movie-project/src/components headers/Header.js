import './Header.css'
import logo from ''
import ProfileIcon from ''
import basketIcon from ''
import searchIcon from ''
import { useEffect, useState } from 'react'
import {getDateFromBackend} from ''



function Header () {
    const[searchTexst, setSearTexst] = useState();
    const[data. setData] = useState ([]);
    const[selectedFilm, setSelectedFilm] = useEffect ([]);

    useEffect(() => {
    if (searchTexst) {
        getDateFromBackend (searchTexst). then (res => {
         if (res.Response === 'True'){
            serDate (res.Search)
         }
        })
    }
} [searchTexst])
    return (
    
        <div className= "header_block"> 
        <div className='header_logo_block'>
            <img alt='' src className={logo} 'header_logo_icon'>

        </div>
           <div className='header_searchIcons_block'></div>
           <div className='header_search'>    
            <input onChange={(text)} => setSearTexst (text.target.value) className='header_search_input' placeholder='Search by the movie name'>
                <div className='header_search_dropdown'>
                    {
                        data.length ? data.slice(0, 6).map( el => {
                            return (
                                <p className='search_options'> onClick={()=>{
                                    setSelectedFilm(el)
                                setData ([])
                                setSearchTexst ('')
                                }}el.Title}</p>
                            )
                        }) : <p className='searsh_options'> No results</p>
                    }
                </div>
        </div>
        
            <div>
                <div className='header_icon'>
                    <img alt className={basketIcon}'header_icons header_basket_logo'>
                        <div className='header_icon'>
                        <img alt className={ProfileIcon}'header_icons header_profile_logo'></img>
                        </div>
                </div>
            </div>
        </div>
    )} 



export default Header;