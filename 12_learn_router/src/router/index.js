import Home, {
  Artist,
  Download,
  Playlist,
  Recommended,
  Toplist,
} from "../pages/Home";
import About from "../pages/About";
import Mine from "../pages/Mine";
import User from "../pages/User";
import Produce from "../pages/Produce";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Detail2 from "../pages/Detail2";
import Detail3 from "../pages/Detail3";
import NoMatch from "../pages/NoMatch";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    routes: [
      {
        path: "/",
        component: Recommended,
        exact: true,
      },
      {
        path: "/home/toplist",
        component: Toplist,
      },
      {
        path: "/home/playlist",
        component: Playlist,
      },
      {
        path: "/home/artist",
        component: Artist,
      },
      {
        path: "/home/download",
        component: Download,
      },
    ],
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/produce",
    component: Produce,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/detail2",
    component: Detail2,
  },
  {
    path: "/detail3",
    component: Detail3,
  },
  {
    path: "/detail/id",
    component: Detail,
  },
  {
    component: NoMatch,
  },
];
export default routes;
