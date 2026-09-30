import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));
const CourseDetails = lazy(() => import("../pages/CourseDetails"));
const ServiceDetails = lazy(() => import("../pages/ServiceDetails"));
const GalleryPage = lazy(() => import("../pages/GalleryPage"));
const ReviewPage = lazy(() => import("../pages/ReviewPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const BlogPostPage = lazy(() => import("../pages/BlogPostPage"));
const AdminBlogPage = lazy(() => import("../pages/AdminBlogPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses/:slug" element={<CourseDetails />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/write-review" element={<ReviewPage />} />

      {/* BLOG */}
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/admin/blog" element={<AdminBlogPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}