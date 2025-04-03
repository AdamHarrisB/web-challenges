export default function App() {
  return <Greeting name="Adam" />;
}

function Greeting({name}) {
  const user = ["Adam", "Christina", "Felix"];
  return(
    <p>Hi, {user.includes(name) ? "Coach" : name}!</p>);
}

