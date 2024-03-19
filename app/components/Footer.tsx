const Footer = () => {
const current_year = new Date().getFullYear();
  return (
    <footer>
      <div className="text-center py-4">
        <p>© {current_year}, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;