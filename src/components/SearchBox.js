import React from 'react';

const SearchBox = ({SearchChange}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue' 
                    aria-label='Search Robots'
                    onChange={SearchChange}
                    type="search" 
                    placeholder="search"
            />
        </div>
    )
}

export default SearchBox;