import React from "react";

import Name from "./Name";

const NamesList = ({ data, filter, favourites, addFavourite }) => {
  return (
    <ul>
      {data
        .filter((person, i) => {
          return (
            favourites.indexOf(person.id) === -1 &&
            !person.name.toLowerCase().indexOf(filter.toLowerCase())
          );
        })
        .map((person, i) => {
          return (
            <Name
              id={person.id}
              key={i}
              info={person}
              handleFavourite={(id) => addFavourite(id)}
            />
          );
        })}
    </ul>
  );
};
export default NamesList;
