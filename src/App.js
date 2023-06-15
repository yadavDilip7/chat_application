import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
const App = () =>{
    return(
        <ChatEngine
        height ='100vh'
        projectID ="4884f3eb-785a-4134-b6cb-dadd9eefb44d"
        userName="yaduvanshidilip"
        userSecret ="12345"
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    );
}
export default App;