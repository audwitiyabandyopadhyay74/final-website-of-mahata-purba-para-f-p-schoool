"use client"
import { useState, useEffect } from 'react';

const NoSSRComponent = () => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) {
        return null;
    }

    //   return <div>Your content here</div>;
};

export default NoSSRComponent;