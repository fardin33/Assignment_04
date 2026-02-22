// Initially No Jobs Available Section  Will Be hidden  :

//  No Jobs Available Hidden :
// document.getElementById("No-jobs-available").style.display = "none";

// If Click All Button = Jobs Card Block || No Jobs none :
// document.getElementById("All-btn").addEventListener("click", function () {
//   document.getElementById("all-jobs-available").style.display = "block";

//   document.getElementById("No-jobs-available").style.display = "none";
// });

//===== Get The Buttons Via Id : =====//
const allButton = document.getElementById("All-btn");
const interviewButton = document.getElementById("Interview-btn");
const rejectedButton = document.getElementById("Rejected-btn");

//===== Toggle Machine Function : =====//

function toggleStyle(id) {
  // Remove Default Active Style :
  allButton.classList.remove("bg-[#3B82F6]", "text-white");
  interviewButton.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedButton.classList.remove("bg-[#3B82F6]", "text-white");

  //===== Add Style After Clicked : =====//
  allButton.classList.add("bg-white", "text-[#64748B]");
  interviewButton.classList.add("bg-white", "text-[#64748B]");
  rejectedButton.classList.add("bg-white", "text-[#64748B]");

  //===== Selected Style After Click : =====//
  const selectedBtnStyle = document.getElementById(id);

  selectedBtnStyle.classList.remove("bg-white", "text-[#64748B]");
  selectedBtnStyle.classList.add("bg-[#3B82F6]", "text-white");
}
