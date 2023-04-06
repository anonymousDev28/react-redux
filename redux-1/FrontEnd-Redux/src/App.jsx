import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/layout/layout";
import CourseDetail from "./pages/courses/CourseDetail";
import ListCourse from "./pages/courses/ListCourse";
import OnlabCourse from "./pages/courses/OnlabCourse";
import OnlineCourse from "./pages/courses/OnlineCourse";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="khoa-hoc">
            <Route index element={<ListCourse />}/>
            <Route path="online" element={<OnlineCourse />}/>
            <Route path="onlab" element={<OnlabCourse />}/>
            <Route path=":courseId" element={<CourseDetail/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
