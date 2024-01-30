import { Link } from "react-router-dom";

const NavigationItem = ({ link, title }) => {
  return (
    <li className="">
      <a>
        <Link to={link}>{title}</Link>
      </a>
    </li>
  );
};

export default NavigationItem;
