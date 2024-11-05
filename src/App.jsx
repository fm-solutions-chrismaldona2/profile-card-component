import "./App.css";
import { lazy, Suspense, useState } from "react";

import HomePage from "./pages/HomePage";
import initialProfileAvatar from "./assets/images/image-victor.jpg";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import { calculateAge } from "./utils/calculateAge";
import { motion } from "framer-motion";

const ProfileCard = lazy(() => import("./components/ProfileCard/ProfileCard"));
const ProfileCardForm = lazy(() =>
  import("./components/Forms/ProfileCardForm/ProfileCardForm")
);

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
    <Suspense>
      <HomePage>
        <>
          <ProfileCard profileData={profileData} />
          <Button onClick={toggleForm}>Set new profile data</Button>

          {isFormOpen && (
            <Modal isOpen={isFormOpen} onClose={toggleForm}>
              <motion.div
                initial={{ opacity: 0, translateY: -10 }}
                animate={{ opacity: 1, translateY: 0 }}
              >
                <ProfileCardForm onSubmit={handleFormSubmit} />
              </motion.div>
            </Modal>
          )}
        </>
      </HomePage>
    </Suspense>
  );
}

export default App;
