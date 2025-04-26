// src/App.jsx
import { useState, useEffect } from "react";
import Header from "./components/Header";
import AvatarGrid from "./components/AvatarGrid";
import CreateAvatarButton from "./components/CreateAvatarButton";
import CreateAvatarModal from "./components/CreateAvatarModal";
// Import the local data
import avatarData from "./data/avatars.json";

function App() {
  const [avatars, setAvatars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to show the loading state for a brief moment
    const loadData = () => {
      setTimeout(() => {
        setAvatars(avatarData.avatars);
        setLoading(false);
      }, 500); // 500ms delay to simulate loading
    };

    loadData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-xl text-gray-600">Loading avatars...</div>
          </div>
        ) : (
          <AvatarGrid avatars={avatars} />
        )}
      </main>

      <CreateAvatarButton onClick={openModal} />
      <CreateAvatarModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
