import style from "./survey.module.css";

const Survey = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.title}>{"sAIN UU"}</div>
        <div className={style.fire}>@</div>
      </div>
      <div className={style.footer}>
        <div className={style.left}>
          <h3>2-3 minut</h3>
          <h2>300 coin</h2>
        </div>
        <div className={style.right}>
          <img
            className={style.image1}
            src="https://edgy.app/wp-content/uploads/2018/04/Social-media-report-feature-image-970x863.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Survey;
