import heroStyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";
import { Mulish } from "next/font/google";

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'],
})

const HeroSection = ({ title, imageUrl }) => {
    return (<main className={heroStyles.main_section}>
        <div className={styles.container}>
            <div className={styles.grid_two_section}>
                <div className={heroStyles.hero_content}>
                    <h1>{title}</h1>
                    <Link href="/events">
                        <button className={mulish.className}>
                            Become Member
                        </button>
                    </Link>
                </div>
                <div className={heroStyles.hero_image}>
                    <Image src={imageUrl} alt="hero image" width={400} height={400} />
                </div>
            </div>
        </div>

    </main>);
};

export default HeroSection;