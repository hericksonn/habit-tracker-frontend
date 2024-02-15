'use client'
import React from "react";

import dayjs from "../components/dayjs";
import Header from "../components/header";

export default function Home() {
  
  const day_str = dayjs().format('dddd');
  const day_fmt = dayjs().format('DD/MM');
  const [progress, setProgress] = React.useState(0);

  setTimeout(() => { setProgress(50) }, 100);

  return (
    <>
      <Header />


      <article className="container">

        <section className="d-lg-flex justify-content-between align-items-center py-3">
          <div className="font-cursive fw-bold text-center">
            <div className="h5 text-capitalize text-muted">{day_str}</div>
            <div className="h1">{day_fmt}</div>
          </div>
          <div className="text-center">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle shadow-4" style={{width: '60px'}} />
            <div className="h6 text-muted">Hello, Henrinaldo</div>
          </div>
        </section>

        <section className="row">
          <div className="col-lg-6">
            <div className="bg-light p-3 h-100 rounded">
              <div className="h6 font-cursive fw-bold">Follow your habits</div>
              <div className="bg-white border rounded shadow-sm p-4 mx-lg-5">
                <div className="d-flex align-items-center">
                  <span className="position-relative">
                    <svg width="77" height="77" viewBox="0 0 80 80" className="circular-progress" style={{'--progress': progress}}>
                      <circle className="bg"></circle>
                      <circle className="fg"></circle>
                    </svg>
                    <div className="position-absolute top-50 start-50 translate-middle fw-bold text-muted">{progress}%</div>
                  </span>

                  <div className="px-3">
                    <div className="fw-bold h5 m-0">Completed</div>
                    <div className="text-muted small">Daily habits</div>
                  </div>

                  <div className="ms-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-circle-fill text-primary" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-light p-3 h-100 rounded">
              <div className="h6 font-cursive fw-bold">Top 3 habits</div>
              <div className="mx-lg-5">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="bg-white border rounded shadow-sm p-4 text-truncate">
                      <img src="https://img.icons8.com/?size=50&id=Fop1BVxWFXhP&format=png" style={{width: '50px'}} className="p-2 bg-light shadow-sm rounded-circle" />
                      <div className="fw-bold h5 m-0">Drink Water</div>
                      <div className="text-muted small">500ml - 19/22</div>
                    </div>
                  </div>

                  <div className="col-lg-6 d-grid align-content-between">
                    <div className="bg-white border rounded shadow-sm p-2 text-truncate">
                      <div className="d-flex align-items-center">
                        <img src="https://img.icons8.com/?size=50&id=Fop1BVxWFXhP&format=png" style={{width: '30px'}} className="p-1 bg-light shadow-sm rounded-circle" />
                        <div className="ps-4">
                          <div className="fw-bold m-0">Drink Water</div>
                          <div className="text-muted small">500ml - 19/22</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border rounded shadow-sm p-2 text-truncate">
                      <div className="d-flex align-items-center">
                        <img src="https://img.icons8.com/?size=50&id=Fop1BVxWFXhP&format=png" style={{width: '30px'}} className="p-1 bg-light shadow-sm rounded-circle" />
                        <div className="ps-4">
                          <div className="fw-bold m-0">Drink Water</div>
                          <div className="text-muted small">500ml - 19/22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="text-end font-cursive text-muted">All habits</div>
          </div>

          <div className="col-lg-6">
            <div className="text-end font-cursive text-muted">+ New Habit</div>
          </div>
        </section>

      </article>
    </>
  );
}
