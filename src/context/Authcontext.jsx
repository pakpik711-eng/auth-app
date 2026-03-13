import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";



const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [session,setSession]=useState(undefined);
    //sign up
    const signUpNewUser=async(email,password)=>{
        const {data,error}=await supabase.auth.signUp({email:email,password:password});
        if(error){
            console.log("There was a problem in signing up",error);
            return {success:false,error};
        }
        return {success:true,data};
    }

    //sign in

    const signInUser=()=>{
    try {

        const {data,error}=supabase.auth.signInWithPassword({email:email,password:password});
        if(error){
            console.log("There was a problem in signing in",error);
        }
        console.log("sign in success",data);
        return {success:true,data};
    } catch (error) {
        console.log("an error occured",error);
    }
    }

   useEffect(()=>{
    supabase.auth.getSession().then(({data:{session}})=>{
        setSession(session);
    });

     supabase.auth.onAuthStateChange((_event,session)=>{
         setSession(session);
     });
   },[]);

   //sign out
   const signOut=()=>{
    const {error}=supabase.auth.signOut();
    if(error){
        console.log("There was a problem in signing out",error);
    }
   }

    return(
        <AuthContext.Provider value={{session,signUpNewUser,signOut,signInUser}}>{children}</AuthContext.Provider>
    );
};

export const UserAuth=()=>{
    return useContext(AuthContext);
} 