import React, { ChangeEvent } from 'react'
import './search-box.styles.css'

type Props = {
    placeholder: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox: React.FC<Props> = (props) => {
    return (
        <input
            className="search" 
            type="search" 
            placeholder={props.placeholder} 
            onChange={props.handleChange}
        />
    )
}

export default SearchBox