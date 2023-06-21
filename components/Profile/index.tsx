import React from "react";
import s from "./Profile.module.css";
import Avatar from "../Avatar";
import Link from "next/link";

const Profile = ({ avatarUrl, fullName, username, about }) => {
  return (
    <div>
      <div className={s.backBlock}>
        <Link href="/rooms">
          <div className={s.backBlock}>
            <img className={s.arrow} src="/static/arrow.png" alt="" />
            <h3 className={s.back}>Back</h3>
          </div>
        </Link>
      </div>
      <div className={s.user}>
        <div>
          <Avatar src={avatarUrl} width={"100px"} height={"100px"} />
        </div>
        <div className={s.userName}>
          <h3 className={s.title}>{fullName}</h3>
          <div className={s.subtitle}>{username}</div>
        </div>
        <div>
          <button className={s.follow}>Follow</button>
        </div>
      </div>
      <div className={s.aboutUser}>{about}</div>
    </div>
  );
};

export default Profile;
