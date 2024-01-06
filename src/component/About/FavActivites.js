const FavActivities=()=>{

    const Activities=[
        {
            ImageUrl:"https://oktayshakirov.com/assets/images/finances.png",
            title:"Investments",
            desc:"Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment"
        },
        {
            ImageUrl:"https://oktayshakirov.com/assets/images/music.png",
            title:"Music",
            desc:"Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians"
        },
        {
            ImageUrl:"https://oktayshakirov.com/assets/images/traveling.png",
            title:"Traveling",
            desc:"Exploring new places, learn about different cultures and create lifelong memories."
        },
        {
            ImageUrl:"https://oktayshakirov.com/assets/images/camera.png",
            title:"Photography",
            desc:"Capturing precious moments and memories through the lens of a camera."
        },
    ]
    return(
        <div className="FavoriteActivity">
            <h1>Favorite Activities</h1>
            <div className="FavoriteActivityContainer">
                {
                   Activities.map((item,i)=>{
                    return<div key={i} className="ActivityContainer">
                        <img src={item.ImageUrl}/>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                   }) 
                }

            </div>
        </div>
    );
}

export default FavActivities;