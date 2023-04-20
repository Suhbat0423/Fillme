import style from "./survey.module.css";

const Surveys = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <button>+ СУДАЛГАА НЭМЭХ </button>
        <p>Таны үлдэгдэл оноо: {5000}</p>
      </div>
      <div className={style.containerSurvey}>
        <div className={style.search}></div>
        <div className={style.surveys}></div>
      </div>
    </div>
  );
};

export default Surveys;
