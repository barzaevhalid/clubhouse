import React from "react";
import s from "./Header.module.css";
import Avatar from "../Avatar";
import Wrapper from "../Wrapper ";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = () => {
  return (
    <>
      <Wrapper>
        <header className={s.header}>
          <div className={s.logo}>
            <img src="/static/hand.png" alt="hand" />
            <div className={s.logoText}>Clubhouse</div>
          </div>
          <Link href="/profile/1">
            <div className={s.headerProfile}>
              <div className={s.headerProfileName}>Archakov Dennis</div>
              <Avatar
                src={"/static/prfoileAvatar.png"}
                width={"40px"}
                height={"40px"}
              />
            </div>
          </Link>
        </header>
      </Wrapper>
      <div className={s.line} />
    </>
  );
};

export default Header;
