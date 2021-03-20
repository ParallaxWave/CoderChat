import Head from 'next/head'
import ChatArea from '../components/ChatArea';

export default function Home() {
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
       <div className="col-span-1" style={{ background: '#202225' }}>
          Test
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
