import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { LanguageProvider } from './component/LanguageContext'; //MenuPage에서 언어 변경시 적용을 위한 import

//페이지 import
import MainHome from './component/page/MainHome';
import MenuPage from './component/page/MenuPage';
import PopupConcept from './component/page/PopupConcept';
import LocationInfo from './component/page/LocationInfo';
import VisitReservation from './component/page/VisitReservation';
import BrandInfo from './component/page/BrandInfo';
import NewSeasonItem from './component/page/NewSeasonItem';

//css import
import './App.css';

function App(props) {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <MenuPage />
                <Routes>
                    <Route index element={<MainHome />} />
                    <Route path="post/1" element={<PopupConcept />} />
                    <Route path="post/2" element={<LocationInfo />} />
                    <Route path="post/3" element={<VisitReservation />} />
                    <Route path="post/4" element={<BrandInfo />} />
                    <Route path="post/5" element={<NewSeasonItem />} />

                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    );
}

export default App;