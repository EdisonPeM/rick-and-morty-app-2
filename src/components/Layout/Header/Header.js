import clx from "classnames";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const { pathname, key } = useLocation();
  const showBackButton = key !== "default";
  const handleComeBack = () => navigate(-1);

  const linkClassname = ({ isActive }) =>
    clx(
      styles["header__nav-link"],
      isActive && styles["header__nav-link--active"]
    );

  const preventDuplicate = (to) => (ev) => {
    if (to === pathname) {
      if (!(ev.ctrlKey || ev.altKey || ev.metaKey || ev.shishiftKey)) {
        ev.preventDefault();
        return;
      }
    }
  };

  return (
    <header className={styles["header"]}>
      <nav className={clx(styles["header__navbar"], "d-flex f-space-between")}>
        <div>
          {showBackButton && (
            <button
              onClick={handleComeBack}
              className={styles["header__nav-link"]}
            >
              Back
            </button>
          )}
        </div>

        <div>
          <NavLink
            className={linkClassname}
            onClick={preventDuplicate("/")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={linkClassname}
            onClick={preventDuplicate("/characters")}
            to="/characters"
          >
            Characters
          </NavLink>
          <NavLink
            className={linkClassname}
            onClick={preventDuplicate("/locations")}
            to="/locations"
          >
            Locations
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
