import heroStyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";
import { Mulish } from "next/font/google";

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'],
})

const EventSection = ({ title, description, imageUrl }) => {
    return (<main className={heroStyles.main_section}>
        <div className={styles.container}>
            <div className={styles.grid_two_section}>
                <div className={heroStyles.hero_content}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className={heroStyles.hero_image}>
                    <Image src={imageUrl} alt="hero image" width={450} height={450} />
                </div>
            </div>
        </div>
        {/*waves effect */}
        {/* <div className={heroStyles['custom_shape_divider_bottom']}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className={heroStyles['shape-fill']}></path>
            </svg>
        </div> */}
    </main>);
};

export default EventSection;