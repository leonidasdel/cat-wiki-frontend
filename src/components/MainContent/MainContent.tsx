import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {
    ROUTE_HOME,
    ROUTE_BREEDS,
    ROUTE_BREEDS_ITEM
} from '../../constants';

function MainContent() {
    return (
        <div className="MainContent mt-3">
            <Routes>
                <Route path={ROUTE_HOME}>
                    {ROUTE_HOME}
                </Route>
                <Route path={ROUTE_BREEDS}>
                   {ROUTE_BREEDS}
                </Route>
                <Route path={ROUTE_BREEDS_ITEM}>
                   {ROUTE_BREEDS_ITEM}
                </Route>
            </Routes>
        </div>
    );
}

export default MainContent;