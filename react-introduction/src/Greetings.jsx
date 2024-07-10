export function Greetings(props) {
  console.log(props);

  if (props.age == 22) {
    return <div>We the same age</div>;
  } else if (props.age > 22) {
    return <div>You are older than me</div>;
  } else {
    return <div>I am older than you</div>;
  }
}
