import "./Footer.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <a className="text-primary-p" href="https://lucasnp.com" target="_black">
        © {year} by <span>lucasnp</span>
      </a>
    </div>
  );
};

export default Footer;
