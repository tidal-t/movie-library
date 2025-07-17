import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function ScrollControl() {
    const location = useLocation();

    useEffect(() => {
        const isDrawerOpen = /^\/(movie|tv)\/\d+/.test(location.pathname);

        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [location.pathname]);

    return null;
}
