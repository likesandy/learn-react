import { useContext } from "react";
import { ThemeContext, UserContext } from "../../App";

export default function useUserContex() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return [user, theme];
}
