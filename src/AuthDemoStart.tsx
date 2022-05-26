import axios from "axios";
import { useState } from "react";
import { auth, googleAuthProvider } from './configureFirebase'
import { signInWithPopup, UserCredential, User} from 'firebase/auth'


export function AuthDemoStart(): JSX.Element {
    const [user, setUser] = useState<User | null>()

    const [lastAPIReply, setLastAPIReply] = useState<string>("");


    async function handleFetchTimeClicked() {
        const reply = await axios.get("http://localhost:4000/");
        setLastAPIReply(reply.data);
    }

    async function handleFetchWisdomClicked() {
        //This SHOULD be hard to get, eventually.
        if (!user) { 
           console.log('no user')
           return
        }
        const token =  await user.getIdToken()
        const config = {headers: {'Authorization': "Bearer " + token }}
        const reply = await axios.get("http://localhost:4000/wisdom", config);
        setLastAPIReply(reply.data);
    }

    async function handleSignIn() {
      const userCredential: UserCredential = await signInWithPopup(auth, googleAuthProvider);
      const retrievedUser: User = userCredential.user;
      setUser(retrievedUser);
    }

    async function handleSignOut() {
        auth.signOut();
        setUser(null)
    }

    

    return (
        <div>
            <h2>Auth Demo</h2>

            <button onClick={handleSignIn}>Sign in</button>
            <button onClick={handleSignOut}>Sign out</button>
            { user?.photoURL && 
            <div>
                <h3>Signed in as: {user.displayName}</h3>
                {user.photoURL!==null && <img src={user.photoURL} alt='display'/>}
                <h3>Email: {user?.email}</h3>

            </div>
            }

            <hr />
            <h3>Talk to the API</h3>
            <button onClick={handleFetchTimeClicked}>Fetch Time</button>
            <button onClick={handleFetchWisdomClicked}>Fetch Ancient Wisdom!</button>
            <h4>Last successful reply from API</h4>
            <div>{lastAPIReply}</div>
            <br />
            <i>(also check console for any failures)</i>

            <hr />

        </div>
    );
}

