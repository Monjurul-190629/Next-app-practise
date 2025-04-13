import React from 'react';
import Button from '../Components/Button';


export const metadata: Metadata = {
    title: "About us",
    description: "this is about us page",
};




const about: React.FC = () => {

    return (
        <div>
            About Page
            <div>
                <Button></Button>
            </div>
        </div>
    );
};

export default about;