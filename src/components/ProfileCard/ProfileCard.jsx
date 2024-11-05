import PropTypes from "prop-types";
import styles from "./ProfileCard.module.css";

import defaultCover from "../../assets/images/bg-pattern-card.svg";
import abbreviateNumber from "../../utils/abbreviateNumber";

export default function ProfileCard({ profileData }) {
  const followers = abbreviateNumber(profileData.followers);
  const likes = abbreviateNumber(profileData.likes);
  const photos = abbreviateNumber(profileData.photos);
  return (
    <article className={styles.profile}>
      <header className={styles.profile__header}>
        <img
          src={profileData.cover ? profileData.cover : defaultCover}
          alt="cover"
          className={styles.profile__cover}
        />
        <div className={styles.profile__data}>
          <img
            src={profileData.avatar}
            alt="avatar"
            className={styles.profile__avatar}
          />
          <div className={styles.profile__top}>
            <span className={styles.profile__name}>{profileData.name}</span>
            <span className={styles.profile__age}>{profileData.age}</span>
          </div>
          <span className={styles.profile__location}>
            {profileData.location}
          </span>
        </div>
      </header>
      <section className={styles.profile__analytics}>
        <div>
          <span className={styles.analytic__data}>{followers}</span>
          <span className={styles.analytic__label}>Followers</span>
        </div>

        <div>
          <span className={styles.analytic__data}>{likes}</span>
          <span className={styles.analytic__label}>Likes</span>
        </div>

        <div>
          <span className={styles.analytic__data}>{photos}</span>
          <span className={styles.analytic__label}>Photos</span>
        </div>
      </section>
    </article>
  );
}

ProfileCard.propTypes = {
  profileData: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    cover: PropTypes.string,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    photos: PropTypes.number.isRequired,
  }).isRequired,
};
