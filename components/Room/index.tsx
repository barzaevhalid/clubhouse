import React from "react";
import Avatar from "../Avatar";
import s from "./Room.module.css";

interface RoomProps {
  title: string;
}

const Room = ({ title }: RoomProps) => {
  return (
    <div className={s.viewRoom}>
      <div className={s.container}>
        <div className={s.viewRoomHeader}>
          <h1>{title}</h1>
          <div className={s.roomButtons}>
            <button className={`${s.handRoom} ${s.btn}`}>
              <img src="/static/handRoom.svg" alt="" />
            </button>
            <button className={`${s.fingers} ${s.btn}`}>
              <img className={s.fingersImg} src="/static/fingers.png" alt="" />
              <span className={s.fingersText}>Leave quietly</span>
            </button>
          </div>
        </div>
        <div className={s.speakers}>
          <div>
            <Avatar
              src={
                "https://cdn.britannica.com/18/66018-050-AA222E0F/Bruce-Lee-scene-Enter-the-Dragon-1973.jpg"
              }
              width={"100px"}
              height={"100px"}
            />
            <div className={s.userName}>Name</div>
          </div>
          <div>
            <Avatar
              src={
                "https://cdn.britannica.com/18/66018-050-AA222E0F/Bruce-Lee-scene-Enter-the-Dragon-1973.jpg"
              }
              width={"100px"}
              height={"100px"}
            />
            <div>Name</div>
          </div>
          <div>
            <Avatar
              src={
                "https://cdn.britannica.com/18/66018-050-AA222E0F/Bruce-Lee-scene-Enter-the-Dragon-1973.jpg"
              }
              width={"100px"}
              height={"100px"}
            />
            <div>Name</div>
          </div>
          <div>
            <Avatar
              src={
                "https://cdn.britannica.com/18/66018-050-AA222E0F/Bruce-Lee-scene-Enter-the-Dragon-1973.jpg"
              }
              width={"100px"}
              height={"100px"}
            />
            <div>Name</div>
          </div>
        </div>
        <h3>Other in the room</h3>
        <div className={s.otherPeople}>
          <div>
            <Avatar
              src={
                "https://cdn.britannica.com/18/66018-050-AA222E0F/Bruce-Lee-scene-Enter-the-Dragon-1973.jpg"
              }
              width={"100px"}
              height={"100px"}
            />
            <div>Name</div>
          </div>
          <div>
            <Avatar
              src={
                "https://cdn.britannica.com/18/66018-050-AA222E0F/Bruce-Lee-scene-Enter-the-Dragon-1973.jpg"
              }
              width={"30px"}
              height={"30px"}
            />
            <div>Name</div>
          </div>
          <div>
            <Avatar
              src={
                "https://cdn.britannica.com/18/66018-050-AA222E0F/Bruce-Lee-scene-Enter-the-Dragon-1973.jpg"
              }
              width={"30px"}
              height={"30px"}
            />
            <div>Name</div>
          </div>
          <div>
            <Avatar
              src={
                "https://cdn.britannica.com/18/66018-050-AA222E0F/Bruce-Lee-scene-Enter-the-Dragon-1973.jpg"
              }
              width={"30px"}
              height={"30px"}
            />
            <div>Name</div>
          </div>
          <div>
            <Avatar
              src={
                "https://cdn.britannica.com/18/66018-050-AA222E0F/Bruce-Lee-scene-Enter-the-Dragon-1973.jpg"
              }
              width={"30px"}
              height={"30px"}
            />
            <div>Name</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
