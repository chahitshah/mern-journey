import { createContext } from "react";
import { useState } from "react";


export const PostContext = createContext()

export const PostContextProvider =({children})=>{
    const [loading, setloading] = useState(false);
    const [Post, setPost] = useState(null);
    const [feed, setfeed] = useState(null);



    return(
        <PostContext.Provider value={{loading,setloading,Post,setPost,feed,setfeed}}>
            {children}
        </PostContext.Provider>
    )

}