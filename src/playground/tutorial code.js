console.log("app.js is running");

// JSX
const appRoot = document.getElementById("app");
let app = {
  title: "indecision app",
  subtitle: "Put your life in the hands of a computer",
  options: ["work today", "sleep today", "play games today"]
};

const getSubtitle = subtitle => {
  if (subtitle) {
    console.log("subtitle returned");
    return subtitle;
  } else {
    console.log("empty subitle");
    return "no Subtitle";
  }
};

const getOptions = options => {
  console.log("function started");
  if (options.length > 0 && options.constructor === Array) {
    console.log("function true");

    let allOptions = options.map(option => <li> {option} </li>);

    console.log(allOptions);
    return allOptions;
  }
};

const onFormSubmit = e => {
  e.preventDefault();
  console.log("testing form submit");
  const option = e.target.elements.option.value;
  if (option) {
    console.log("option present");
    app.options.push(option);
    console.log(e.target.elements.option.value);
    e.target.elements.option.value = "";
    render();
  }
};

const removeAll = () => {
  app.options = [];
  render();
};

const chooseOption = () => {
  if (app.options.length > 0) {
    console.log("option choice goahead");
    alert(app.options[Math.floor(Math.random() * app.options.length)]);
  } else {
    alert("Please an options to the app");
  }
  render();
};

const render = () => {
  const template = (
    <div>
      <h1> indecision app </h1> {app.subtitle && <p> {app.subtitle} </p>}
      <p> Length: {app.options.length} </p>
      <ul> {getOptions(app.options)} </ul>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button> Add Option </button>
      </form>
      <button disabled={app.options.length === 0} onClick={chooseOption}>
        What should I do?
      </button>
      <button onClick={removeAll}>remove All</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
// let user = {
//   name: "Stefan Trinh",
//   age: 27,
//   locations: []
// };
// const getLocation = locations => {
//   console.log(locations);
//   if (locations.length > 0 && locations.constructor === Array) {
//     console.log("true");
//     return locations[Math.floor(Math.random() * locations.length)];
//   } else {
//     console.log(false);
//     return <p>unknown</p>;
//   }
// };

// let template2 = (
//   <div>
//     <p>{user.name}</p>
//     <p>{user.age}</p>
//     {getLocation(user.locations)}
//   </div>
// );

// // import React from "react";
// // import ReactDOM from "react-dom";

// console.log("app.js is running");

// const indecisionData = {
//   title: "Indecision App",
//   subtitle: " Which Library or Framework Should I learn Next?",
//   tool: [
//     "react",
//     "django",
//     "python",
//     "bootstrap",
//     "jQuery",
//     "Laverell",
//     "nodeJS",
//     "Angular"
//   ]
// };

// const returnableList =[];

// function chooseTool(toolList) {

//     for (let index = 0; index < indecisionData.tool.length; index++) {
//         returnableList.push(<li>{indecisionData.tool[index]}</li>)
//     }
//     console.log(returnableList)
//     return returnableList
// }

// //JSX
// let counter = 0
// const template = (
//   <div>
//     <h1>{indecisionData.title}</h1>
//     {indecisionData.subtitle && <p>{indecisionData.subtitle}</p>}
//     {indecisionData.tool.length > 0 ? <p>Here are your Options</p> : <p>There are No Options</p>}
//     <ul>
//         {chooseTool(indecisionData.tool)}
//     </ul>
//   </div>
// );

// // ------------------------------
// const user = {
//   name: "Stefantrinh1",
//   age: "27",
//   location: "London",
//   template: templateTwo
// };

// function checkLocation(location) {
//     if (location) {
//         return  <p>Location: {location}</p>
//     }
//     //else not needed as undefined will be the output and react does not show undefined
// }

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : "anonymous"}</h1>
//     {(user.age && user.age>18) && <p>Age :{user.age}</p>}
//    {checkLocation(user.location)}
//   </div>
// );
// // var template = React.createElement(
// //     "p",
// //     null,
// //     "This is JSX from app.js"
// //   );

// const appRoot = document.getElementById("app");
// // ReactDOM.render(templateTwo, appRoot);

// const app2Div = document.getElementById("app2");

// // let templateList = {
// //     "template": appRoot,
// //      "templateTwo":app2Div,}

// let templateList = [template, templateTwo];

// let rootList = [appRoot, app2Div];

// let currentIndex = 0;

// templateList.forEach(i => {
//   ReactDOM.render(i, rootList[currentIndex]);
//   currentIndex += 1;
//   console.log(currentIndex);
// });

// "use strict";

// var multipler = {
//   numbers: [1, 2, 3],
//   multiplyBy: 2,
//   divideBy: 2,
//   multiply: function multiply() {
//     var _this = this;

//     return this.numbers.map(function(num) {
//       return num * _this.multiplyBy;
//     });
//   },
//   divide: function divide() {
//     var _this2 = this;

//     return this.numbers.map(function(num) {
//       return num / _this2.divideBy;
//     });
//   }
// };

// console.log(multipler.multiply());
// console.log(multipler.divide());
