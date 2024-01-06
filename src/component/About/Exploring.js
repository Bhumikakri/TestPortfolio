const Explor = () => {
  const TempData = [
    {
      imgg: "https://oktayshakirov.com/assets/images/icon-video.svg",
      headName: "Visual Storytelling",
      desc: "Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.",
    },
    {
      imgg: "https://oktayshakirov.com/assets/images/icon-multimedia.svg",
      headName: "Digital Content Creation",
      desc: "Creatiing dynamic digital content, such as 3D models, graphics or animations.",
    },
  ];
  return (
    <div className="Explor">
      <h1>Exploring Creativity</h1>
      <div className="PrimaryContents">
        {TempData.map((item) => {
          return (
            <div className="Focus">
              <div className="aboutimg">
                <img src={item.imgg} />
              </div>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  justifyItems: "center",
                }}
              >
                <h2>{item.headName}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explor;
