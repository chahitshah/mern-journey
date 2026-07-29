import { getSong } from "../services/song.api";
import { useContext } from "react";
import { songContext } from "../song.context";


export const useSong = ({children})=>{
    const context = useContext(songContext)

    const {loading,setLoading,song,setSong} = context

    async function handleGetsong({mood})
    {
        setLoading(true)
        try {
            const data = await getSong({mood})
            setSong(data.song)
        } catch(err) {
            console.error("Failed to fetch song:", err)
        } finally {
            setLoading(false)
        }
    }

    return ({loading,song,handleGetsong})
}