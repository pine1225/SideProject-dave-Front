import style from "./footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container} role="contentinfo">
        <h4>Dave the Diver Fan Wiki</h4>

        <div className={style.links}>
          <a
            href="https://github.com/yourname/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source (GitHub)
          </a>
          <a href="mailto:you@example.com">Contact</a>
        </div>

        <p className={style.copy}>© Pine1225</p>

        <p className={style.notice}>
          Portfolio project — not for commercial use. All Dave the Diver content
          © NEXON Games.
        </p>

        <p className={style.legal}>
          본 사이트는 포트폴리오 목적으로 제작된 개인 프로젝트입니다. 게임 관련
          모든 저작권은 NEXON Games에 있으며, 상업적 이용을 목적으로 하지
          않습니다.
        </p>
      </div>
    </div>
  );
}
