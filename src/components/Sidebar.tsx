import styles from "./Sidebar.module.scss";
import userImage from "../assets/png/samantha.png";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const sidebarNavLinks = ["dashboard", "expenses", "wallets", "summary", "accounts", "settings"];

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={userImage} />
              <p className={styles.notifications}>4</p>
            </div>
            <p className={styles.userName}>Samantha</p>
            <p className={styles.userEmail}>samantha@email.com</p>
          </div>
          <nav className={styles.sidebarNav}>
            <ul>
                {sidebarNavLinks.map(sidebarNavLink =>
                    <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                        <Link
                        className={
                            location.pathname === `/${sidebarNavLink}`
                            ? styles.sidebarNavLinkActive
                            : styles.sidebarNavLink
                        }
                        to={`/${sidebarNavLink}`}
                        >
                        {sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}
                        </Link>
                    </li>                    
                )}
              
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
