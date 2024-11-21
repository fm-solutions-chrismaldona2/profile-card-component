import "./App.css";
import HomePage from "./pages/HomePage";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import initialProfileAvatar from "./assets/images/image-victor.jpg";
import Button from "./components/Button/Button";
import ProfileCardForm from "./components/Forms/ProfileCardForm/ProfileCardForm";
import { useState } from "react";

import Modal from "./components/Modal/Modal";
import { calculateAge } from "./utils/calculateAge";
import { AnimatePresence, motion } from "framer-motion";

const initialProfile = {
  avatar: initialProfileAvatar,
  name: "Victor Crest",
  age: 26,
  location: "London",
  followers: 80000,
  likes: 803000,
  photos: 1403,
};

function App() {
  const [profileData, setProfileData] = useState(initialProfile);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  const handleFormSubmit = (data) => {
    const avatarUrl = URL.createObjectURL(data.avatar[0]);
    const coverUrl = data.cover[0]
      ? URL.createObjectURL(data.cover[0])
      : undefined;

    setProfileData({
      ...data,
      age: calculateAge(data.birth),
      avatar: avatarUrl,
      cover: coverUrl,
    });

    toggleForm();
  };

  return (
    <HomePage>
      <>
        <ProfileCard profileData={profileData} />
        <Button onClick={toggleForm}>Set new profile data</Button>
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: "absolute" }}
            >
              <Modal isOpen={isFormOpen} onClose={toggleForm}>
                <ProfileCardForm onSubmit={handleFormSubmit} />
              </Modal>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </HomePage>
  );
}

export default App;
