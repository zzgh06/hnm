import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

const Navbar = ({authenticate, setAuthenticate, showSideBar, setShowSideBar}) => {
  const isMediumScreen = useMediaQuery({ maxWidth: 991 });
  const auth = useSelector(state => state.auth.authenticate)
  const search = (event) => {
    if (event.key === 'Enter') {
      let keyword = event.target.value
      navigate(`/?q=${keyword}`) // 검색키워드에 맞춰 페이지 이동
    }
  }
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }
  const goToHome = () => {
    navigate('/')
  }
  const logout = () => {
    setAuthenticate(false)
  }
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  }

  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"];
  return (
    <nav className='navbar-container'>
      <div className='login-button'>
        <FontAwesomeIcon icon={faUser} />
        <div onClick={()=>{goToLogin()}} style={{marginLeft : '10px'}}>
          {auth === true ? '로그아웃' : '로그인'}
        </div>
      </div>
      <div className='nav-section' onClick={()=>{goToHome()}}>
        <img width={100} src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png' alt=''/>
      </div>
      <div className='menu-area'>
        {isMediumScreen ? (
          <div className="hamburger-menu" onClick={()=> {toggleSideBar()}}>☰</div>
          ) : (
            <>
              <ul className='menu-list'>
                {menuList.map((menu, index)=><li key={index}>{menu}</li>)}
              </ul>
              <div className='search-box'>
                <FontAwesomeIcon icon={faSearch} className='search-icon' />
                <input type='text' placeholder='제품 검색' onKeyDown={(event) => search(event)} />
              </div>
            </>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar