import  { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function DaynamicTitles() {
    const [title , setTitle]= useState('')

        const titles = [
            {path:'/', title: "Home - ecoAdventure"},
           { path:'/Login', title: "Login - ecoAdventure"},
            {path:'/registration', title: "registration - ecoAdventure"},
            {path:'/UpdateProfile', title: "UpdateProfile - ecoAdventure"},
            {path:'/Userprofile', title: "Userprofile - ecoAdventure"}
            
        ]
        const currentLocatioin = useLocation()
        useEffect(() => {
        const currentTitlte = titles.map(t => t.path === currentLocatioin.pathname)
        if(currentTitlte && currentTitlte.title){
            setTitle(currentTitlte.title)
            document.title = currentTitlte
        }
        }, [currentLocatioin])


  return null
}

export default DaynamicTitles