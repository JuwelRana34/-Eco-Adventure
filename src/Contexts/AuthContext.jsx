import { createContext, useEffect, useState } from "react";
import {Auth} from '../Config/Firebase.config'
import { createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged,sendPasswordResetEmail,signInWithEmailAndPassword,signInWithPopup,signOut,updateProfile} from "firebase/auth"
import { toast } from "sonner";



export const AuthContext = createContext('')

const AuthProvider = ({children})=>{
    

 const [user, setUser] = useState(null)
 const [isLoading , setIsloading] = useState(true)


 const GoogleProvider = new GoogleAuthProvider()

 const googleSignIn = ()=>{
    
    return signInWithPopup(Auth, GoogleProvider)
    

 }



   const CreateUsers = (email, password)=>{
      return createUserWithEmailAndPassword(Auth, email, password)
   }

   const SignInUsers = (email,password)=>{
      return signInWithEmailAndPassword(Auth, email, password)
   }

   const UpdateProfile = ( name , photo)=>{
    if(!Auth.currentUser){
        toast.error('You are not logged in')
        return;
    }
    return updateProfile(Auth.currentUser, { displayName: name, photoURL: photo})
     
   }

   const SignOutUsers = ()=>{
     signOut(Auth)
      .then(()=>{
        setIsloading(false)
        setUser(null);
        toast.warning('Logged Out Successfully')
       })
       .catch((err)=> {
        toast.error(err)
       })
       
   }

   const RestPassword = (email) => {
     return sendPasswordResetEmail(Auth , email)
   }





   useEffect(()=>{

    
    const Unsubscribe = onAuthStateChanged(Auth , (user)=>{

        if (user){
            setUser(user)
            setIsloading(false)

        }else{
            setIsloading(false)
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
        setIsloading,
        RestPassword

    }

    return <AuthContext.Provider value={AuthInfo}>
        {children}
        </AuthContext.Provider>
}

export default AuthProvider