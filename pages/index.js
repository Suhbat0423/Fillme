import Navbar from "../Components/Navbar/Navbar";
import style from "./index.module.css";
import Step from "../Components/Step";

const Home = () => {
  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.container}>
        <div className={style.leftCon}>
          <h2>
            Хүссэн байгуулгынхаа судалгааг бөглөн саналаа хуваалцаж оноогоо
            цуглуулж урамшуулалаа ав.
          </h2>
          <button className={style.button1}>СУДАЛГАА БӨГЛӨХ</button>
        </div>
        <div className={style.rightCon}>
          <img
            className={style.image}
            src="https://scontent.fuln6-1.fna.fbcdn.net/v/t1.15752-9/342041790_755485052654500_1544022428647581205_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=jqKRQyQSPPkAX_Aco-J&_nc_ht=scontent.fuln6-1.fna&oh=03_AdTFE-ycaCusFY5-gfy0mah-o1sEpXc4OaX1ZbaGOh9s0g&oe=6464C249"
            alt=""
          />
        </div>
      </div>
      <div className={style.steps}>
        <h2>Урамшуулал авах алхамууд</h2>
        <div className={style.stepCon}>
          <Step
            step="АЛХАМ НЭГ"
            title="БҮРТГҮҮЛЭХ"
            text="Бидэнтэй нэгдэж санал 
            бүрээ үргэлж үнэ цэнтэй байлга."
          />
          <Step
            step="АЛХАМ ХОЁР"
            title="САНАЛАА ХУВААЛЦАХ"
            text="Дурын брэндийн судалгааг бөглөж 
            саналаа хуваалцан оноогоо цуглуулах."
          />
          <Step
            step="АЛХАМ ГУРАВ"
            title=" УРАМШУУЛАЛ АВАХ"
            text="Цуглуулсан оноогоо хүссэн төрлийнхөө
            урамшуулалаар солин аваарай."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
