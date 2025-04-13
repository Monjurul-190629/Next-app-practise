import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <nav className='flex gap-6'>
                <li>
                    <Link href = "/About/Mission">Mission</Link>
                </li>
                <li>
                    <Link href = "/about/Vision">Vision</Link>
                </li>
            </nav>
            {children}
        </div>
    );
};

export default layout;