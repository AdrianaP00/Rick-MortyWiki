import React from "react";
import styles from "./Card.module.scss";
 export default function Card({ results }) {
        let display;
      
        if ({results}) {
                display = results.map((x) => {
                let { id, image, name, status, location } = x;
              
                  return (
                    <div
                      key={id}
                      className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
                    >
                    </div>
                );
              });
              
        }
        else{
          display = "No Characters Found :/";
        }
      
        return <>{display}</>;
      }