import { CourseSlider } from "./courses-slider";
import { courses } from "../data/courses";

export default function CoursesSection() {
  return <CourseSlider courses={courses} />;
}
