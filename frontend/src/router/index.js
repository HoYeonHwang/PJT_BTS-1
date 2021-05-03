import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/Login.vue";
import Character from "../components/Login/Character.vue";
import Camera from "../components/Login/Camere.vue";
import Join from "../views/Join/Join.vue";
import FindPw from "../views/FindPw/FindPw.vue";
import MyPage from "../views/MyPage/MyPage.vue";
import Change from "../components/FindPw/Change.vue";
import Confirm from "../components/FindPw/Confirm.vue";
import Computer from "../views/Computer/Computer.vue";
import Board from "../components/Computer/Board.vue";
import ContentDetail from "../components/Computer/ContentDetail.vue";
import Cook from "../views/Cook/Cook.vue";
import Library from "../views/Library/Library.vue";
import Calender from "../components/Library/Calender.vue";
import Youtube from "../components/Library/Youtube.vue";
import Monthly from "../components/Library/Monthly.vue";
import Weekly from "../components/Library/Weekly.vue";
import Rest from "../views/Rest/Rest.vue";
import Play from "../views/Play/Play.vue";
import Office from "../views/Office/Office.vue";
import WebCam from "../common/WebCam/WebCam.vue";
import joinUserInfo from "../components/Join/Join_1.vue";
import joinUserCheck from "../components/Join/Join_2.vue";
import CamSetting from "../views/MyPage/CamSetting.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    children: [
      {
        path: "character",
        name: "Character",
        component: Character,
      },
      {
        path: "camera",
        name: "Camera",
        component: Camera,
      },
    ],
  },
  {
    path: "/join",
    name: "Join",
    component: Join,
    children: [
      {
        path: "",
        name: "joinUserInfo",
        component: joinUserInfo
      },
      {
        path: "check",
        name: "joinUserCheck",
        component: joinUserCheck
      }
    ]
  },
  {
    path: "/findpw",
    name: "FindPw",
    component: FindPw,
    children: [
      {
        path: "confirm",
        name: "Confirm",
        component: Confirm,
      },
      {
        path: "change",
        name: "Change",
        component: Change,
      },
    ],
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/camSetting",
    name: "CamSetting",
    component: CamSetting,
  },
  // { // 게임 부분 수정 필요 - 잘모름
  //   path: '/school',
  //   name: 'School',
  //   componenet: School,
  //   children: [
  //     {
  //       path:"",
  //       name:"SchoolList",
  //       component: SchoolList
  //     },
  //   ]
  // },
  {
    path: "/computer",
    name: "Computer",
    component: Computer,
    children: [
      {
        path: "webcam",
        name: "WebCam",
        component: WebCam,
      },
      {
        path: "board",
        name: "Board",
        component: Board,
      },
      {
        path: "content",
        name: "ContentDetail",
        component: ContentDetail,
      },
    ],
  },
  {
    path: "/cook",
    name: "Cook",
    component: Cook,
    children: [
      {
        path: "webcam",
        name: "WebCam",
        component: WebCam,
      },
    ],
  },
  {
    path: "/library",
    name: "Library",
    component: Library,
    children: [
      {
        path: "youtube",
        name: "Youtube",
        component: Youtube,
      },
      {
        path: "calender",
        name: "Calender",
        component: Calender,
        children: [
          {
            path: "monthly",
            name: "Monthly",
            component: Monthly,
          },
          {
            path: "weekly",
            name: "Weekly",
            component: Weekly,
          },
        ],
      },
    ],
  },
  {
    path: "/rest",
    name: "Rest",
    component: Rest,
    children: [
      {
        path: "webcam",
        name: "WebCam",
        component: WebCam,
      },
    ],
  },
  {
    path: "/play",
    name: "Play",
    component: Play,
  },
  {
    path: "/office",
    name: "Office",
    component: Office,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
