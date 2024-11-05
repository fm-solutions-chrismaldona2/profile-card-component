import PropTypes from "prop-types";
import Input from "../ui/Input";
import Error from "../ui/Error";
import Button from "../../Button/Button";
import styles from "./ProfileCardForm.module.css";
import { useForm } from "react-hook-form";

export default function ProfileCardForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Lionel Messi",
      birth: "1987-06-24",
      location: "Rosario, Argentina",
      followers: 450000000,
      likes: 10000000,
      photos: 123,
    },
  });

  const validateBirthDate = (value) => {
    const today = new Date();
    const birthDate = new Date(value);
    return birthDate <= today || "Birthdate can't be in the future";
  };

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <section className={styles.form__container}>
      <h1 className={styles.form__title}>Profile data</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
        <div className={styles.form__group}>
          <Input
            label="Name"
            id="name"
            name="name"
            type="text"
            isRequired
            {...register("name", {
              required: "Name can't be blank",
              maxLength: {
                value: 40,
                message: "Must be at most 40 characters",
              },
            })}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </div>

        <div className={styles.form__column}>
          <div className={styles.form__group}>
            <Input
              label="Birth"
              id="birth"
              name="birth"
              type="date"
              isRequired
              {...register("birth", {
                required: "Birthdate is required",
                validate: validateBirthDate,
              })}
            />
            {errors.birth && <Error>{errors.birth.message}</Error>}
          </div>

          <div className={styles.form__group}>
            <Input
              label="Location"
              id="location"
              name="location"
              type="text"
              isRequired
              {...register("location", {
                required: "Location can't be blank",
                maxLength: {
                  value: 50,
                  message: "Must be at most 50 characters",
                },
              })}
            />
            {errors.location && <Error>{errors.location.message}</Error>}
          </div>
        </div>

        <div className={styles.form__column}>
          <div className={styles.form__group}>
            <Input
              label="Followers"
              id="followers"
              name="followers"
              type="number"
              isRequired
              {...register("followers", {
                required: "Followers can't be blank",
                min: {
                  value: 0,
                  message: "Must be at least 0",
                },
              })}
            />
            {errors.followers && <Error>{errors.followers.message}</Error>}
          </div>

          <div className={styles.form__group}>
            <Input
              label="Likes"
              id="likes"
              name="likes"
              type="number"
              isRequired
              {...register("likes", {
                required: "Likes can't be blank",
                min: {
                  value: 0,
                  message: "Must be at least 0",
                },
              })}
            />
            {errors.likes && <Error>{errors.likes.message}</Error>}
          </div>

          <div className={styles.form__group}>
            <Input
              label="Photos"
              id="photos"
              name="photos"
              type="number"
              isRequired
              {...register("photos", {
                required: "Photos can't be blank",
                min: {
                  value: 0,
                  message: "Must be at least 0",
                },
              })}
            />
            {errors.photos && <Error>{errors.photos.message}</Error>}
          </div>
        </div>

        <div className={styles.form__column}>
          <div className={styles.form__group}>
            <Input
              label="Avatar"
              id="avatar"
              name="avatar"
              type="file"
              accept="image/*"
              isRequired
              {...register("avatar", { required: "Avatar must be provided" })}
            />
            {errors.avatar && <Error>{errors.avatar.message}</Error>}
          </div>

          <div className={styles.form__group}>
            <Input
              label="Cover picture"
              id="cover"
              name="cover"
              type="file"
              accept="image/*"
              {...register("cover")}
            />
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
      <span className={styles.form__footer}>
        Developed by{" "}
        <a href="https://github.com/chrismaldona2" target="_blank">
          Christian Maldonado
        </a>
      </span>
    </section>
  );
}

ProfileCardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
