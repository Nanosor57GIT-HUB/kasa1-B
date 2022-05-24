import React, { useState } from "react";

const AccordeonAbout = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="Accordeon-about">
      <div className="accordeonContainer">
        {data.map((item, i) => (
          <div className="item" key={item.title}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <img
                src={process.env.PUBLIC_URL + "/componentsIMG/arrow-dropdown.svg"}
                alt="arrow accordeon"
                className="accordeonArrow"
                style={{
                  transform: selected === i ? "rotate(-180deg)" : null,
                  transition: "0.2s",
                }}
              />
            </div>

            <div
              className={selected === i ? "content show" : "content"}
              key={i.content}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

 const data = [
   {
     title: "Fiabilité",
     content:
       "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
   },
   {
     title: "Respect",
     content:
       "La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
   },
   {
     title: "Service",
     content:
       "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
   },
   {
     title: "Responsabilité",
     content:
       "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
   },
 ];

export default AccordeonAbout;
