import classes from "./loader.module.css";

/**
 *   Loader was copied from: https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje
 **/
export const Loader = () => {
  return (
    <div className={classes["spinner-container"]}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Loader;
