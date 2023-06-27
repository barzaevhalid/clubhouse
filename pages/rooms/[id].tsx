import React from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper ";
import Room from "../../components/Room";

import Axios from "../../core/axios";

import Link from "next/link";

import s from "./Rooms.module.css";

const RoomPage = ({ room }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Link href={"/rooms"}>
          <div className={s.title}>
            <img className={s.arrow} src="/static/arrow.png" alt="" />
            <h1>All rooms</h1>
          </div>
        </Link>
      </Wrapper>
      <Room title={room.title} />
    </>
  );
};

export default RoomPage;

export async function getServerSideProps(ctx) {
  try {
    const { data } = await Axios.get("http://localhost:3000/rooms.json");
    const roomId = ctx.query.id;
    const room = data.find((obj) => obj._id === roomId);
    return { props: { room } };
  } catch (e) {
    return { props: { rooms: [] } };
  }
}
