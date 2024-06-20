'use client'


import React from "react";
import styles from "../page.module.css";


export default function Closet() {

  function login(formData: { get: (arg0: string) => any }) {
    const login = formData.get("login");
    localStorage.setItem("login", JSON.stringify(login));
  }

  return (
    <>
    <div className={styles.header}>
        <h2>Шкаф</h2>
        <div className={styles.hiUser}>
          <h3>Привет,&nbsp;Егор</h3>
          <img src="/userAvatar.png" className={styles.userAvatar}/>
        </div>
      </div>
      </>
  );
}
