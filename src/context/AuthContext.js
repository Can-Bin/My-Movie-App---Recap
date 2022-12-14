import {createContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth"
import { auth } from "../auth/firebase-config";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
        })
    }, [])
    
    return(
        
        <div>
            <AuthContext.Provider value={{currentUser}}>
                {props.children}
            </AuthContext.Provider>
        </div>
    )


}

export default AuthContextProvider;