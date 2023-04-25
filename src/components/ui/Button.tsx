import React from 'react';

const Button = ({
    classname,
    children,
    title,
}: {
    classname?: string;
    children?: React.ReactNode;
    title?: string;
}) => {
    return (
        <button
            className={`px-2 py-1 shadow rounded tracking-wide ${classname}`}
        >
            {title ? title : children}
        </button>
    );
};

export default Button;
