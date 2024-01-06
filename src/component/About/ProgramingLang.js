import { useState, useEffect } from 'react';

const ProgramLanguage = () => {
  const DataArray = [
    { name: "JavaScript", per: "80%", limit: 80 },
    { name: "TypeScript", per: "50%", limit: 50 },
    { name: "PHP ", per: "40%", limit: 40 },
    { name: "Python ", per: "25%", limit: 25 },
    { name: "CSS", per: "95%", limit: 95 },
    { name: "HTML", per: "100%", limit: 100 },
  ];

  const [progressArray, setProgressArray] = useState(DataArray.map(() => 0));

  useEffect(() => {
    const intervals = DataArray.map((item, index) => {
      const interval = setInterval(() => {
        if (progressArray[index] < item.limit) {
          setProgressArray((prevProgress) => {
            const newProgress = [...prevProgress];
            const incrementedProgress = newProgress[index] + 0.2;
            return newProgress.map((value, i) => (i === index ? Math.min(incrementedProgress, item.limit) : value));
          });
        }
      },2);
      return interval;
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [progressArray, DataArray]);

  return (
    <div className='ProgramLanguage'>
      <h2>Programming Languages</h2>
      <div className='Language'>
        {DataArray.map((item, index) => (
          <div key={index} className=''>
            <div className='progressBar'>
              <p><b>{item.name}</b>{item.per}</p>
              <div className='Progresslimites' style={{ width:"100%", backgroundColor: '#181818da', height: '10px' , borderRadius:"10px" }}>
              <div className='progress' style={{ width: `${(progressArray[index])}%`, backgroundColor: '#ffdb70', height: '10px' , borderRadius:"10px" }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramLanguage;
