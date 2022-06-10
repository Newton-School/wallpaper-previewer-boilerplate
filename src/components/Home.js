import React from "react";
import { useState, useEffect } from "react";
import './Home.css'
const arr = [
  {
    name: "wallpaper1",
    src: "https://image.shutterstock.com/image-photo/3d-wallpaper-design-waterfall-sea-260nw-1380925703.jpg",
  },
  {
    name: "wallpaper2",
    src: "https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    name: "wallpaper3",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZ2GX8hgb56S9Sj2VsawX4Lyxai81g7UnPg&usqp=CAU",
  },
  {
    name: "wallpaper4",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcYOSWeTM8ZHs0d4c2LzVUE04YFtrwoZyew&usqp=CAU",
  },
  {
    name: "wallpaper5",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIP-9wcmoUGlNyzbEfhgQVopE3q1NoCnrA8w&usqp=CAU",
  },
  {
    name: "wallpaper6",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS984ANiEOw8nhupi3v1TdxYl_x3Rsf4eZ6eg&usqp=CAU",
  },
];

export default function Home() {
 
  return (
    <>
      <div className="preview">
        { arr.map((o) => {
          return (
            <>
            <div className="container">
              <div >

                <img className="imageset" data-tid={o.src} src={o.src}></img>
              </div>
              <div>
                <p>{o.name}</p>

              </div>
            </div>
            </>
          );
        })}
      </div>
        
    </>
  );
}
