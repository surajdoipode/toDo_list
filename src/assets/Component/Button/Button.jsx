import styles from "./Button.module.css";
const Button = ({value, lable , onClick ,typeColor }) => {
  const buttonHandelar = (e) => {
    console.log("kjasljfdl", e.target.value);
    onClick(e)
  };
  return (
    <>
      <button className={styles[typeColor]} value={value} onClick={buttonHandelar} >
        {lable}
      </button>
    </>
  );
};
export default Button;
