import React from "react";
import CustomCard from './card'
const Images = () => {

    const data = [{ src: './test.jpg', id: '1', name: 'testing' }, { src: '/assets/test.jpg', id: '2', name: 'testing' }];

    return (
        <>
            {data.map((obj) => (
                <CustomCard
                    src={obj.src}
                    name={obj.name}
                    key={obj.id}
                />
            ))}
        </>
    )
}

export default Images;