import style from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={style.main_video}>
        <video
          src="/assets/game-img/DaveTheDiver.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
