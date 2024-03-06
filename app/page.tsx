"use client";
//import styles from "./page.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import { Content } from "./Content-main/Content-main";
import { Content } from "./Content-main/page";
//import Sidebar from "./Sidebar/Sidebar";
import Sidebar from "./Sidebar/page";
export default function Home() {
  return (
    <div className="main-content d-flex px-5">
      <Content />
      <Sidebar />
    </div>
  );
}
