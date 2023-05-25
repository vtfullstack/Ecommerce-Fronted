import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Metadata = ({ title }) => {
    const helmetContext = {};
    return (
        <><HelmetProvider context={helmetContext}>
            <Helmet>
                <title>
                    {title}
                </title>

            </Helmet>
        </HelmetProvider>
        </>
    )
}

export default Metadata