import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-dark footer text-light gap-3 p-3">
      <div className="d-flex gap-5 fs-2">
        <a
          className="link-light icon-social"
          href="https://www.linkedin.com/in/thangapandi-k/"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          className="link-light icon-social"
          href="mailto:thangapandi.chella@gmail.com"
        >
          <AiOutlineMail />
        </a>
        <a
          className="link-light icon-social"
          href="https://github.com/Thangapandi-K"
          target="_blank"
        >
          <AiOutlineGithub />
        </a>
      </div>
      <div className="fs-5"> 2025 &copy; Thangapandi_K</div>
    </div>
  );
};

export default Footer;
