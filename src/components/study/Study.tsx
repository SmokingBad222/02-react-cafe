import clsx from "clsx";
import css from "./Study.module.css";


interface AppProps {
  type?: "success" | "error";
}

export default function Study({ type }: AppProps) {
  return (
    <p className={clsx(css.alert, type && css[type])}>
      This is a default alert text
    </p>
  );
}