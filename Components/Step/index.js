import style from "./Step.module.css";

const step = (props) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>
          <h4>{props.step}</h4>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787__340.png"
          alt=""
        />
      </div>
      <div className={style.footer}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default step;
