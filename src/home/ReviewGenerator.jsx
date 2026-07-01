import { useState, memo } from "react";

import {
  FaGoogle,
  FaCopy,
  FaMagic,
  FaCheck,
  FaStar,
  FaRedo,
} from "react-icons/fa";


import { openings } from "../constants/reviews/openings";

import { courseReviews } from "../constants/reviews/courses";

import { training } from "../constants/reviews/training";

import { appreciation } from "../constants/reviews/appreciation";

import { confidence } from "../constants/reviews/confidence";

import { endings } from "../constants/reviews/endings";


function ReviewGenerator() {


/* STATES */

const [course, setCourse] = useState("makeup");

const [review, setReview] = useState("");

const [copied, setCopied] = useState(false);


const [usedReviews, setUsedReviews] = useState(() => {

  if (typeof window === "undefined") {
    return [];
  }

  const saved = localStorage.getItem("usedReviews");

try {
  return saved ? JSON.parse(saved) : [];
} catch {
  return [];
}

});



/* RANDOM PICK */

  const randomPick = (array) =>
  array[Math.floor(Math.random() * array.length)];


/* GENERATE UNIQUE REVIEW */

  const generateReview = () => {


  let newReview = "";

  let attempts = 0;


  do {


  newReview = [

  randomPick(openings),

  randomPick(courseReviews[course]),

  randomPick(training),

  randomPick(appreciation),

  randomPick(confidence),

  randomPick(endings),

].join(" ");


attempts++;


  } while (

  usedReviews.includes(newReview)

 && attempts < 30

);


setReview(newReview);


  const updated = [

 ...usedReviews,

newReview

];


setUsedReviews(updated);


 localStorage.setItem(

 "usedReviews",

 JSON.stringify(updated)

);


 setCopied(false);


};

/* COPY REVIEW */

const copyReview = async () => {

  if (!review) return;


  try {

    await navigator.clipboard.writeText(review);


    setCopied(true);


    setTimeout(() => {

      setCopied(false);

    }, 2000);


  } catch (error) {


    console.log(
      "Copy failed",
      error
    );

  }

};



 return (

 <section className="bg-[#fffdf9] px-0 py-0 sm:px-4 md:py-4">


 <div className="mx-auto max-w-3xl rounded-2xl border border-[#eadfcf] bg-white p-3 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">


{/* Google Rating */}

  <div className="text-center">


  <div className="flex justify-center gap-1 text-lg text-[#fbbc05]">


 <FaStar />
 <FaStar />
 <FaStar />
 <FaStar />
 <FaStar />


 </div>


  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b48a45]">

  Google Review

  </p>


  <h1 className="mt-2 text-xl font-bold text-[#111827] sm:text-3xl">

  Share Your Experience

  </h1>


  <p className="mx-auto mt-2 max-w-xl text-[13px] leading-6 text-[#666] sm:text-base">

  Select your course, generate a personalized review,
  copy it and post it on Google.

  </p>

</div>


{/* Steps */}

  <div className="mt-6 grid grid-cols-3 gap-2 text-center">


   <div className="rounded-xl border border-[#eadfcf] p-2.5 sm:p-4">

  <div className="text-base font-bold text-[#b48a45]">

  1

 </div>


   <p className="mt-1 text-[11px] sm:text-sm">

   Choose Course

   </p>


</div>



<div className="rounded-xl border border-[#eadfcf] p-2.5 sm:p-4">


 <div className="text-base font-bold text-[#b48a45]">

2

</div>


<p className="mt-1 text-[11px] sm:text-sm">

Generate Review

</p>


</div>



<div className="rounded-xl border border-[#eadfcf] p-2.5 sm:p-4">


 <div className="text-base font-bold text-[#b48a45]">

3

</div>


<p className="mt-1 text-[11px] sm:text-sm">

Copy & Post

</p>


</div>


</div>



{/* Course Selection */}


<div className="mt-7">


<label className="text-sm font-semibold text-[#111827]">

Select Your Course

</label>


<select

value={course}


onChange={(e) => {

setCourse(e.target.value);

setReview("");

setCopied(false);

}}


className="mt-2 w-full rounded-xl border border-[#e5d8c5] bg-white p-3 text-sm outline-none transition focus:border-[#b48a45]"

>


<option value="makeup">

Makeup Course

</option>


<option value="nail">

Nail Extension Course

</option>


<option value="skin">

Skin Beautician Course

</option>


<option value="hair">

Hair Styling Course

</option>


</select>


</div>



{/* Generate Button */}


<div className="mt-6 text-center">


<button

type="button"
onClick={generateReview}


className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#b48a45] px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-[#9f7838]" 

>


<FaMagic className="text-lg" />


Generate Review


</button>


</div>

{/* Generated Review */}

{
review && (

<div className="mt-7 rounded-2xl border border-[#eadfcf] bg-[#fffaf3] p-3 sm:p-5 shadow-sm">


{/* Heading */}

<div className="flex items-center justify-between gap-3">


<h3 className="text-base font-bold text-[#111827]">

⭐Review

</h3>


<span className="rounded-full bg-[#b48a45]/10 px-2.5 py-1 text-[11px] font-semibold text-[#b48a45]">

{review.length} Characters

</span>


</div>


{/* Review Text */}

<p className="mt-5 whitespace-pre-line text-[13px] leading-6 sm:text-[15px] sm:leading-7 text-[#444]">

{review}

</p>


<p className="mt-4 text-sm text-[#777]">

 This review is uniquely generated for you

</p>


{/* Action Buttons */}

<div className="mt-5 flex flex-col gap-2 sm:flex-row">


{/* Generate Another */}

<button
type="button"
onClick={generateReview}

className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-[#111827] px-4 py-2.5 text-[13px] font-semibold text-white"

>


<FaRedo />


Generate Another


</button>



{/* Copy Button */}

<button
type="button"
onClick={copyReview}

className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-[#111827] px-4 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90"

>


{
copied
?
<FaCheck />
:
<FaCopy />
}


{
copied
?
"Copied Successfully"
:
"Copy Review"
}


</button>



{/* Google Button */}


<a

href="https://g.page/r/CbC4cxsIscHmEBM/review"

target="_blank"

rel="noopener noreferrer"

className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-[#EA4335] px-4 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90"

>


<FaGoogle />


Post On Google


</a>


</div>


{/* Notice */}

<div className="mt-4 rounded-xl border border-[#e8d8be] bg-white p-3">


<p className="text-[12px] leading-5 text-[#666]">


📌 <span className="font-semibold">
Tip:
</span>
 Copy your review first and then click
 <strong> "Post On Google"</strong>
 to paste it there.


</p>


</div>


</div>

)

}


</div>


</section>


);

}


export default memo(ReviewGenerator);