import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cards() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img
              src="https://img.wongnai.com/p/1920x0/2018/09/11/60880f95ecfd4ff68756ec9e680a6f3f.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">ยำใหญ่</h5>
              <p className="card-text">
              ยำใหญ่เป็นอาหารที่มีรสชาติซับซ้อนและเต็มไปด้วยความอร่อยในทุกคำ น้ำยำที่เข้มข้นเป็นหัวใจหลักของเมนูนี้ การผสมผสานของรสเปรี้ยว เค็ม หวาน และเผ็ดทำให้ยำใหญ่เป็นอาหารที่สามารถทานได้โดยไม่เบื่อ รสชาติของเนื้อสัตว์ที่นุ่มและกรอบจากผักสดทำให้ยำใหญ่เป็นอาหารที่มีความหลากหลายทั้งในแง่ของรสชาติและสัมผัส

ยำใหญ่เป็นเมนูที่เหมาะสำหรับคนที่ชื่นชอบอาหารไทยรสจัดจ้านและชอบความหลากหลายในเมนูเดียว ด้วยการผสมผสานของวัตถุดิบที่หลากหลายและน้ำยำที่ปรุงอย่างประณีต ยำใหญ่จึงเป็นหนึ่งในเมนูที่สามารถทำให้ผู้ที่ได้ลิ้มลองรู้สึกประทับใจในความอร่อยและความพิถีพิถันในการปรุงอาหารของไทย
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img
              src="https://img.wongnai.com/p/400x0/2019/05/27/bccc8e39158f42bbba769b52016b6079.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">จอแหร้ง</h5>
              <p className="card-text">
              ชวนเข้าครัวมาทำเมนูอาหารใต้โบราณกับเมนู “จอแหร้ง” เมนูพื้นบ้านจากจังหวัดพังงา ถ้าอยากรู้ว่าหน้าตา และวิธีการทำเป็นอย่างไรก็มาดูกันเลย!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img
              src="https://img.wongnai.com/p/1920x0/2019/04/20/ca7c1df1dcf949799034706d2962748d.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">แกงคั่วหัวตาลกุ้งสด</h5>
              <p className="card-text">
              ชวนเข้าครัวมาทำเมนูแกงโบราณที่หากินได้ยากกับเมนู “แกงคั่วหัวตาลกุ้งสด” รสชาติเข้มข้นโดนใจทุกเพศทุกวัยแน่นอน ถ้าใครอยากรู้ว่าทำอย่างไรก็ตามมาเลย!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}