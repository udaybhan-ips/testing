import React from 'react'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
  });

const AddFilePage = () => {
    return (
        <>
            <label className="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
        </>
    )
}

export default AddFilePage;