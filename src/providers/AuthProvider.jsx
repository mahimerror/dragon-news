import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [news, setNews] = useState([]);
    const [loadingUser, setLoadingUser] =useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) =>{
        setLoadingUser(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinUser = (email, password) =>{
        setLoadingUser(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signinUserByGoogle = () =>{
        setLoadingUser(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signinUserByGithub = () =>{
        setLoadingUser(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logoutUser = () => {
        setLoadingUser(true);
        setUser(null);
        return signOut(auth);
    }

    useEffect( () =>{
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoadingUser(false);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        news,
        loadingUser,
        createUser,
        logoutUser,
        signinUser,
        signinUserByGoogle,
        signinUserByGithub
    }

    return ( 
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}