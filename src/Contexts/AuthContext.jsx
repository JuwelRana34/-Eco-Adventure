import { createContext, useEffect, useState } from "react";
import {Auth} from '../Config/Firebase.config'
import { createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,signOut,updateProfile} from "firebase/auth"

import { toast } from "sonner";


export const AuthContext = createContext('')

const AuthProvider = ({children})=>{
    

 const [user, setUser] = useState(null)
 const [isLoading , setIsloading] = useState(true)


 const GoogleProvider = new GoogleAuthProvider()

 const googleSignIn = ()=>{
    
    return signInWithPopup(Auth, GoogleProvider)
    

 }



   const CreateUsers = ()=>{
      return createUserWithEmailAndPassword(Auth, email, password)
   }

   const SignInUsers = ()=>{
      return signInWithEmailAndPassword(Auth, email, password)
   }

   const UpdateProfile = ( name , photo)=>{
    if(!Auth.currentUser){
        toast.error('You are not logged in')
        return;
    }
     updateProfile(Auth.currentUser, { displayName: name, photoURL: photo})
     .then(() =>{
        toast.success('Profile Updated Successfully')
      })
      .catch((err) => {
        toast.error(err)
      })
   }

   const SignOutUsers = ()=>{
       signOut(Auth)
       .then(()=>{
        toast.success('Logged Out Successfully')
        setUser(null)
       
       })
       .catch((err)=> {
        toast.error(err)
       })
   }




   useEffect(()=>{

    const Unsubscribe = onAuthStateChanged(Auth , (user)=>{

        if (user){
            setUser(user)
            setIsloading(false)
        }else{
            setIsloading(true)
        }
    })

    return ()=>{
        Unsubscribe()
    }

   },[user])

    const AuthInfo = {
        user,
        isLoading,
        CreateUsers,
        SignInUsers,
        UpdateProfile,
        SignOutUsers,
        googleSignIn,
        setIsloading

    }

    return <AuthContext.Provider value={AuthInfo}>
        {children}
        </AuthContext.Provider>
}

export default AuthProvider