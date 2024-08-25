import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Car() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://image.bestreview.asia/wp-content/uploads/2022/06/chao-wang-menu-1.jpg" 
      className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Thai food is very delicious</h5>
        <p>อาหารไทยโบราณ มีหลายเมนู ที่มีประวัติศาสตร์อันยาวนานและอัตลักษณ์ทางรสชาติที่ไม่เหมือนใคร</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://static.cordonbleu.edu/Files/MediaFile/86673.jpg" 
      className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Thai food is very delicious</h5>
        <p>อาหารไทย ถือเป็นหนึ่งใน Soft Power ของไทยที่โดดเด่นและมีพลังมาก ๆ</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/618041312/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%9C%E0%B8%AA%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B8%A5%E0%B8%B2%E0%B8%81%E0%B8%AB%E0%B8%A5%E0%B8%B2%E0%B8%A2.jpg?s=2048x2048&w=is&k=20&c=do5q3uuCetopzO2B07zIuIYxMP4H_zMY3ptXZ8Tts28=" 
      className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Thai food is very delicious</h5>
        <p>พื้นหลังอาหารเอเชียที่มีส่วนผสมของการปรุงอาหารที่หลากหลาย</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}