import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.Ecj7WUambHhsWs2UF_FaJwHaE_?rs=1&pid=ImgDetMain"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kandy</h1>
          <h2>50 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/R.dade39779e7549015f83af8f8782e6e8?rik=IHFleItx%2by2chw&riu=http%3a%2f%2fwww.pearlceylon.com%2fimages%2fdestination%2fsigiriya%2fsigiriya-by-air.jpg&ehk=qBvBwGXJvH%2fks4lehtxalJjDvmSDg8BAUkxTRWpI%2bWo%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sigiriya</h1>
          <h2>40 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.archaeology.lk/wp-content/uploads/2020/11/galle_fort_sri_lanka_aerial_view_buddhika_dilshan.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Galle</h1>
          <h2>30 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
