"use client"
import React from 'react';

const Button = () => {
    return (
        <div>
            <button className='bg-green-600 px-4 py-1' onClick={() => console.log("Hello world")}>
                Click here
            </button>
        </div>
    );
};

export default Button;