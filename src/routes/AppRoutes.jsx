import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() =>
  import("../pages/HomePage")
);

const CourseDetails = lazy(() =>
  import("../pages/CourseDetails")
);

const ServiceDetails = lazy(() =>
  import("../pages/ServiceDetails")
);

const GalleryPage = lazy(() =>
  import("../pages/GalleryPage")
);

const ReviewPage = lazy(() =>
  import("../pages/ReviewPage")
);

const NotFound = lazy(() =>
  import("../pages/NotFound")
);

export default function AppRoutes() {
  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={<HomePage />}
      />

      {/* COURSES */}
      <Route
        path="/courses/:slug"
        element={<CourseDetails />}
      />

      {/* SERVICES */}
      <Route
        path="/services/:slug"
        element={<ServiceDetails />}
      />

      {/* GALLERY */}
      <Route
        path="/gallery"
        element={<GalleryPage />}
      />

      {/* REVIEW GENERATOR */}
      <Route
       path="/write-review"
       element={<ReviewPage />}
     />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}