import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const usePost = () =>{
    const {user} = useAuthContext()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const send = async(data, url) =>{
        setIsLoading(true)
        setError(null)
        try{
            const response = await fetch(`${import.meta.env.VITE_API_LINK}${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(data)
            })
    
            const json = await response.json()
    
            if(!response.ok){
                console.log(json.error)
                setError(json.error)
                setIsLoading(false)
            }
    
            if(response.ok){
                setIsLoading(false)
                return json
            }
        }catch(err){
            setError(err.message)
            setIsLoading(false)
        }
    }

    return {send, isLoading, error}
}