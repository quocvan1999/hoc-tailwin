import React from "react";

const TravelShopping = () => {
  const images = [
    {
      id: 1,
      img: "https://berghof.cc/files/images/mayrhofen/winter-landschaft-foto-paul-suerth__19_.jpg",
    },
    {
      id: 2,
      img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/NAHPMyUfLTpfciZxsYlw/media/95bbe7bb-6295-466b-a123-b6621a76545c.jpeg",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1575014913113-390d3c83722c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="pt-10">
      <h1 className="text-center text-4xl font-semibold">Live anywhere</h1>
      <h3 className="text-center text-gray-400 mt-3 mb-9">
        Keep calm & travel on
      </h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-2 px-2 md:grid-cols-2 md:gap-4 md:px-4 lg:grid-cols-3">
        {images.map((image) => (
          <div key={image.id} className="w-full h-96">
            <img
              src={image.img}
              alt={image.id}
              className="w-full h-[80%] object-cover rounded-2xl"
            />
            <div className="h-20%">
              <h4 className="text-center mt-5 mb-1 font-semibold text-clip">
                Enjoy the great cold
              </h4>
              <p className="text-center text-gray-500 text-xs">
                6,879 properties
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelShopping;
