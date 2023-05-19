import heroStyles from "@/app/styles/herosection.module.css"
import styles from '@/app/styles/common.module.css'
import HeroSection from "@/app/components/HeroSection"
import EventSection from "@/app/components/EventSection";
import EventCard from "@/app/components/EventCard";

// import favicon from '@/app/Ahsanflixfavicon.ico';


const Page = () => {
  return (
    <>
      <HeroSection title={`Welcome To Computer 
Science Society`} imageUrl={"/home.png"} />
      <hr border="2px" width="700vw" />

      <section className={heroStyles.main_section}>
        <div className={styles.container}>
          <h1 style={{ color: "white", textAlign: "center" }}>COMPUTER SCIENCE SOCIETY</h1>
          <div className={styles.card_section}>
            <EventSection title={``} description={`CSS aims to provide a wide range of social and career activities to enable you to take time out from studying and relax in a friendly atmosphere with other students (and sometimes the staff too!). We encourage socializing within the de partment and interaction with other departments. Our aim is to try and break the "geeky" stigma associated with CS students.`} imageUrl={"/about.png"} imgWidth={500} imgHeight={500} />
          </div>
        </div>
      </section>
      <hr border="2px" width="700vw" />

      <section className={styles.eventSection}>
        <div className={styles.container}>
          <h1 style={{ color: "white", textAlign: "center" }}>Upcoming Events</h1>
          <div className={styles.card_section}>
            <EventCard title={`BlockChain`} description={`Blockchain.com is a cryptocurrency financial services company. The company began as the first Bitcoin blockchain explorer in 2011`} imgSrc={`/gfx1.png`} url={`/events`} />
            <EventCard title={`BlockChain`} description={`Blockchain.com is a cryptocurrency financial services company. The company began as the first Bitcoin blockchain explorer in 2011`} imgSrc={`/marketing1.png`} url={`/events`} />
            <EventCard title={`BlockChain`} description={`Blockchain.com is a cryptocurrency financial services company. The company began as the first Bitcoin blockchain explorer in 2011`} imgSrc={`/webdev1.png`} url={`/events`} />
          </div>
        </div>
      </section>
      <hr border="2px" width="700vw" />
    </>
  );
};

export default Page;