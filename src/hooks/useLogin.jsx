import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () =>{
    const {dispatch} = useAuthContext()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const login = async(user) =>{
        setIsLoading(true)
        setError(null)
        try{
            const response = await fetch(`${import.meta.env.VITE_API_LINK}/login`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(user)
            })

            console.log(response)

            const result = await response.json()

            if(!response.ok){
                setIsLoading(false)
                setError(result.error)
            }

            if(response.ok){
                dispatch({type: 'LOGIN', payload: result})
                localStorage.setItem('user', JSON.stringify(result))
                setIsLoading(false)
            }
        }catch(err){
            setIsLoading(false)
            setError(err.message)
        }
    }

    return [login, isLoading, error]

}