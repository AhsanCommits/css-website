import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

const Header = () => {
    return (<header className={styles.main_header}>
        <div className={styles.navbar_brand}>
            <Link href="/">
                <Image src="/css_logo.png" alt="my logo image" width={65} height={80} />
            </Link>
        </div>
        <Navbar />
    </header>);
};

export default Header;