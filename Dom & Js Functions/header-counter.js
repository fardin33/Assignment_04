//====== Interview Job List ======//
let interviewList = [];

//====== Rejected Job List ======//
let rejectedList = [];

//====== Header Part :  Job Application Tracker =====//
let totalJobs = document.getElementById("total-job-card");
let interview = document.getElementById("interview-jobs-card");
let rejected = document.getElementById("rejected-job-card");

//======== Part - 01 : All Job Cards Data Showing  =======//
const allMainCardSection = document.getElementById("all-jobs-available");

// Parent Div :
const mainContainer = document.getElementById("all-jobs-available");

function calculateCount() {
  totalJobs.innerText = allMainCardSection.children.length;
}
calculateCount();

//======== Part - 02 : Interview Cards Showing  =======//

//======== Part - 03 : Rejected Cards Showing  =======//

//====== Available Jobs Count : ======//
let availableJobs = document.getElementById("available-jobs");

// function :
const availableJobsSection = document.getElementById("all-jobs-available");

function calculateAvailableJobs() {
  availableJobs.innerText = availableJobsSection.children.length;
}
calculateAvailableJobs();
