import React from "react";
import Footer from "/src/components/layout/footer/footer";
import Header from "/src/components/layout/header/header";
import MainPage from "/src/components/pages/main-page/main-page";
import "./style.css";

export default function PageWrapper(prop) {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage {...prop} />
      </main>
      <Footer />;
    </>
  );
}
