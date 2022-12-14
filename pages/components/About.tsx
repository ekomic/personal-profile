

const About: React.FC = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-300">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello dear, I'm Chris, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I have been a part of the BLOCKCHAIN and web3 Community for nearly 6
              years and have a deep passion for it. I believe that BLOCKCHAIN is the
              future and can change the way in which we think about digital
              cash. I also love blockchain technology and have a strong belief
              in a Decentralized internet where users can take ownership in
              things and won't have to feel lure by centralized entities.
            </p>
          </div>
        </div>
      </div>
    </div>
  ); 
 
}

export default About