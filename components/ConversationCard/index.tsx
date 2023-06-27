import React, { useEffect, useState } from "react";
import s from "./ConversationCard.module.css";
import Avatar from "../Avatar";
import Axios from "../../core/axios";
interface IProps {
  title: string;
  avatars: string[];
  guests: string[];
  guestsCount: number;
  speakersCount: number;
}

const ConversationCard: React.FC<IProps> = ({
  title,
  avatars,
  guests = [],
  guestsCount,
  speakersCount,
}) => {
  return (
    <div className={s.conversationRoom}>
      <div>
        <h3 className={s.conversationRoomTitle}>{title}</h3>
        <div className={s.conversationRoomPeople}>
          <div className={s.avatars}>
            <div>
              {avatars.map((url, i) => (
                <Avatar
                  key={url}
                  src={url}
                  width={"30px"}
                  height={"30px"}
                  className={i === avatars.length - 1 ? s.lastAvatar : ""}
                />
              ))}
            </div>
          </div>
          <ul className={s.list}>
            {guests.map((name) => (
              <li key={name}>
                {name}
                <img src="/static/sayDots.png" alt="" />
              </li>
            ))}

            <div className={s.count}>
              <div className={s.guestsCount}>
                {guestsCount}
                <img src="/static/manIcon.svg" alt="" />
              </div>
              <div className={s.messagesCount}>
                {speakersCount}
                <img src="/static/messageIcon.svg" alt="" />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;
