import {useContext, createContext} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase'