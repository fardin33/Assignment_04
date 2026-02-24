// ===================================
//====== All Jobs Tracking : ======//
// ===================================

// Array : Interview List
let interviewList = [];

// Array : Rejected List
let rejectedList = [];

// =========================================
// Get All Buttons & Initialize , Function :
// =========================================

const totalJobs = document.getElementById("total-job-card");
const interviewCount = document.getElementById("interview-jobs-card");
const rejectedCount = document.getElementById("rejected-job-card");

const allMainCardSection = document.getElementById("all-jobs-available");
const availableJobs = document.getElementById("available-jobs");

function initialize() {
  const cards = allMainCardSection.children;

  totalJobs.innerText = cards.length;
  availableJobs.innerText = cards.length;

  interviewCount.innerText = 0;
  rejectedCount.innerText = 0;
}

initialize();

// ==============================================
// Part - 01 : All Card Buttons Click Functions
// ==============================================

allMainCardSection.addEventListener("click", function (event) {
  const card = event.target.closest(".card");
  if (!card) return;

  const statusBtn = card.querySelector(".status");

  // ======================================
  // Part - 02 : Interview Button Function
  // ======================================

  if (event.target.classList.contains("interview-card-btn")) {
    if (statusBtn.innerText === "INTERVIEW") return;

    // Remove from rejected list
    rejectedList = rejectedList.filter((event) => event !== card);

    statusBtn.innerText = "INTERVIEW";

    statusBtn.className = "status text-[12px] font-medium rounded-sm p-2 mt-5";

    statusBtn.classList.add("bg-[#D1FAE5]", "text-[#065F46]");

    if (!interviewList.includes(card)) {
      interviewList.push(card);
    }

    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    currentTheme();
  }

  // ===================================
  // Part - 02 : Rejected Function
  // ===================================
  if (event.target.classList.contains("rejected-card-btn")) {
    if (statusBtn.innerText === "REJECTED") return;

    // Remove from interview list
    interviewList = interviewList.filter((c) => c !== card);

    statusBtn.innerText = "REJECTED";

    statusBtn.className = "status text-[12px] font-medium rounded-sm p-2 mt-5";

    statusBtn.classList.add("bg-[#FEE2E2]", "text-[#991B1B]");

    if (!rejectedList.includes(card)) {
      rejectedList.push(card);
    }

    rejectedCount.innerText = rejectedList.length;
    interviewCount.innerText = interviewList.length;

    currentTheme();
  }

  // ===================================
  // Part - 03 : Delete Function
  // ===================================
  if (event.target.closest(".delete-btn")) {
    // Delete Cards from interview list
    interviewList = interviewList.filter((event) => event !== card);

    // Delete Cards from rejected list
    rejectedList = rejectedList.filter((event) => event !== card);

    // Delete card from Job Cards
    card.remove();

    // After Deleted Cards, Now Calculate total Cards :
    const finalUpdatedCards = allMainCardSection.children.length;
    totalJobs.innerText = finalUpdatedCards;

    availableJobs.innerText = finalUpdatedCards;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    // When No Card Available Then Show : No Card Available Ui:
    if (allMainCardSection.children.length === 0) {
      noJobCards.style.display = "block";
    } else {
      // Current tab Show korbe
      currentTheme();
    }
  }
});

// ===============================================================
// When Refresh Then It Will Be The Same As Before : Current Theme
// ===============================================================

function currentTheme() {
  if (
    document.getElementById("Interview-btn").classList.contains("bg-[#3B82F6]")
  ) {
    toggleStyle("Interview-btn");
  } else if (
    document.getElementById("Rejected-btn").classList.contains("bg-[#3B82F6]")
  ) {
    toggleStyle("Rejected-btn");
  } else {
    toggleStyle("All-btn");
  }
}
