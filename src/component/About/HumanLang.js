import { useState, useEffect } from 'react';

const HumanLanguage = () => {
  const DataArray = [
    { name: "English Fluent", limit: 100 },
    { name: "German Fluent", limit: 100 },
    { name: "Bulgarian Native", limit: 100 },
    { name: "Turkish Bilingual", limit: 70 },
  ];

  const [HumanArray, setHumanArray] = useState(DataArray.map(() => 0));

  useEffect(() => {
    const intervals = DataArray.map((item, index) => {
      const interval = setInterval(() => {
        if (HumanArray[index] < item.limit) {
          setHumanArray((prevHuman) => {
            const newHuman = [...prevHuman];
            const incrementedHuman = newHuman[index] + 0.2;
            return newHuman.map((value, i) => (i === index ? Math.min(incrementedHuman, item.limit) : value));
          });
        }
      }, 1);
      return interval;
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [HumanArray, DataArray]);

  return (
    <div className='ProgramLanguage'>
      <h2>Programming Languages</h2>
      <div className='Language'>
        {DataArray.map((item, index) => (
          <div key={index} className=''>
            <div className='progressBar'>
              <p><b>{item.name}</b></p>
              <div className='Progresslimites' style={{ width:"100%", backgroundColor: '#181818da', height: '10px' , borderRadius:"10px" }}>
              <div className='progress' style={{ width: `${(HumanArray[index])}%`, backgroundColor: '#ffdb70', height: '10px' , borderRadius:"10px" }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HumanLanguage ;
