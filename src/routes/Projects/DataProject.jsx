import studentmentor from "../../images/studentmentor.png";
import ecommcart from "../../images/ecommcart.png";
import todolist from "../../images/todolist.png";
import money from "../../images/money.png";
import cpoffice from "../../images/cpoffice.png";

const projectData = [
 
  {
    title: "Money Manager",
    imgSrc: money,
    projectDesc: `Money Manager created using MERN stack has features like, adding transaction (income or expense), Transaction history section, Budget allocation and all CRUD operations on money, info, etc.`,
    deployLink: "https://moneymanager-by-sai.netlify.app/",
    frontEndLink: "https://github.com/SaiChakri-d/moneymanager-sai-frontend",
    backEndLink:
      "https://github.com/SaiChakri-d/moneymanager-sai-backend",
  },
  {
    title: "Capacity Planning for an Office",
    imgSrc: cpoffice,
    projectDesc: `Simple Capacity Planning tool created using MERN stack helps HRs to add new employee and manage the existing employees and assign new tasks to them and easily manage the employee workload.`,
    deployLink:
      "https://capacity-planning-deployment-sai.netlify.app/",
    frontEndLink: "https://github.com/SaiChakri-d/capacity-planning-for-office-frontend",
    backEndLink: "https://github.com/SaiChakri-d/capacity-planning-for-office-backend",
  },
  {
    title: "To Do List",
    imgSrc: todolist,
    projectDesc: `Simple Todo List created using React.
        This project which enables the user to add the to do list and change
        it's completed status.`,
    deployLink:
      "https://62b1b6475562ba321466c1a0--stalwart-macaron-f8b56d.netlify.app/",
    frontEndLink: "https://github.com/SaiChakri-d/simple-todoList-react",
    backEndLink: "",
  },
  {
    title: "Simple e-Commerce Shopping Cart",
    imgSrc: ecommcart,
    projectDesc: `Simple eCommerce Shopping Cart created using React.
        This project which enables the user to add the available item to the shop cart and remove the added item from the cart.`,
    deployLink: "https://ecommerce-task-react-sai.netlify.app/",
    frontEndLink: "https://github.com/SaiChakri-d/eCommShopCart-reactTask",
    backEndLink: "",
  },
  {
    title: "Student Mentor Panel",
    imgSrc: studentmentor,
    projectDesc: `Student Mentor Panel created using React.
        Student Mentor Panel created using ReactJS, Bootstrap, MUI. This project enables the admin user to add, remove and manage both the student and teacher data.`,
    deployLink: "https://student-teacher-management-v3.netlify.app/",
    frontEndLink: "https://github.com/SaiChakri-d/student-teacher-management-v3",
    backEndLink: "",
  },

];

export { projectData };
