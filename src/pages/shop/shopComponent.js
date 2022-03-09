import React from 'react';
import { Routes, Route, matchPath } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overviewComponent'

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Routes>
                <Route path={`${match.path}`} element={<CollectionsOverview />} />
            </Routes>
        </div>
    );
}

export default ShopPage;