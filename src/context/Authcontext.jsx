import { createContext,useContext,useState,useEffect, Children } from "react";

const AuthContext=createContext();

export const AuthContextProvider=({Children})=>{
    const [session,setSession]=useState(undefined);

    return(
        <AuthContext.Provider value={{session}}>{Children}</AuthContext.Provider>
    );
};

export const UserAuth=()=>{
    return useContext(AuthContext);
}