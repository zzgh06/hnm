import React from 'react'
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SlideMenu = ({showSideBar, setShowSideBar}) => {
  const menuList = ["Women", "Men", "Baby", "kids", "H&M HOME", "Sport", "Sale", "지속가능성"];
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar)
  }
  return (
    <div>
      <div className={`${showSideBar ? 'slide-menu show-sidebar' : 'slide-menu'}`}>
        <FontAwesomeIcon onClick={()=>{toggleSideBar()}} icon={faX} style={{marginBottom: '15px'}} />
        <ul>
          {menuList.map((menu, index)=><li key={index}><img src='https://image.hm.com/content/dam/abtestdepartmentimages/Ladies1.png?imwidth=150' alt='' />{menu}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default SlideMenu