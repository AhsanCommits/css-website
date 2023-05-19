import EventSection from "@/app/components/EventSection";

const Page = () => {
    return (
        <>
            <EventSection title={`WEB Developement Bootcamp`} description={`Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.`} imageUrl={"/webdev1.png"} />
            <hr border="2px" width="700vw" />
            <EventSection title={`Graphic Designing`} description={`Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.`} imageUrl={"/gfx1.png"} customStyle={`order:1`} />
            <hr border="2px" width="700vw" />
            <EventSection title={`Media`} description={`In mass communication, media are the communication outlets or tools used to store and deliver information or data. The term refers to components of the mass media communications industry, such as print media, publishing, the news media, photography, cinema, broadcasting, digital media, and advertising`} imageUrl={"/socialmedia1.png"} />
            <hr border="2px" width="700vw" />
            <EventSection title={`Marketing`} description={`Marketing is the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large.`} imageUrl={"/marketing1.png"} customStyle={`order:1`} />
        </>
    );
};

export default Page;