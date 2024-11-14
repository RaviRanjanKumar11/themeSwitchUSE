import { use } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function ThemeComponent({ canShow }) {
  if (canShow) {
    const theme = use(ThemeContext);
    return <div className={`theme-${theme}`}>Current Theme: {theme}</div>;
  }
  return <div>Theme is hidden</div>;
}

export default ThemeComponent;
