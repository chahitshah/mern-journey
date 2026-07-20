import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext()


export const UserContextProvider =({children})=>{

    const [loading,setLoading] = useState(false)

    const [suggestions,setSuggestions]=useState(null)

    const [following,setFollowing]=useState(null)

    const [pendingRequest,setPendingRequest]=useState(null)

    return (
        <UserContext.Provider value={{loading,setLoading,suggestions,setSuggestions,following,setFollowing,pendingRequest,setPendingRequest}}>
            {children}
        </UserContext.Provider>
    )
}