const PrimeryF = () => {
  const contentt = [
    {
      imgg: "https://oktayshakirov.com/assets/images/icon-dev.svg",
      headName: "Web Design & Development",
      desc: "Creating attractive, easy-to-use websites that work well for businesses and individuals online.",
    },
    {
      imgg: "https://oktayshakirov.com/assets/images/icon-app.svg",
      headName: "Mobile Apps & Games",
      desc: "Creating and developing engaging mobile apps and games for iOS and Android devices.",
    },
    {
      imgg: "https://oktayshakirov.com/assets/images/icon-frameworks.svg",
      headName: "Development Solutions",
      desc: "Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.",
    },
    {
      imgg: "https://oktayshakirov.com/assets/images/icon-marketing.svg",
      headName: "Marketing & SEO",
      desc: "Using SEO and marketing strategies to boost online visibility and promote products or services.",
    },
  ];

  return (
    <div className="PrimaryContainer">
      <h1>Primary Focus</h1>
      <div className="PrimaryContents">
        {contentt.map((item) => {
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
                //   alignItems: "center",
                gap:"1rem",
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

export default PrimeryF;
