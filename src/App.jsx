import "./App.css";
//Importerar React Router-komponenter
import { Route, Routes } from "react-router-dom";
//Importerar sidkomponenter
import { NavBar } from "./components/Navbar";
//Importerar sidor
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Courses } from "./pages/Courses";
import { DataContext } from "./contexts/DataContext";
//Importerar data och kontext.
import { CourseData } from "./data/courses";
import { CourseDetails } from "./pages/CourseDetails";


function App() {
  //En variabel skapas och den innehåller all kursdata från "courses.js".
  const courseData = CourseData();

  return (
    //Kursdatan blir tillgänglig för alla komponenter via DataContext.Provider.
    <DataContext.Provider value={courseData}>
      <div className="App">
        {/*Navbaren visas på alla sidor.*/}
        <NavBar></NavBar>
        <Routes>
          {/*Definierar webbplatsens sidor.*/ }
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/news" element={<News></News>}></Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route
            path="/courseDetails/:courseId"
            element={<CourseDetails></CourseDetails>}
          ></Route>
        </Routes>
      </div>
    </DataContext.Provider>
  );
}

export default App;
