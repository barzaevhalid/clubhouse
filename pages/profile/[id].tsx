import React from "react";
import s from "./Profile.module.css";
import { useRouter } from "next/router";
import Wrapper from "../../components/Wrapper ";
import Header from "../../components/Header";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Profile from "../../components/Profile";

interface IProp {
  avatarUrl: string;
  fullName: string;
  username: string;
}
const ProfilePage: React.FC<IProp> = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <Wrapper>
        <div className={s.userInfo}>
          <Profile
            fullName={"Archakov deninis"}
            username={"@archakov"}
            avatarUrl={"/static/prfoileAvatar.png"}
            about={
              "Kakaya-to ochen vazhnaya informaciya o moev profile I have my personal site archakov.im and Telegram blog - t.me/archakov_im"
            }
          />
          <div className={s.followers}>
            <div>2</div>
            <div>0</div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ProfilePage;
