import { FaGoogle, FaCopy, FaMagic, FaStar } from "react-icons/fa";
import ReviewGenerator from "../home/ReviewGenerator";

function ReviewPage() {
  return (
    <section className="min-h-screen bg-[#fffdf9] px-3 py-4 sm:px-4">
      <div className="mx-auto max-w-6xl">
        <ReviewGenerator />
      </div>
    </section>
  );
}

export default ReviewPage;