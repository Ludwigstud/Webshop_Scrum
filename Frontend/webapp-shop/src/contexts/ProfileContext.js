import { createContext, useContext } from "react";
import { getAccessToken } from "../helpers/getAccessToken";

const ProfileContext = createContext();

export const useProfileContext = () =>{
    return useContext(ProfileContext);
}

export const ProfileProvider = ({children}) => {
    const url = "https://localhost:7042/api/profile";
    const token = getAccessToken();

    const createProfileAddress = async (address) => {
        const res = await fetch(`${url}/createprofileaddress`,{
            method: "post",
            headers:{
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(address),
        });
        console.log(res)
        console.log(address)
        if(res.status === 201){
            window.location.replace("/profile/address")
        }
    }

    const getProfileAddress = async() => {
        const res = await fetch(`${url}/getprofileaddresses`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
        if(res.ok){
            const data = await res.json();
            return data
        }
        else {
            console.error('Request failed with status:', res.status);
        }
    }

    const editProfileAddress = async(address) => {
        const res = await fetch(`${url}/updateprofileaddress`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(address),
            
        })
        if(res.status === 200){
            window.location.replace("/profile/address")
            
        }
    }

    const deleteProfileAddress = async(address) => {
        const res = await fetch(`${url}/deleteprofileaddress`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(address),
        })
        if(res.status === 200){
            window.location.replace("/profile/address")
            
        }
    }

    return <ProfileContext.Provider value={{createProfileAddress, getProfileAddress, editProfileAddress, deleteProfileAddress}}>{children}</ProfileContext.Provider>
}