export default function ChatMsg(props){

  const { text, uid } = props.message;

  return (
    <>
      <p>{text}</p>
    </>
  );
}
