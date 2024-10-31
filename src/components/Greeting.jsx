import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[2]);

  return (
    <div>
      <h3>{greeting}! Gracias por visitarnos!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}