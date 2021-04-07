import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


const useReactPath = () => {
    const router = useRouter();
    const [path, setPath] = useState(router.pathname);
    const listenToPopstate = () => {
        const winPath = window.location.pathname;
        setPath(winPath);
    };
    useEffect(() => {
        window.addEventListener("popstate", listenToPopstate);
        return () => {
            window.removeEventListener("popstate", listenToPopstate);
        };
    }, []);
    return path;
};

export default useReactPath;
