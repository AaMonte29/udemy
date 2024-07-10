export function Greetings(props) {
  console.log(props);
  return (
    <div>
      Hi {props.firstName}. You are {props.age}. Here is me passing a child from
      the App.jsx: {props.children}
    </div>
  );
}
