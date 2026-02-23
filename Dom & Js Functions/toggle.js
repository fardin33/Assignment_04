// ===================================
// All Toggling Function And Dom :
// ===================================

const allButton = document.getElementById("All-btn");
const interviewButton = document.getElementById("Interview-btn");
const rejectedButton = document.getElementById("Rejected-btn");

const allSection = document.getElementById("all-jobs-available");
const noJobCards = document.getElementById("No-jobs-available");

// Default Theme Color :
allButton.classList.add("bg-[#3B82F6]", "text-white");
noJobCards.style.display = "none";

function toggleStyle(id) {
  // ===================================
  // Button styling, add & remove :
  // ===================================
  [allButton, interviewButton, rejectedButton].forEach((btn) => {
    btn.classList.remove("bg-[#3B82F6]", "text-white");
    btn.classList.add("bg-white", "text-[#64748B]");
  });

  // Selected Styling :
  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.remove("bg-white", "text-[#64748B]");
  selectedBtn.classList.add("bg-[#3B82F6]", "text-white");

  const cards = allSection.children;
  let ActiveJobCount = 0;

  for (let card of cards) {
    const statusText = card.querySelector(".status").innerText;

    // ===================================
    // Now,All Jobs Count :
    // ===================================
    if (id === "All-btn") {
      card.style.display = "block";
      ActiveJobCount++;
    }

    // ===================================
    // Now,Interview Count :
    // ===================================
    else if (id === "Interview-btn") {
      if (statusText === "INTERVIEW") {
        card.style.display = "block";
        ActiveJobCount++;
      } else {
        card.style.display = "none";
      }
    }

    // ===================================
    // Now, Rejected Count ======
    // ===================================
    else if (id === "Rejected-btn") {
      if (statusText === "REJECTED") {
        card.style.display = "block";
        ActiveJobCount++;
      } else {
        card.style.display = "none";
      }
    }
  }

  // ===================================
  // No Jobs Show & hide Condition :
  // ===================================
  noJobCards.style.display = ActiveJobCount === 0 ? "block" : "none";
}
