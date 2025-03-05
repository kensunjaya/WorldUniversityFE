import Navbar from "../components/navbar";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-screen">
      <Navbar />
      <div className="mt-[5rem] w-[50%] space-y-5">
        <h1 className="text-4xl font-bold">{'About WorldUniversity'}</h1>
        <p>{"WorldUniversity is more than just a platform. It's a vision to empower students with knowledge and global awareness. Our mission is to provide comprehensive and accessible information about countries worldwide, enabling students to explore and understand the diverse world we live in."}</p>
        <p>{"At WorldUniversity, our vision is to create a bridge between students and the vast expanse of global knowledge. We aim to foster a deeper understanding of different cultures, histories, and geographies, helping students make informed decisions about their academic and personal journeys."}</p>
      </div>
    </div>
  )
}

export default About;