import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper ";
import s from "./Roooms.module.css";
import ConversationCard from "../components/ConversationCard";
import Link from "next/link";
import Axios from "../core/axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface Data {
  _id: string;
  avatars: string[];
  guestsCount: number;
  speakersCount: number;
  title: string;
  guests: string[];
}
const Rooms = ({ rooms }: Data) => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className={s.roomsHeader}>
          <div className={s.roomsTitleWrapper}>
            <h3 className={s.roomsTitle}>All conversations</h3>
            <button className={s.explore}>
              <img className={s.cloud} src="/static/cloud.png" alt="" />
              Explore
            </button>
          </div>
          <div>
            <button className={s.createRoomBtn}>+ Start a room</button>
          </div>
        </div>
        <div className={s.conversationCardsWrapper}>
          {rooms.map((obj) => (
            <Link key={obj.id} href={`/rooms/${obj._id}`}>
              <ConversationCard {...obj} />
            </Link>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Rooms;

export async function getServerSideProps() {
  try {
    const { data } = await Axios.get("http://localhost:3000/rooms.json");
    return { props: { rooms: data } };
  } catch (e) {
    return { props: { rooms: [] } };
  }
}
