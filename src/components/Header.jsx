import { useEffect, useState } from "react";

function Header() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    let newGreeting = "";

    if (hour < 12) {
      newGreeting = "Good morning";
    } else if (hour < 18) {
      newGreeting = "Good afternoon";
    } else {
      newGreeting = "Good evening";
    }

    setGreeting(newGreeting);
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">AI Avatar Dashboard</h1>
        <p className="mt-2 text-lg opacity-90">
          {greeting}, User! Manage your AI avatars here.
        </p>
      </div>
    </header>
  );
}

export default Header;
