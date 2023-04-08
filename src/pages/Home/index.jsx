import { useEffect, useState } from "react";
import { Movies } from "../../components/Movies";
import { Menu } from "../../components/Menu";

export const HomePage = () => {
  return(
    <div>
      <Menu />
      <Movies />
    </div>
  );
}