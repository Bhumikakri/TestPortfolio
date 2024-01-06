import './more.css';

const More = () => {
  const Contains = [
    {
      Projecturl:
        "https://oktayshakirov.com/assets/images/projects/pigletz.jpg",
      pice: "Marketing & BizDev",
      Name: "Pigletz",
      details:
        "I create and manage the Pigletz community's social media presence, including producing and editing high-quality Web3 content for their YouTube channel. I also work on expanding the community's reach and impact through partnerships in the Web3 space.",
      button: [
        {
          icon: "🌐",
          link: "Website",
        },
        {
          icon:"📷",
          link: "Instagram",
        },
        {
          icon: "📺",
          link: "YouTube",
        },
      ],
    },
    {
      Projecturl:
        "https://oktayshakirov.com/assets/images/projects/sha-beats.jpg",
      pice: "Beat Making",
      Name: "Music Production",
      details:
        "Produced over 100 instrumentals in different genres, collaborated with artists and my beats are on popular streaming platforms like Spotify, iTunes, Amazon and Deezer. They can also be purchased exclusively on my beatstore for musicians to create their unique sound.",
      button: [
        {
          icon: "🎵",
          link: "Spotify",
        },
        {
          icon: "📷",
          link: "Instagram",
        },
        {
          icon: "📺",
          link: "YouTube",
        },
      ],
    },
    {
      Projecturl:
        "https://oktayshakirov.com/assets/images/projects/sha-pixels.png",
      pice: "Multimedia Design",
      Name: "Digital Content Creation",
      details:
        "My digital art portfolio, which includes a wide collection of graphic designs, 3D models and short video animations created for various purposes. I have long experience working with popular softwares like Adobe Photoshop, After Effects, Premiere Pro and Blender.",
      button: [
        {
          icon: null,
          link: null,
        },
        {
          icon:"📷",
          link: "Instagram",
        },
        {
          icon: null,
          link: null,
        },
      ],
    },
  ];

  return (
    <div className="More">
    {Contains.map((item, index) => (
      <div className='moreContainer' key={index}>
        <div className='MoreImg'>
          <img src={item.Projecturl} alt={item.Name} />
        </div>
        <div className='moreContents'> 
          <h3>{item.pice}</h3>
          <h1>{item.Name}</h1>
          <p>{item.details}</p>
          {item.button.map((data, btnIndex) => (
            <button key={btnIndex}>
              {data.icon ? (
                <span>{data.icon}</span>
              ) : (
                data.link
              )}
              <span>{data.link}</span>
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
);
};


export default More;
