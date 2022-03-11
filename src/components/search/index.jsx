import React from 'react'
import TextField from "@mui/material/TextField";

const SearchPage = () =>{
    return (
        <>
            <TextField className='search'
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search Tags"
            size="small"
            />
        </>
    )
}

export default SearchPage;