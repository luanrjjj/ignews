import { FaGithub } from 'react-icons/fa'
import  styles from './styles.module.scss';
 import  { FiX } from 'react-icons/fi';
import {signIn, signOut, useSession} from 'next-auth/client';




export function SignInButton() {

const [session] = useSession()

console.log(200,session)

    return  session ? (
        <button 
        type = "button"
        className = {styles.signInButton}
       
        >
            <FaGithub color = '#04d361'/>
           {session.user.name}
            <FiX color="#737380" className= {styles.closeIcon} onClick = {() => signOut()} />
        </button>
    ) : (<button 
        type = "button"
        className = {styles.signInButton}
        onClick ={() => signIn('github')}
        >
            <FaGithub color = '#eba417'/>
            Sign in with Github
        </button>) 
}