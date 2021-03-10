import React from "react";
import Preloader from "../Preloader/Preloader";


export const withReactSuspense = (Component) => (props) => <React.Suspense fallback={ <Preloader />}>
        <Component {...props}/>
    </React.Suspense>;