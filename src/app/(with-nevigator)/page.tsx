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
      <div className={style.middle_content}>
        <div className={style.notice}></div>
        <div className={style.game_start}></div>
        <div className={style.board}></div>
      </div>
      <div className={style.last_content}>
        <div className={style.game_img}></div>
        <div className={style.game_explain}></div>
      </div>
    </div>
  );
}
