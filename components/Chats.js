import { useRecoilValue } from 'recoil';
import { getMessageState } from '../pages/index';

export default function Chats(){
  //msgs[] has all the msgs
  const messages = useRecoilValue(getMessageState);
  //console.log(messages);
  return (
    <>
      <div>
      </div>
    </>
  );
}
