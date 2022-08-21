import studentmentor from "../../images/studentmentor.png";
import ecommcart from "../../images/ecommcart.png";
import todolist from "../../images/todolist.png";
import emailpass from "../../images/emailpass.png";

const projectData = [
  {
    title: "To Do List",
    imgSrc: todolist,
    projectDesc: `Simple Todo List created using React.
        This project which enables the user to add the to do list and change
        it's completed status`,
    deployLink:
      "https://62b1b6475562ba321466c1a0--stalwart-macaron-f8b56d.netlify.app/",
    frontEndLink: "https://github.com/SaiChakri-d/simple-todoList-react",
    backEndLink: "",
  },
  {
    title: "Simple e-Commerce Shopping Cart",
    imgSrc: ecommcart,
    projectDesc: `Simple eCommerce Shopping Cart created using React.
        This project which enables the user to add the available item to the shop cart and remove the added item from the cart`,
    deployLink: "https://ecommerce-task-react-sai.netlify.app/",
    frontEndLink: "https://github.com/SaiChakri-d/eCommShopCart-reactTask",
    backEndLink: "",
  },
  {
    title: "Student Mentor Panel",
    imgSrc: studentmentor,
    projectDesc: `Student Mentor Panel created using React.
        This project which enables the admin user to add and remove both the student and teacher data`,
    deployLink: "https://student-teacher-panel-d31-sai.netlify.app/",
    frontEndLink: "https://github.com/SaiChakri-d/student-mentor-panel",
    backEndLink: "",
  },
  {
    title: "Email & Password Storage",
    imgSrc: emailpass,
    projectDesc: `Email & Password Storage project created using Node, Express and React.
        This project which enables the admin user to add and remove several users email and password data`,
    deployLink: "https://gleaming-snickerdoodle-847381.netlify.app/",
    frontEndLink: "https://github.com/SaiChakri-d/Frontend-React-DemoDeploy",
    backEndLink:
      "https://github.com/SaiChakri-d/Backend-Node-Express-DemoDeploy",
  },
];

export { projectData };
