import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <>
        <div className="mt-45 text-center space-y-5">
            <h1 className="text-3xl font-bold">OOPS!!!</h1>
            <h2 className="text-2xl font-bold">Something Went Wrong!!</h2>
            <h3 className="text-xl font-bold">Error: {err.status}: {err.statusText}</h3>
        </div>
        </>
    );
}

export default Error;