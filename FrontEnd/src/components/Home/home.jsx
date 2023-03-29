
import Header from '../Hearder/Header';
import { Outlet } from 'react-router-dom';
import Carausel from './Carausel/index';
import Product from './../Products/Product';
import News from './news';
import Feedback from './FeedBack/Feedback';

const Home = () => {
    return (
        <>
            <Carausel />
            <News />
            <Product/>
            <Feedback/>
        </>
    );
}

export default Home;