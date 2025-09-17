// script.js

// Database of scholarships (only few states shown, expand similarly for all)
const scholarshipsByState = {
  "Madhya Pradesh": [
    {
      title: "MP Post Matric Scholarship",
      desc: "For SC/ST/OBC students pursuing UG/PG.",
      deadline: "25 Oct 2025",
      link: "https://scholarships.gov.in/"
    },
    {
      title: "Gaon Ki Beti Scholarship", 
      desc: "For rural girl students who passed Class 12 with first division.",
      deadline: "15 Nov 2025",
      link: "https://scholarships.gov.in/"
    },
    {
      title: "Mukhyamantri Medhavi Vidyarthi Yojna",
      desc: "For meritorious students entering UG courses.",
      deadline: "19 Sept 2025",
      link: "https://www.medhavikalyan.mp.gov.in/MMVY.aspx"
    },
    {
      title: "Mukhyamantri Jankalyan Yojna",
      desc: "Scholarship for children of unorganized workers.",
      deadline: "20 Sept 2025",
      link: "https://scholarships.gov.in/"
    },
    {
      title: "MMVY Sambal Yojna",
      desc: "Scholarship for economically weaker UG students.",
      deadline: "30 Sept 2025",
      link: "https://scholarships.gov.in/"
    }
    
  ],

  "Maharashtra": [
    {
      title: "Post Matric Scholarship Maharashtra",
      desc: "For SC/ST/OBC students.",
      deadline: "20 Oct 2025",
      link: "https://mahadbt.maharashtra.gov.in/"
    },
    {
      title: "Rajarshi Shahu Maharaj Scholarship",
      desc: "For minority students in Maharashtra.",
      deadline: "15 Oct 2025",
      link: "https://mahadbt.maharashtra.gov.in/"
    },
    {
      title: "Open Merit Scholarship",
      desc: "For meritorious students of Maharashtra.",
      deadline: "5 Nov 2025",
      link: "https://mahadbt.maharashtra.gov.in/"
    },
    {
      title: "Government of India Post-Matric Scholarship",
      desc: "For students pursuing higher studies.",
      deadline: "12 Oct 2025",
      link: "https://scholarships.gov.in/"
    },
    {
      title: "State Minority Scholarship Part II",
      desc: "For minority community students.",
      deadline: "25 Sept 2025",
      link: "https://scholarships.gov.in/"
    }
  ],

  "Karnataka": [
    {
      title: "SSP Post Matric Scholarship",
      desc: "For SC/ST/OBC students in Karnataka.",
      deadline: "10 Oct 2025",
      link: "https://ssp.karnataka.gov.in/"
    },
    {
      title: "National Overseas Scholarship",
      desc: "For students pursuing abroad studies.",
      deadline: "22 Oct 2025",
      link: "https://ssp.karnataka.gov.in/"
    },
    {
      title: "Incentive for SSLC & PUC Students",
      desc: "Scholarship for top-performing students.",
      deadline: "30 Sept 2025",
      link: "https://ssp.karnataka.gov.in/"
    },
    {
      title: "Vidyasiri Scholarship",
      desc: "For backward class students.",
      deadline: "25 Sept 2025",
      link: "https://ssp.karnataka.gov.in/"
    },
    {
      title: "Fee Concession Scholarship",
      desc: "Scholarship covering tuition fees.",
      deadline: "28 Sept 2025",
      link: "https://ssp.karnataka.gov.in/"
    }
  ],

   "Bihar": [
    {
      title: "Post Matric Scholarship Bihar",
      desc: "For SC/ST/OBC students pursuing higher studies.",
      deadline: "20 Oct 2025",
      link: "https://scholarships.bih.nic.in/"
    },
    {
      title: "Merit Cum Means Scholarship",
      desc: "For meritorious students with financial need.",
      deadline: "15 Oct 2025",
      link: "https://scholarships.bih.nic.in/"
    },
    {
      title: "Mukhyamantri Balika Yojna",
      desc: "For girl students to pursue secondary education.",
      deadline: "10 Oct 2025",
      link: "https://scholarships.bih.nic.in/"
    },
    {
      title: "Chief Minister Talent Scholarship",
      desc: "For students topping state exams.",
      deadline: "5 Oct 2025",
      link: "https://scholarships.bih.nic.in/"
    },
    {
      title: "Pre-Matric Scholarship Bihar",
      desc: "For Class 9 & 10 students from minority communities.",
      deadline: "25 Sept 2025",
      link: "https://scholarships.bih.nic.in/"
    }
  ],

  "Tamil Nadu": [
    {
      title: "Post Matric Scholarship Tamil Nadu",
      desc: "For students of SC/ST/OBC categories.",
      deadline: "12 Oct 2025",
      link: "https://www.tn.gov.in/scholarships"
    },
    {
      title: "Merit Scholarship for Excellence",
      desc: "For high achievers in SSLC & HSC exams.",
      deadline: "18 Oct 2025",
      link: "https://www.tn.gov.in/scholarships"
    },
    {
      title: "State Minority Scholarship",
      desc: "For minority students pursuing higher education.",
      deadline: "20 Oct 2025",
      link: "https://www.tn.gov.in/scholarships"
    },
    {
      title: "Tamil Nadu Government Fellowship",
      desc: "For PG students in technical courses.",
      deadline: "25 Oct 2025",
      link: "https://www.tn.gov.in/scholarships"
    },
    {
      title: "Pre-Matric Scholarship Tamil Nadu",
      desc: "For Class 9 & 10 students from backward communities.",
      deadline: "28 Oct 2025",
      link: "https://www.tn.gov.in/scholarships"
    }
  ],

  "Uttar Pradesh": [
    {
      title: "UP Pre-Matric Scholarship",
      desc: "For Class 9 & 10 students.",
      deadline: "12 Oct 2025",
      link: "https://scholarship.up.gov.in/"
    },
    {
      title: "UP Post-Matric Scholarship",
      desc: "For SC/ST/OBC students pursuing higher studies.",
      deadline: "20 Oct 2025",
      link: "https://scholarship.up.gov.in/"
    },
    {
      title: "Mukhyamantri Medhavi Vidyarthi Yojana",
      desc: "For meritorious students entering UG courses.",
      deadline: "18 Oct 2025",
      link: "https://scholarship.up.gov.in/"
    },
    {
      title: "UP Talent Scholarship",
      desc: "For high achievers in state exams.",
      deadline: "22 Oct 2025",
      link: "https://scholarship.up.gov.in/"
    },
    {
      title: "UP Minority Scholarship",
      desc: "For minority students pursuing higher studies.",
      deadline: "25 Oct 2025",
      link: "https://scholarship.up.gov.in/"
    }
  ],

  "Delhi": [
    {
      title: "Delhi Post-Matric Scholarship",
      desc: "For SC/ST/OBC students in Delhi.",
      deadline: "15 Oct 2025",
      link: "https://dmc.delhi.gov.in/"
    },
    {
      title: "Delhi Merit Scholarship",
      desc: "For students excelling in academics.",
      deadline: "20 Oct 2025",
      link: "https://dmc.delhi.gov.in/"
    },
    {
      title: "Minority Scholarship Delhi",
      desc: "For minority students pursuing higher studies.",
      deadline: "25 Oct 2025",
      link: "https://dmc.delhi.gov.in/"
    },
    {
      title: "Pre-Matric Scholarship Delhi",
      desc: "For students of Class 9 & 10.",
      deadline: "28 Oct 2025",
      link: "https://dmc.delhi.gov.in/"
    },
    {
      title: "Skill Development Scholarship",
      desc: "For students enrolling in skill courses.",
      deadline: "30 Oct 2025",
      link: "https://dmc.delhi.gov.in/"
    }
  ],

  "Kerala": [
    {
      title: "Post Matric Scholarship Kerala",
      desc: "For SC/ST/OBC students in Kerala.",
      deadline: "18 Oct 2025",
      link: "https://scholarship.kerala.gov.in/"
    },
    {
      title: "Merit Scholarship Kerala",
      desc: "For top-ranking students in state exams.",
      deadline: "22 Oct 2025",
      link: "https://scholarship.kerala.gov.in/"
    },
    {
      title: "Minority Scholarship Kerala",
      desc: "For minority students pursuing higher studies.",
      deadline: "25 Oct 2025",
      link: "https://scholarship.kerala.gov.in/"
    },
    {
      title: "Pre-Matric Scholarship Kerala",
      desc: "For Class 9 & 10 students.",
      deadline: "28 Oct 2025",
      link: "https://scholarship.kerala.gov.in/"
    },
    {
      title: "SC/ST Financial Assistance",
      desc: "For higher education students from SC/ST communities.",
      deadline: "30 Oct 2025",
      link: "https://scholarship.kerala.gov.in/"
    }
  ],

  "Assam": [
    {
      title: "Post Matric Scholarship Assam",
      desc: "For SC/ST/OBC students pursuing higher studies.",
      deadline: "20 Oct 2025",
      link: "https://assam.gov.in/scholarships"
    },
    {
      title: "Merit-cum-Means Scholarship Assam",
      desc: "For meritorious students with financial need.",
      deadline: "15 Oct 2025",
      link: "https://assam.gov.in/scholarships"
    },
    {
      title: "Pre-Matric Scholarship Assam",
      desc: "For Class 9 & 10 students.",
      deadline: "10 Oct 2025",
      link: "https://assam.gov.in/scholarships"
    },
    {
      title: "Chief Minister Talent Scholarship Assam",
      desc: "For top-ranking students in state exams.",
      deadline: "25 Sept 2025",
      link: "https://assam.gov.in/scholarships"
    },
    {
      title: "Minority Scholarship Assam",
      desc: "For minority students pursuing higher education.",
      deadline: "28 Sept 2025",
      link: "https://assam.gov.in/scholarships"
    }
  ],

  "Gujarat": [
    {
      title: "Post Matric Scholarship Gujarat",
      desc: "For SC/ST/OBC students pursuing UG/PG courses.",
      deadline: "18 Oct 2025",
      link: "https://gujarat.gov.in/scholarships"
    },
    {
      title: "Merit-cum-Means Scholarship Gujarat",
      desc: "For meritorious students with financial need.",
      deadline: "22 Oct 2025",
      link: "https://gujarat.gov.in/scholarships"
    },
    {
      title: "Pre-Matric Scholarship Gujarat",
      desc: "For Class 9 & 10 students.",
      deadline: "25 Oct 2025",
      link: "https://gujarat.gov.in/scholarships"
    },
    {
      title: "Chief Minister Talent Scholarship",
      desc: "For top-performing students in state exams.",
      deadline: "28 Oct 2025",
      link: "https://gujarat.gov.in/scholarships"
    },
    {
      title: "Minority Scholarship Gujarat",
      desc: "For students from minority communities pursuing higher education.",
      deadline: "30 Oct 2025",
      link: "https://gujarat.gov.in/scholarships"
    }
  ],

  "Haryana": [
    {
      title: "Post Matric Scholarship Haryana",
      desc: "For SC/ST/OBC students pursuing higher studies.",
      deadline: "20 Oct 2025",
      link: "https://haryana.gov.in/scholarships"
    },
    {
      title: "Merit-cum-Means Scholarship Haryana",
      desc: "For meritorious students in need of financial aid.",
      deadline: "15 Oct 2025",
      link: "https://haryana.gov.in/scholarships"
    },
    {
      title: "Pre-Matric Scholarship Haryana",
      desc: "For Class 9 & 10 students.",
      deadline: "10 Oct 2025",
      link: "https://haryana.gov.in/scholarships"
    },
    {
      title: "CM Talent Scholarship Haryana",
      desc: "For students excelling in state board exams.",
      deadline: "25 Sept 2025",
      link: "https://haryana.gov.in/scholarships"
    },
    {
      title: "Minority Scholarship Haryana",
      desc: "For minority students pursuing UG/PG courses.",
      deadline: "28 Sept 2025",
      link: "https://haryana.gov.in/scholarships"
    }
  ],

  "Himachal Pradesh": [
    {
      title: "Post Matric Scholarship Himachal Pradesh",
      desc: "For SC/ST/OBC students pursuing higher education.",
      deadline: "20 Oct 2025",
      link: "https://himachal.nic.in/scholarships"
    },
    {
      title: "Merit Scholarship Himachal Pradesh",
      desc: "For top-performing students in board exams.",
      deadline: "15 Oct 2025",
      link: "https://himachal.nic.in/scholarships"
    },
    {
      title: "Pre-Matric Scholarship Himachal Pradesh",
      desc: "For Class 9 & 10 students.",
      deadline: "10 Oct 2025",
      link: "https://himachal.nic.in/scholarships"
    },
    {
      title: "Chief Minister Talent Scholarship",
      desc: "For meritorious students seeking UG/PG courses.",
      deadline: "25 Sept 2025",
      link: "https://himachal.nic.in/scholarships"
    },
    {
      title: "Minority Scholarship Himachal Pradesh",
      desc: "For minority students pursuing higher studies.",
      deadline: "28 Sept 2025",
      link: "https://himachal.nic.in/scholarships"
    }
  ],

  "Jharkhand": [
    {
      title: "Post Matric Scholarship Jharkhand",
      desc: "For SC/ST/OBC students pursuing higher studies.",
      deadline: "20 Oct 2025",
      link: "https://scholarships.jharkhand.gov.in/"
    },
    {
      title: "Merit-cum-Means Scholarship Jharkhand",
      desc: "For meritorious students in need of financial aid.",
      deadline: "15 Oct 2025",
      link: "https://scholarships.jharkhand.gov.in/"
    },
    {
      title: "Pre-Matric Scholarship Jharkhand",
      desc: "For Class 9 & 10 students.",
      deadline: "10 Oct 2025",
      link: "https://scholarships.jharkhand.gov.in/"
    },
    {
      title: "CM Talent Scholarship Jharkhand",
      desc: "For students excelling in state board exams.",
      deadline: "25 Sept 2025",
      link: "https://scholarships.jharkhand.gov.in/"
    },
    {
      title: "Minority Scholarship Jharkhand",
      desc: "For minority students pursuing UG/PG courses.",
      deadline: "28 Sept 2025",
      link: "https://scholarships.jharkhand.gov.in/"
    }
  ],
   "Andhra Pradesh": [
    { title: "AP Post Matric Scholarship", desc: "For SC/ST/OBC students pursuing higher studies.", deadline: "20 Oct 2025", link: "https://www.ap.gov.in/scholarships" },
    { title: "Merit-cum-Means Scholarship", desc: "For meritorious students in need of financial aid.", deadline: "15 Oct 2025", link: "https://www.ap.gov.in/scholarships" },
    { title: "Pre-Matric Scholarship", desc: "For Class 9 & 10 students.", deadline: "10 Oct 2025", link: "https://www.ap.gov.in/scholarships" },
    { title: "CM Talent Scholarship", desc: "For top-ranking students in state exams.", deadline: "25 Sept 2025", link: "https://www.ap.gov.in/scholarships" },
    { title: "Minority Scholarship", desc: "For minority students pursuing higher education.", deadline: "28 Sept 2025", link: "https://www.ap.gov.in/scholarships" }
  ],

  "Arunachal Pradesh": [
    { title: "AP Pre-Matric Scholarship", desc: "For Class 9 & 10 students.", deadline: "15 Oct 2025", link: "https://arunachalpradesh.gov.in/scholarships" },
    { title: "Post Matric Scholarship", desc: "For SC/ST/OBC students pursuing UG/PG.", deadline: "20 Oct 2025", link: "https://arunachalpradesh.gov.in/scholarships" },
    { title: "Merit-cum-Means", desc: "For meritorious students in financial need.", deadline: "10 Oct 2025", link: "https://arunachalpradesh.gov.in/scholarships" },
    { title: "CM Talent Scholarship", desc: "For state toppers in exams.", deadline: "25 Sept 2025", link: "https://arunachalpradesh.gov.in/scholarships" },
    { title: "Minority Scholarship", desc: "For minority students pursuing higher studies.", deadline: "28 Sept 2025", link: "https://arunachalpradesh.gov.in/scholarships" }
  ],

  "Chhattisgarh": [
    { title: "Post Matric Scholarship Chhattisgarh", desc: "For SC/ST/OBC students.", deadline: "20 Oct 2025", link: "https://cg.gov.in/scholarships" },
    { title: "Merit-cum-Means Scholarship", desc: "Meritorious students in need.", deadline: "15 Oct 2025", link: "https://cg.gov.in/scholarships" },
    { title: "Pre-Matric Scholarship", desc: "Class 9 & 10 students.", deadline: "10 Oct 2025", link: "https://cg.gov.in/scholarships" },
    { title: "CM Talent Scholarship", desc: "Top students.", deadline: "25 Sept 2025", link: "https://cg.gov.in/scholarships" },
    { title: "Minority Scholarship", desc: "Minority students.", deadline: "28 Sept 2025", link: "https://cg.gov.in/scholarships" }
  ],

  "Goa": [
    { title: "Post Matric Scholarship Goa", desc: "For SC/ST/OBC students.", deadline: "20 Oct 2025", link: "https://goa.gov.in/scholarships" },
    { title: "Merit-cum-Means Scholarship", desc: "Meritorious students in need.", deadline: "15 Oct 2025", link: "https://goa.gov.in/scholarships" },
    { title: "Pre-Matric Scholarship", desc: "Class 9 & 10 students.", deadline: "10 Oct 2025", link: "https://goa.gov.in/scholarships" },
    { title: "CM Talent Scholarship", desc: "Top students.", deadline: "25 Sept 2025", link: "https://goa.gov.in/scholarships" },
    { title: "Minority Scholarship", desc: "Minority students.", deadline: "28 Sept 2025", link: "https://goa.gov.in/scholarships" }
  ],

};

// Function to filter scholarships by selected state
function filterScholarships() {
  const state = document.getElementById("state").value;
  const container = document.getElementById("state-scholarships-list");

  container.innerHTML = ""; // clear previous results

  if (state && scholarshipsByState[state]) {
    scholarshipsByState[state].forEach(sch => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${sch.title}</h3>
        <p>${sch.desc}<br><strong>Deadline:</strong> ${sch.deadline}</p>
        <a href="${sch.link}" target="_blank" class="btn">Apply Now</a>
      `;
      container.appendChild(card);
    });
  } else {
    container.innerHTML = `<p style="text-align:center; color:#555;">No scholarships available for this state.</p>`;
  }
}
// ⏰ Deadline Reminder Feature
function checkDeadlines() {
  const today = new Date();
  let reminders = [];

  Object.values(scholarshipsByState).forEach(stateArr => {
    stateArr.forEach(sch => {
      const d = new Date(sch.deadline);
      if (!isNaN(d)) {
        const diff = Math.ceil((d - today) / (1000 * 60 * 60 * 24));
        if (diff > 0 && diff <= 7) { // Due within 7 days
          reminders.push(`${sch.title} → Deadline in ${diff} days`);
        }
      }
    });
  });

  if (reminders.length > 0) {
    alert("⏰ Upcoming Scholarship Deadlines:\n\n" + reminders.join("\n"));
  }
}

// Run alert when page loads
window.onload = checkDeadlines;
// 🌗 Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change icon
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️"; // sun icon
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙"; // moon icon
    localStorage.setItem("theme", "light");
  }
});

// Load saved theme on refresh
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }
});
