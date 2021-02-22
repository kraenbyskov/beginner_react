import React, { useEffect, useState } from "react";

const Person = ({ data }) => {
  const { firstName, lastName, age = "No Age", male } = data;
  return (
    <p>
      Name : {firstName} {lastName} Age: {age} Gender -
      {male ? "Male" : "Female"}
    </p>
  );
};

function App() {
  const persons = [
    { firstName: "John", lastName: "Snow", age: 22, male: true },
    { firstName: "Tony", lastName: "Stark", male: true },
    { firstName: "Bruce", lastName: "Banner", age: 20, male: false },
  ];
  return (
    <>
      {persons.map((data) => (
        <Person data={data} />
      ))}
    </>
  );
}
export default App;
