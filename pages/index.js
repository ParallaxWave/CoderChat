import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


import ChatArea from '../components/ChatArea';
import Head from 'next/head';


const config = {
    apiKey: "AIzaSyDsf4Pu8zkx0wiyIvGZSRCjfTEfxyv42kk",
    authDomain: "coder-chat-cfa8b.firebaseapp.com",
    projectId: "coder-chat-cfa8b",
    storageBucket: "coder-chat-cfa8b.appspot.com",
    messagingSenderId: "1056086333332",
    appId: "1:1056086333332:web:37a70c492b0828f4c6e181",
    measurementId: "G-SMW77E1XT2"
};

const firebaseApp = firebase.apps && firebase.apps.length > 0 ? firebase.apps[0] : firebase.initializeApp(config)

const auth = firebase.auth();
const firestore = firebase.firestore();



export default function Home() {

  const [ user ] = useAuthState(auth);


  return (
   <> 
     <RecoilRoot>
     { user ? <div><Main/></div>: <SignIn/>}
     </RecoilRoot>
   </> 
  );
}


  const messageState = atom({
    key: 'messageState',
    default: ''
  });
  
 export const getMessageState = selector({
  key: 'getMessageState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(messageState);

    return text;
  },
});

function Main(){
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [msgFirestore] = useCollectionData(query, { idField: 'id' });
  const [messages, setMessages] = useRecoilState(messageState);
  setMessages(msgFirestore);
  
  return (
      <> 
    <Head>
      <title>Coder Chat</title>
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
		  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"/>
		  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
    </Head>
     <div className="grid grid-cols-12 h-screen">
       <div className="col-span-1 text-center" style={{ background: '#202225' }}>
         <button className="text-white px-3 py-2 shadow-lg m-2 rounded-sm focus:outline-none" style={{ background: '#2f3136' }} onClick={() => auth.signOut()}>
         Sign Out 
         </button>
        </div>
       <div className="col-span-3" style={{ background: '#2f3136' }}>
         Test 2
        </div>
       <div className="col-span-6" >
         <ChatArea />
        </div>
       <div className="col-span-2" style={{ background: '#2f3136' }}>
          Test 2
        </div>

     </div>
    </>  
  );
}


function SignIn(){

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <div 
        onClick={signInWithGoogle}
        style={{  
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '100vh',
          fontSize: 40
        }}
        >
        Sign In with Google
      </div>
    </>
  );
}
