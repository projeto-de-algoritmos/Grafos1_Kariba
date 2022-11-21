import React from "react"
import CytoscapeComponent from 'react-cytoscapejs';

const GraphComponent = ({graph}) => {

  return (
    <>
      <CytoscapeComponent
        elements={graph}
        style={{ width: '100%', height: '600px', backgroundColor: "lightgray" }}
        layout={{
          name: "circle",
          fit: true,
          directed: true
        }}
        stylesheet={[
          {
            selector: 'edge',
            style: {
              width: 5,
              "line-color": "black",
              "target-arrow-color": "black",
              "target-arrow-shape": "triangle",
              "curve-style": "bezier",
            }
          }
        ]}
        cy={(cy) => {
          graph.forEach((elem) => {
            cy.elements(`node#${elem.data?.id}`).css({
              "width": "70px",
              "height": "70px",
              "background-image": `url(${elem.data?.image ?? "https://freesvg.org/img/Weird-shadow-of-a-dog-by-Rones.png"})`,
              "background-fit": "contain",
              "background-color": `${elem.data?.color ? elem.data?.color : "red"}`
            });
          });
        }}
      />
    </>
  )
}

export {
  GraphComponent
}