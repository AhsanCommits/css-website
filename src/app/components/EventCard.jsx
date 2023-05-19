import styles from '@/app/styles/common.module.css'
import Image from "next/image";
import Link from "next/link";

const EventCard = (props) => {

    return (<>
        <div className={styles.card}>
            <div className={styles.card_image}>
                <Image src={props.imgSrc} alt={props.title} width={350} height={350} />
            </div>
            <div className={styles.card_data}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <Link href={props.url}>
                    <button>
                        Register Now
                    </button>
                </Link>
            </div>
        </div>
    </>)
};

export default EventCard;