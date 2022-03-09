import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-itemComponent';

import './directory.scss';

const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...OtherSectionProp }) => (
                <MenuItem key={id} {...OtherSectionProp} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);