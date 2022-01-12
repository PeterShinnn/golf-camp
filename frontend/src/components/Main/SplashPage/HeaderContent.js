import React from 'react';
import Slogan from '../Slogan';
import SearchForm from '../../Search/SearchForm';

function HeaderContent() {

    return (
        <>
            <div className="nav-content">
                <Slogan />
                <SearchForm />
            </div>
        </>
    );
}

export default HeaderContent;
