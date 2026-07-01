import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import StickyNavbar from "./components/navbar/StickyNavbar";
import Footer from "./components/footer/Footer";
import FloatingActions from "./components/common/FloatingActions";
import ScrollRestoration from "./components/layout/ScrollRestoration";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >

      {/* SCROLL RESTORE */}

      <ScrollRestoration />

      {/* NAVBAR */}

      <StickyNavbar />

      {/* PAGE CONTENT */}

      <main className="pt-[56px] sm:pt-[64px]">
        <Suspense
          fallback={
            <div className="py-20 flex justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#b48a45] border-t-transparent" />
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </main>

      {/* FLOATING BUTTONS */}

      <FloatingActions />

      {/* FOOTER */}

     <Footer />
    </BrowserRouter>
  );
}

export default App;