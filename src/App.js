/*eslint-disable*/
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
import SlideMenu from './component/SlideMenu';

// 1. 전체 상품 페이지, 로그인, 상품상세페이지(각 페이지 route로 페이지 나누고 디자인)
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다(useEffect로 데이터 받아오기, ProductCard 컴포넌트)
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다(useNavigate() 사용)
// 4. 상품 디테일을 눌렀으나, 로그인이 안되있을 경우 로그인 페이지가 먼저 나온다.(Navigate 를 사용하여 로그인 상태유무에 따라 디테일 페이지 혹은 로그인 페이지로 리다이렉트 )
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 7. 상품을 검색할 수 있다.(인풋에 입력된 검색어에 따라 페이지 이동 / useSearchParams()를 이용해서 쿼리를 통해 페이지 상품만 노출)

// 5. 로그아웃 버튼을 누르면 로그아웃이 된다. (authenticate에 따라 호출되는 함수가 다름)
// 6. 로그아웃이되면 상품 디테일페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다. (authenticate에 따라 ui 변경)

function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <div>
      <Navbar />
      <SlideMenu showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;


