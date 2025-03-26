import github from "../../assets/icons/github-icon.svg";
import linkedIn from "../../assets/icons/linkedin-icon.svg";
import gmail from "../../assets/icons/gmail-icon.svg";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer__link">
          <a href="/">
            <p>© Anna Sybingco</p>
          </a>
        </div>
        <div className="footer__social">
          <a href="https://github.com/amsyb" target="_blank">
            <img src={github} alt="github-link" />
          </a>
          <a href="https://www.linkedin.com/in/annasybingco" target="_blank">
            <img src={linkedIn} alt="linked-in-link" />
          </a>
          <a href="https://www.gmail.com" target="_blank">
            <img src={gmail} alt="gmail-link" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;
