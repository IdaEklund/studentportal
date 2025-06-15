import { useState, useEffect } from "react";

//Jag hämtar kursdata från ett API och returnerar kursdatan.
export const CourseData = () => {
  let [courseData, setCourseData] = useState([]); 

useEffect(() => {
    async function fetchCourses() {
      try {
        //Kursdatan hämtas asynkront från University of Calgary.
        const response = await fetch("https://www.uofcourse.com/api/courses");
        const data = await response.json();
        setCourseData(data.results);
      } catch (error) {
        console.error("The data couldn't be fetched", error);
      }
    }
    fetchCourses();
  }, []);

return courseData;
};
