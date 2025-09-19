
    function toggleMenu() {
      document.getElementById("menu").classList.toggle("active");
    }
    function scrollToHighlights() {
      const section = document.querySelector('.highlight-cards');
      if(section) section.scrollIntoView({ behavior: 'smooth' });
    }

    // Hero slider
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    function showSlides() {
      slides.forEach((s)=>s.classList.remove("active"));
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add("active");
    }
    setInterval(showSlides, 4000);

    // Search
    document.getElementById('course-search').addEventListener('input', function() {
      const query = this.value.toLowerCase();
      document.querySelectorAll('#course-list .card').forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
      });
    });

    // Dark mode
    const themeToggle = document.getElementById('theme-toggle');
    function setTheme(mode) {
      if (mode === 'dark') {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme','dark');
      } else {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('theme','light');
      }
    }
    themeToggle.onclick = function() {
      setTheme(document.documentElement.classList.contains('dark-mode') ? 'light':'dark');
    };
    setTheme(localStorage.getItem('theme')==='dark'?'dark':'light');
const cards = document.querySelectorAll('.subcourse-card');
let activeCard = null;

cards.forEach(card => {

  const inner = card.querySelector('.card-inner');

  // Hover tilt effect
  card.addEventListener('mousemove', e => {
    if (card === activeCard) return; // ignore tilt if flipped
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width/2;
    const midY = rect.height/2;
    const rotateY = ((x - midX)/midX)*10;
    const rotateX = ((midY - y)/midY)*10;
    inner.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });

  card.addEventListener('mouseleave', e => {
    if (card === activeCard) return; 
    inner.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });

  // Click flip effect
  card.addEventListener('click', e => {
    if(activeCard && activeCard !== card){
      activeCard.querySelector('.card-inner').style.transform = 'rotateY(0deg) rotateX(0deg)';
    }

    if(activeCard === card){
      inner.style.transform = 'rotateY(0deg) rotateX(0deg)';
      activeCard = null;
    } else {
      inner.style.transform = 'rotateY(180deg)';
      activeCard = card;
    }
  });

});
// 🎓 College Finder Data
// 🎓 College Finder Data
const collegeData = {
  Maharashtra: {
    "B.Tech": [
      { name: "COEP Pune", exam: { name: "MHT-CET", link: "https://cetcell.mahacet.org/" }, collegeLink: "https://www.coep.org.in/" },
      { name: "VJTI Mumbai", exam: { name: "JEE Main", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://vjti.ac.in/" },
      { name: "SGGS Nanded", exam: { name: "MHT-CET", link: "https://cetcell.mahacet.org/" }, collegeLink: "http://sggs.ac.in/" },
      { name: "GCOE Aurangabad", exam: { name: "MHT-CET", link: "https://cetcell.mahacet.org/" }, collegeLink: "https://geca.ac.in/" },
      { name: "Walchand Sangli", exam: { name: "MHT-CET", link: "https://cetcell.mahacet.org/" }, collegeLink: "http://www.walchandsangli.ac.in/" }
    ],
    "MBBS": [
      { name: "Grant Medical College Mumbai", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://ggmcjjh.org/" },
      { name: "BJ Medical Pune", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.bjmcpune.org/" },
      { name: "GMC Nagpur", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://gmcnagpur.org.in/" },
      { name: "GMC Aurangabad", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.gmcaurangabad.com/" },
      { name: "GMC Miraj", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.gmcmiraj.edu.in/" }
    ],
    "B.Sc": [
      { name: "Fergusson College Pune", exam: { name: "College Merit", link: "https://fergusson.edu/" }, collegeLink: "https://fergusson.edu/" },
      { name: "Ruia College Mumbai", exam: { name: "College Merit", link: "https://ruiacollege.edu/" }, collegeLink: "https://ruiacollege.edu/" },
      { name: "St. Xavier’s Mumbai", exam: { name: "College Entrance", link: "https://xaviers.edu/" }, collegeLink: "https://xaviers.edu/" },
      { name: "Modern College Pune", exam: { name: "SPPU Merit", link: "http://moderncollegepune.edu.in/" }, collegeLink: "http://moderncollegepune.edu.in/" },
      { name: "Nowrosjee Wadia Pune", exam: { name: "College Merit", link: "http://nowrosjeewadia.mespune.in/" }, collegeLink: "http://nowrosjeewadia.mespune.in/" }
    ],
    "BA": [
      { name: "Elphinstone College Mumbai", exam: { name: "College Merit", link: "https://mu.ac.in/" }, collegeLink: "https://mu.ac.in/" },
      { name: "SPPU Pune", exam: { name: "University Merit", link: "http://www.unipune.ac.in/" }, collegeLink: "http://www.unipune.ac.in/" },
      { name: "Ruia College Mumbai", exam: { name: "College Merit", link: "https://ruiacollege.edu/" }, collegeLink: "https://ruiacollege.edu/" },
      { name: "St. Xavier’s Mumbai", exam: { name: "College Entrance", link: "https://xaviers.edu/" }, collegeLink: "https://xaviers.edu/" },
      { name: "Ramnarain Ruia Mumbai", exam: { name: "College Merit", link: "https://ruiacollege.edu/" }, collegeLink: "https://ruiacollege.edu/" }
    ],
    "B.Com": [
      { name: "BMCC Pune", exam: { name: "College Merit", link: "https://www.bmcc.ac.in/" }, collegeLink: "https://www.bmcc.ac.in/" },
      { name: "Sydenham College Mumbai", exam: { name: "College Merit", link: "http://sydenham.ac.in/" }, collegeLink: "http://sydenham.ac.in/" },
      { name: "HR College Mumbai", exam: { name: "College Merit", link: "https://www.hrcollege.edu/" }, collegeLink: "https://www.hrcollege.edu/" },
      { name: "Jai Hind College Mumbai", exam: { name: "College Merit", link: "https://www.jaihindcollege.com/" }, collegeLink: "https://www.jaihindcollege.com/" },
      { name: "Mithibai College Mumbai", exam: { name: "College Merit", link: "https://www.mithibai.ac.in/" }, collegeLink: "https://www.mithibai.ac.in/" }
    ]
  },

  Karnataka: {
    "B.Tech": [
      { name: "UVCE Bangalore", exam: { name: "KCET", link: "https://cetonline.karnataka.gov.in/kea/" }, collegeLink: "https://uvce.ac.in/" },
      { name: "R V College", exam: { name: "COMEDK", link: "https://www.comedk.org/" }, collegeLink: "https://rvce.edu.in/" },
      { name: "PES University", exam: { name: "PESSAT", link: "https://pes.edu/admissions/pessat/" }, collegeLink: "https://pes.edu/" },
      { name: "BMS College", exam: { name: "COMEDK", link: "https://www.comedk.org/" }, collegeLink: "https://bmsce.ac.in/" },
      { name: "MSRIT", exam: { name: "COMEDK", link: "https://www.comedk.org/" }, collegeLink: "https://www.msrit.edu/" }
    ],
    "MBBS": [
      { name: "Bangalore Medical College", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.bmcri.org/" },
      { name: "Mysore Medical College", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://mmcri.karnataka.gov.in/" },
      { name: "Belgaum Institute", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://bimsbelgaum.org/" },
      { name: "Gulbarga Institute", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://gims.karnataka.gov.in/" },
      { name: "VIMS Bellary", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://vimsmc.edu.in/" }
    ],
    "B.Sc": [
      { name: "Christ University", exam: { name: "Entrance Test", link: "https://christuniversity.in/" }, collegeLink: "https://christuniversity.in/" },
      { name: "Mount Carmel College", exam: { name: "College Merit", link: "https://mccblr.edu.in/" }, collegeLink: "https://mccblr.edu.in/" },
      { name: "St. Joseph’s College", exam: { name: "College Merit", link: "https://sjc.ac.in/" }, collegeLink: "https://sjc.ac.in/" },
      { name: "NMKRV College", exam: { name: "College Merit", link: "https://nmkrv.edu.in/" }, collegeLink: "https://nmkrv.edu.in/" },
      { name: "Jyoti Nivas College", exam: { name: "College Merit", link: "https://jyotinivas.org/" }, collegeLink: "https://jyotinivas.org/" }
    ],
    "BA": [
      { name: "St. Joseph’s Arts & Science", exam: { name: "College Merit", link: "https://sjc.ac.in/" }, collegeLink: "https://sjc.ac.in/" },
      { name: "Christ University", exam: { name: "Entrance Test", link: "https://christuniversity.in/" }, collegeLink: "https://christuniversity.in/" },
      { name: "Mount Carmel College", exam: { name: "College Merit", link: "https://mccblr.edu.in/" }, collegeLink: "https://mccblr.edu.in/" },
      { name: "NMKRV College", exam: { name: "College Merit", link: "https://nmkrv.edu.in/" }, collegeLink: "https://nmkrv.edu.in/" },
      { name: "MES College", exam: { name: "College Merit", link: "https://mesinstitutions.in/" }, collegeLink: "https://mesinstitutions.in/" }
    ],
    "B.Com": [
      { name: "Christ University", exam: { name: "Entrance Test", link: "https://christuniversity.in/" }, collegeLink: "https://christuniversity.in/" },
      { name: "Jain University", exam: { name: "Entrance Test", link: "https://www.jainuniversity.ac.in/" }, collegeLink: "https://www.jainuniversity.ac.in/" },
      { name: "St. Joseph’s Commerce", exam: { name: "College Merit", link: "https://sjcc.edu.in/" }, collegeLink: "https://sjcc.edu.in/" },
      { name: "Mount Carmel College", exam: { name: "College Merit", link: "https://mccblr.edu.in/" }, collegeLink: "https://mccblr.edu.in/" },
      { name: "NMKRV College", exam: { name: "College Merit", link: "https://nmkrv.edu.in/" }, collegeLink: "https://nmkrv.edu.in/" }
    ]
  },

  // 🎓 collegeData — expanded for Delhi, Uttar Pradesh, Tamil Nadu (all degrees)

  "Delhi": {
    "B.Tech": [
      { name: "DTU (Delhi Technological University)", exam: { name: "JEE Main / DTU Counselling", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://dtu.ac.in/" },
      { name: "NSUT (Netaji Subhas University of Technology)", exam: { name: "JEE Main / NSUT Counselling", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.nsut.ac.in/" },
      { name: "IIIT-Delhi", exam: { name: "JEE Main / IIITD Admissions", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.iiitd.ac.in/" },
      { name: "IGDTUW (Indira Gandhi Delhi Technical University for Women)", exam: { name: "JEE Main / State Counselling", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.igdtuw.ac.in/" },
      { name: "GGSIPU (Guru Gobind Singh Indraprastha University)", exam: { name: "IPU CET / JEE Main (varies)", link: "https://ipu.admissions.nic.in/" }, collegeLink: "https://www.ipu.ac.in/" }
    ],
    "MBBS": [
      { name: "AIIMS Delhi", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.aiims.edu/" },
      { name: "Maulana Azad Medical College (MAMC)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://mamc.ac.in/" },
      { name: "Lady Hardinge Medical College (LHMC)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://lhmc-hosp.gov.in/" },
      { name: "VMMC & Safdarjung Hospital", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.vmmc-sjh.nic.in/" },
      { name: "UCMS (University College of Medical Sciences)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.ucms.ac.in/" }
    ],
    "B.Sc": [
      { name: "Miranda House (DU)", exam: { name: "DU Merit / CUET (varies)", link: "https://cuet.nta.nic.in/" }, collegeLink: "https://mirandahouse.ac.in/" },
      { name: "Hindu College (DU)", exam: { name: "DU Merit / CUET (varies)", link: "https://cuet.nta.nic.in/" }, collegeLink: "https://www.hinducollege.ac.in/" },
      { name: "Hansraj College (DU)", exam: { name: "DU Merit / CUET", link: "https://cuet.nta.nic.in/" }, collegeLink: "https://hansrajcollege.ac.in/" },
      { name: "St. Stephen's College (DU) — Science programs", exam: { name: "DU Entrance / Merit", link: "https://du.ac.in/" }, collegeLink: "https://www.ststephens.edu/" },
      { name: "KMC (Kasturba Gandhi College) / Miranda alternatives", exam: { name: "DU Merit / CUET", link: "https://du.ac.in/" }, collegeLink: "https://kgc.du.ac.in/" }
    ],
    "BA": [
      { name: "St. Stephen's College", exam: { name: "DU Entrance / Merit", link: "https://du.ac.in/" }, collegeLink: "https://www.ststephens.edu/" },
      { name: "Lady Shri Ram College (LSR)", exam: { name: "DU Entrance / Merit", link: "https://du.ac.in/" }, collegeLink: "https://lsr.edu.in/" },
      { name: "Hindu College", exam: { name: "DU Merit / Entrance", link: "https://du.ac.in/" }, collegeLink: "https://www.hinducollege.ac.in/" },
      { name: "Miranda House", exam: { name: "DU Merit / Entrance", link: "https://du.ac.in/" }, collegeLink: "https://mirandahouse.ac.in/" },
      { name: "Ramanujan College (DU)", exam: { name: "DU Merit / CUET", link: "https://cuet.nta.nic.in/" }, collegeLink: "https://ramanujancollege.ac.in/" }
    ],
    "B.Com": [
      { name: "Shri Ram College of Commerce (SRCC)", exam: { name: "DU Entrance / CUET", link: "https://cuet.nta.nic.in/" }, collegeLink: "https://www.srcc.edu/" },
      { name: "Hindu College (Commerce)", exam: { name: "DU Merit / CUET", link: "https://cuet.nta.nic.in/" }, collegeLink: "https://www.hinducollege.ac.in/" },
      { name: "Hansraj College (Commerce)", exam: { name: "DU Merit / CUET", link: "https://cuet.nta.nic.in/" }, collegeLink: "https://hansrajcollege.ac.in/" },
      { name: "Ramjas College (DU)", exam: { name: "DU Merit / CUET", link: "https://cuet.nta.nic.in/" }, collegeLink: "https://ramjas.du.ac.in/" },
      { name: "Kirori Mal College (KMC)", exam: { name: "DU Merit / CUET", link: "https://cuet.nta.nic.in/" }, collegeLink: "https://kmc.du.ac.in/" }
    ]
  },

  // --- Uttar Pradesh ---
  "Uttar Pradesh": {
    "B.Tech": [
      { name: "IIT (BHU) — Varanasi (serves UP region)", exam: { name: "JEE Advanced (after JEE Main)", link: "https://jeeadv.ac.in/" }, collegeLink: "https://iitbhu.ac.in/" },
      { name: "IET Lucknow (Dr. A.P.J. Abdul Kalam Technical University affiliated)", exam: { name: "UPCET / JEE Main", link: "https://upcet.admissions.nic.in/" }, collegeLink: "https://www.ietlucknow.ac.in/" },
      { name: "MNNIT Allahabad (now Prayagraj)", exam: { name: "JEE Main / JoSAA (varies)", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.mnnit.ac.in/" },
      { name: "KNIT Sultanpur", exam: { name: "UPCET / JEE Main", link: "https://upcet.admissions.nic.in/" }, collegeLink: "http://knit.ac.in/" },
      { name: "IIIT Allahabad", exam: { name: "JEE Main / JOSAA", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.iiita.ac.in/" }
    ],
    "MBBS": [
      { name: "King George's Medical University (KGMU) Lucknow", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.kgmu.org/" },
      { name: "GSVM Medical College Kanpur", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.gsvmmc.edu.in/" },
      { name: "MLN Medical College (Allahabad/Prayagraj)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.mlmcprayagraj.org/" },
      { name: "SN Medical College Agra / RML (example)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://rmch.ac.in/" },
      { name: "BRD Medical College Gorakhpur", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://brdmc.ac.in/" }
    ],
    "B.Sc": [
      { name: "Banaras Hindu University (BHU) — B.Sc programs", exam: { name: "BHU UET / CUET (varies)", link: "https://bhu.ac.in/" }, collegeLink: "https://bhu.ac.in/" },
      { name: "Aligarh Muslim University (AMU) — B.Sc", exam: { name: "AMU Entrance / CUET", link: "https://www.amu.ac.in/" }, collegeLink: "https://www.amu.ac.in/" },
      { name: "University of Lucknow (B.Sc programs)", exam: { name: "University Merit / Entrance", link: "https://lkouniv.ac.in/" }, collegeLink: "https://lkouniv.ac.in/" },
      { name: "MNNIT Allahabad (B.Sc allied programs)", exam: { name: "Institute Entrance / Merit", link: "https://www.mnnit.ac.in/" }, collegeLink: "https://www.mnnit.ac.in/" },
      { name: "Dr. RML Awadh University / regional colleges", exam: { name: "University Merit / Entrance", link: "https://www.awadh.ac.in/" }, collegeLink: "https://www.awadh.ac.in/" }
    ],
    "BA": [
      { name: "University of Lucknow (BA programs)", exam: { name: "University Merit / Entrance", link: "https://lkouniv.ac.in/" }, collegeLink: "https://lkouniv.ac.in/" },
      { name: "Aligarh Muslim University (AMU)", exam: { name: "AMU Entrance / CUET", link: "https://www.amu.ac.in/" }, collegeLink: "https://www.amu.ac.in/" },
      { name: "Banaras Hindu University (BHU)", exam: { name: "BHU UET / CUET", link: "https://bhu.ac.in/" }, collegeLink: "https://bhu.ac.in/" },
      { name: "Dr. Ram Manohar Lohia Avadh University", exam: { name: "University Merit / Entrance", link: "https://www.awadh.ac.in/" }, collegeLink: "https://www.awadh.ac.in/" },
      { name: "Mahatma Gandhi Kashi Vidyapith (Varanasi)", exam: { name: "University Merit / Entrance", link: "https://mgkvp.ac.in/" }, collegeLink: "https://mgkvp.ac.in/" }
    ],
    "B.Com": [
      { name: "Banaras Hindu University (BHU) — Commerce", exam: { name: "BHU UET / CUET", link: "https://bhu.ac.in/" }, collegeLink: "https://bhu.ac.in/" },
      { name: "Aligarh Muslim University (AMU) — Commerce", exam: { name: "AMU Entrance / CUET", link: "https://www.amu.ac.in/" }, collegeLink: "https://www.amu.ac.in/" },
      { name: "University of Lucknow — Commerce", exam: { name: "University Merit", link: "https://lkouniv.ac.in/" }, collegeLink: "https://lkouniv.ac.in/" },
      { name: "Christ Church College (Kanpur) / local commerce colleges", exam: { name: "College Merit / University admission", link: "#" }, collegeLink: "#" },
      { name: "Govt. P.G. College / regional commerce colleges", exam: { name: "University Merit", link: "#" }, collegeLink: "#" }
    ]
  },

  // --- Tamil Nadu ---
  "Tamil Nadu": {
    "B.Tech": [
      { name: "Anna University — Affiliated Engineering (Chennai)", exam: { name: "TNEA / Anna Univ counselling", link: "https://www.annauniv.edu/tnea/" }, collegeLink: "https://www.annauniv.edu/" },
      { name: "PSG College of Technology (Coimbatore)", exam: { name: "TNEA / PSG admissions", link: "https://www.annauniv.edu/tnea/" }, collegeLink: "https://www.psgtech.edu/" },
      { name: "SSN College of Engineering (Chennai)", exam: { name: "TNEA / SSN admissions", link: "https://www.annauniv.edu/tnea/" }, collegeLink: "https://www.ssn.edu.in/" },
      { name: "Thiagarajar College of Engineering (Madurai)", exam: { name: "TNEA / Anna Univ", link: "https://www.annauniv.edu/tnea/" }, collegeLink: "https://www.tce.edu/" },
      { name: "Coimbatore Institute of Technology (CIT)", exam: { name: "TNEA / Anna Univ", link: "https://www.annauniv.edu/tnea/" }, collegeLink: "https://www.cit.edu.in/" }
    ],
    "MBBS": [
      { name: "Madras Medical College (Chennai)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.mmc.ac.in/" },
      { name: "Stanley Medical College (Chennai)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.stanmed.net.in/" },
      { name: "Kilpauk Medical College (Chennai)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.kilpaukmedicalcollege.edu.in/" },
      { name: "Madurai Medical College", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.maduraimedicalcollege.org/" },
      { name: "Coimbatore Medical College", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.cmchtn.in/" }
    ],
    "B.Sc": [
      { name: "Loyola College (Chennai)", exam: { name: "University Merit / Entrance", link: "https://www.unom.ac.in/" }, collegeLink: "https://www.loyolacollege.edu/" },
      { name: "Madras Christian College (MCC)", exam: { name: "University Merit", link: "https://www.unom.ac.in/" }, collegeLink: "https://www.mcc.edu.in/" },
      { name: "Ethiraj College for Women", exam: { name: "College Merit", link: "https://www.ethirajcollege.edu.in/" }, collegeLink: "https://www.ethirajcollege.edu.in/" },
      { name: "Women's Christian College (WCC)", exam: { name: "University Merit", link: "https://www.unom.ac.in/" }, collegeLink: "https://wcc.edu.in/" },
      { name: "Scott Christian College (Nagercoil) / regional", exam: { name: "University Merit", link: "https://www.unom.ac.in/" }, collegeLink: "https://www.scottchristian.org/" }
    ],
    "BA": [
      { name: "Madras Christian College (MCC)", exam: { name: "University Merit / Entrance", link: "https://www.unom.ac.in/" }, collegeLink: "https://www.mcc.edu.in/" },
      { name: "Loyola College (Arts programs)", exam: { name: "University Merit", link: "https://www.unom.ac.in/" }, collegeLink: "https://www.loyolacollege.edu/" },
      { name: "Ethiraj College for Women", exam: { name: "College Merit", link: "https://www.ethirajcollege.edu.in/" }, collegeLink: "https://www.ethirajcollege.edu.in/" },
      { name: "Queen Mary's College (Chennai)", exam: { name: "University Merit", link: "https://www.unom.ac.in/" }, collegeLink: "https://www.queenmarycollege.edu.in/" },
      { name: "Presidency College / regional arts colleges", exam: { name: "University Merit", link: "https://www.unom.ac.in/" }, collegeLink: "https://www.presidencychennai.edu.in/" }
    ],
    "B.Com": [
      { name: "Loyola College (Commerce)", exam: { name: "University Merit / Entrance", link: "https://www.unom.ac.in/" }, collegeLink: "https://www.loyolacollege.edu/" },
      { name: "Madras Christian College (Commerce)", exam: { name: "University Merit", link: "https://www.unom.ac.in/" }, collegeLink: "https://www.mcc.edu.in/" },
      { name: "Ethiraj College (Commerce)", exam: { name: "College Merit", link: "https://www.ethirajcollege.edu.in/" }, collegeLink: "https://www.ethirajcollege.edu.in/" },
      { name: "Queen Mary's College (Commerce)", exam: { name: "University Merit", link: "https://www.unom.ac.in/" }, collegeLink: "https://www.queenmarycollege.edu.in/" },
      { name: "Presidency / regional commerce colleges", exam: { name: "University Merit", link: "https://www.unom.ac.in/" }, collegeLink: "https://www.presidencychennai.edu.in/" }
    ]
  },
  "Madhya Pradesh": {
    "B.Tech": [
      { name: "IIT Indore", exam: { name: "JEE Advanced", link: "https://jeeadv.ac.in/" }, collegeLink: "https://www.iiti.ac.in/" },
      { name: "MANIT Bhopal", exam: { name: "JEE Main", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.manit.ac.in/" },
      { name: "IIITDM Jabalpur", exam: { name: "JEE Main", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.iiitdmj.ac.in/" },
      { name: "LNCT Bhopal", exam: { name: "JEE Main / MP BE Counselling", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.lnct.ac.in/" },
      { name: "IET DAVV Indore", exam: { name: "JEE Main / MP BE Counselling", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://ietindore.nic.in/" }
    ],
    "MBBS": [
      { name: "Gandhi Medical College, Bhopal", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://gmcbhopal.net/" },
      { name: "Gajra Raja Medical College, Gwalior", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.grmc.up.nic.in/" },
      { name: "Mahatma Gandhi Memorial Medical College, Indore", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://mgmcindore.org/" },
      { name: "Shyam Shah Medical College, Rewa", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://ssmcrewa.ac.in/" },
      { name: "Bundelkhand Medical College, Sagar", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://bmcsagar.org/" }
    ],
    "B.Sc": [
      { name: "Rani Durgavati University, Jabalpur", exam: { name: "University Admission / Merit", link: "https://rdunijbpin.org/" }, collegeLink: "https://rdunijbpin.org/" },
      { name: "Devi Ahilya Vishwavidyalaya, Indore (DAVV)", exam: { name: "University Admission / Merit", link: "https://www.dauniv.ac.in/" }, collegeLink: "https://www.dauniv.ac.in/" },
      { name: "Vikram University, Ujjain", exam: { name: "University Admission / Merit", link: "https://vikramuniv.ac.in/" }, collegeLink: "https://vikramuniv.ac.in/" },
      { name: "Barkatullah University, Bhopal", exam: { name: "University Admission / Merit", link: "https://www.bubhopal.ac.in/" }, collegeLink: "https://www.bubhopal.ac.in/" },
      { name: "Jiwaji University, Gwalior", exam: { name: "University Admission / Merit", link: "https://www.jiwaji.edu/" }, collegeLink: "https://www.jiwaji.edu/" }
    ],
    "BA": [
      { name: "Government College, Jirapur", exam: { name: "University Admission / Merit", link: "http://www.mpcolleges.nic.in/gdcjeerapur/" }, collegeLink: "http://www.mpcolleges.nic.in/gdcjeerapur/" },
      { name: "Devi Ahilya Vishwavidyalaya, Indore", exam: { name: "University Admission / Merit", link: "https://www.dauniv.ac.in/" }, collegeLink: "https://www.dauniv.ac.in/" },
      { name: "Vikram University, Ujjain", exam: { name: "University Admission / Merit", link: "https://vikramuniv.ac.in/" }, collegeLink: "https://vikramuniv.ac.in/" },
      { name: "Rani Durgavati University, Jabalpur", exam: { name: "University Admission / Merit", link: "https://rdunijbpin.org/" }, collegeLink: "https://rdunijbpin.org/" },
      { name: "Barkatullah University, Bhopal", exam: { name: "University Admission / Merit", link: "https://www.bubhopal.ac.in/" }, collegeLink: "https://www.bubhopal.ac.in/" }
    ],
    "B.Com": [
      { name: "Devi Ahilya Vishwavidyalaya, Indore", exam: { name: "University Admission / Merit", link: "https://www.dauniv.ac.in/" }, collegeLink: "https://www.dauniv.ac.in/" },
      { name: "Vikram University, Ujjain", exam: { name: "University Admission / Merit", link: "https://vikramuniv.ac.in/" }, collegeLink: "https://vikramuniv.ac.in/" },
      { name: "Barkatullah University, Bhopal", exam: { name: "University Admission / Merit", link: "https://www.bubhopal.ac.in/" }, collegeLink: "https://www.bubhopal.ac.in/" },
      { name: "Rani Durgavati University, Jabalpur", exam: { name: "University Admission / Merit", link: "https://rdunijbpin.org/" }, collegeLink: "https://rdunijbpin.org/" },
      { name: "Jiwaji University, Gwalior", exam: { name: "University Admission / Merit", link: "https://www.jiwaji.edu/" }, collegeLink: "https://www.jiwaji.edu/" }
    ]
  },
// ---- North India: Punjab, Haryana, Uttarakhand, Himachal Pradesh, Jammu & Kashmir ----
"Punjab": {
  "B.Tech": [
    { name: "IIT Ropar (IIT Rupnagar)", exam: { name: "JEE Advanced / JEE Main", link: "https://jeeadv.ac.in/" }, collegeLink: "https://www.iitrpr.ac.in/" },
    { name: "NIT Jalandhar (Dr. B R Ambedkar NIT Jalandhar)", exam: { name: "JEE Main", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://nitj.ac.in/" },
    { name: "Thapar Institute of Engineering & Technology (Patiala)", exam: { name: "JEE Main / Institute Entrance", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.thapar.edu/" },
    { name: "Punjab Engineering College (PEC), Chandigarh", exam: { name: "JEE Main", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://pec.ac.in/" },
    { name: "Chandigarh College of Engineering & Technology (CCET)", exam: { name: "JEE Main / State Counselling", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://ccet.ac.in/" }
  ],
  "MBBS": [
    { name: "Government Medical College, Patiala", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://gmcpunjab.ac.in/" },
    { name: "Government Medical College, Amritsar (GMCH)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://gmch.gov.in/" },
    { name: "Government Medical College, Faridkot", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://gmcfaridkot.edu.in/" },
    { name: "Adesh Medical College, Bathinda (prominent regional college)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://adeshuniversity.ac.in/" },
    { name: "Christian Medical College (CMC) — Ludhiana (private but major)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.cmch-vellore.edu/" }
  ],
  "B.Sc": [
    { name: "Panjab University (P.U.) Chandigarh", exam: { name: "Merit / University Admission", link: "https://puchd.ac.in/" }, collegeLink: "https://puchd.ac.in/" },
    { name: "GNDU (Guru Nanak Dev University), Amritsar", exam: { name: "Merit / University Admission", link: "https://gndu.ac.in/" }, collegeLink: "https://gndu.ac.in/" },
    { name: "DAV College Jalandhar (Science)", exam: { name: "College Merit", link: "https://www.davjalandhar.com/" }, collegeLink: "https://www.davjalandhar.com/" },
    { name: "Government College for Girls, Chandigarh (Science)", exam: { name: "Merit", link: "https://puchd.ac.in/" }, collegeLink: "https://gcgchd.ac.in/" },
    { name: "Khalsa College, Amritsar (Science)", exam: { name: "Merit", link: "https://kcas.edu.in/" }, collegeLink: "https://kcas.edu.in/" }
  ],
  "BA": [
    { name: "Khalsa College, Amritsar", exam: { name: "College Merit", link: "https://kcas.edu.in/" }, collegeLink: "https://kcas.edu.in/" },
    { name: "DAV College, Jalandhar (Arts)", exam: { name: "Merit", link: "https://www.davjalandhar.com/" }, collegeLink: "https://www.davjalandhar.com/" },
    { name: "GNDU Arts Faculty, Amritsar", exam: { name: "University Merit", link: "https://gndu.ac.in/" }, collegeLink: "https://gndu.ac.in/" },
    { name: "Panjab University (PU) Arts", exam: { name: "PU Merit / CUET (varies)", link: "https://puchd.ac.in/" }, collegeLink: "https://puchd.ac.in/" },
    { name: "Government College, Patiala (Arts)", exam: { name: "Merit", link: "https://punjab.gov.in/" }, collegeLink: "https://patialacollege.com/" }
  ],
  "B.Com": [
    { name: "Shri Guru Teg Bahadur Khalsa College (Commerce)", exam: { name: "Merit", link: "https://puchd.ac.in/" }, collegeLink: "https://kcas.edu.in/" },
    { name: "DAV College Jalandhar (Commerce)", exam: { name: "Merit", link: "https://www.davjalandhar.com/" }, collegeLink: "https://www.davjalandhar.com/" },
    { name: "Panjab University — Commerce", exam: { name: "Merit", link: "https://puchd.ac.in/" }, collegeLink: "https://puchd.ac.in/" },
    { name: "GNDU Commerce Faculty", exam: { name: "Merit", link: "https://gndu.ac.in/" }, collegeLink: "https://gndu.ac.in/" },
    { name: "Government College for Women, Amritsar (Commerce)", exam: { name: "Merit", link: "https://punjab.gov.in/" }, collegeLink: "https://gcwamritsar.org/" }
  ],
  "Law": [
    { name: "Rajiv Gandhi National University of Law (RGNUL), Patiala", exam: { name: "CLAT / NLU Admission", link: "https://consortiumofnlus.ac.in/" }, collegeLink: "https://rgnul.ac.in/" },
    { name: "Panjab University Department of Laws", exam: { name: "University Entrance / Merit", link: "https://puchd.ac.in/" }, collegeLink: "https://puchd.ac.in/" },
    { name: "Punjabi University Patiala — Law Dept.", exam: { name: "Merit / Entrance", link: "https://www.punjabiuniversity.ac.in/" }, collegeLink: "https://www.punjabiuniversity.ac.in/" },
    { name: "Chandigarh University — Law (regional)", exam: { name: "University Entrance", link: "https://chandigarh.edu.in/" }, collegeLink: "https://chandigarh.edu.in/" },
    { name: "Khalsa College Law Department (affiliated)", exam: { name: "Merit", link: "https://kcas.edu.in/" }, collegeLink: "https://kcas.edu.in/" }
  ]
},

"Haryana": {
  "B.Tech": [
    { name: "National Institute of Technology (NIT) Kurukshetra", exam: { name: "JEE Main", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://nitkkr.ac.in/" },
    { name: "Deenbandhu Chhotu Ram University of Science & Technology (DCRUST), Murthal", exam: { name: "JEE Main / State Counselling", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.dcrustm.org.in/" },
    { name: "YMCA University of Science & Technology (Faridabad) — Engg", exam: { name: "JEE Main / Uni Entrance", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.ymcaust.ac.in/" },
    { name: "PEC University of Technology (affiliated/Chandigarh region)", exam: { name: "JEE Main", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://pec.ac.in/" },
    { name: "Chitkara University — Punjab/Haryana campus (regional)", exam: { name: "University Entrance", link: "https://www.chitkara.edu.in/" }, collegeLink: "https://www.chitkara.edu.in/" }
  ],
  "MBBS": [
    { name: "Pt. B. D. Sharma PGIMS, Rohtak (Govt Medical College)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://pgimsrohtak.ac.in/" },
    { name: "Kalpana Chawla Govt Medical College, Karnal", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://gmc.karnal.gov.in/" },
    { name: "Dayanand Medical College & Hospital (DMCH) Ludhiana — regional", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.dmch.edu/" },
    { name: "Civil Hospital & Associated Medical College (regional govt.)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "#" },
    { name: "Government Medical College (GMC) Sirsa — regional", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://gmcsa.sirsa.gov.in/" }
  ],
  "B.Sc": [
    { name: "Kurukshetra University (Science)", exam: { name: "University Merit / Entrance", link: "https://www.kuk.ac.in/" }, collegeLink: "https://www.kuk.ac.in/" },
    { name: "M.D. University (Rohtak) — Science programs", exam: { name: "Merit / Uni Admission", link: "https://www.mdu.ac.in/" }, collegeLink: "https://www.mdu.ac.in/" },
    { name: "YMCAUST — Science Departments", exam: { name: "Uni Entrance", link: "https://www.ymcaust.ac.in/" }, collegeLink: "https://www.ymcaust.ac.in/" },
    { name: "Chaudhary Ranbir Singh University (CRSU) — Science", exam: { name: "University Merit", link: "https://crsu.ac.in/" }, collegeLink: "https://crsu.ac.in/" },
    { name: "SD College (regional), Panipat — Science", exam: { name: "Merit", link: "#" }, collegeLink: "#" }
  ],
  "BA": [
    { name: "Kurukshetra University — Arts", exam: { name: "University Merit", link: "https://www.kuk.ac.in/" }, collegeLink: "https://www.kuk.ac.in/" },
    { name: "MDU Rohtak — Arts", exam: { name: "University Merit", link: "https://www.mdu.ac.in/" }, collegeLink: "https://www.mdu.ac.in/" },
    { name: "Chaudhary Charan Singh Haryana Agricultural University — Arts/Related", exam: { name: "Merit", link: "https://www.hau.ac.in/" }, collegeLink: "https://www.hau.ac.in/" },
    { name: "GSSS College (regional)", exam: { name: "Merit", link: "#" }, collegeLink: "#" },
    { name: "Panipat Arts College (Govt.)", exam: { name: "Merit", link: "#" }, collegeLink: "#" }
  ],
  "B.Com": [
    { name: "Kurukshetra University — Commerce", exam: { name: "Merit", link: "https://www.kuk.ac.in/" }, collegeLink: "https://www.kuk.ac.in/" },
    { name: "MDU Rohtak — Commerce", exam: { name: "Merit", link: "https://www.mdu.ac.in/" }, collegeLink: "https://www.mdu.ac.in/" },
    { name: "Ch. Devi Lal University — Commerce Dept.", exam: { name: "Merit", link: "https://www.cdlu.ac.in/" }, collegeLink: "https://www.cdlu.ac.in/" },
    { name: "Kurukshetra Govt. Commerce College (regional)", exam: { name: "Merit", link: "#" }, collegeLink: "#" },
    { name: "Panipat Govt. Commerce College (regional)", exam: { name: "Merit", link: "#" }, collegeLink: "#" }
  ],
  "Law": [
    { name: "Chandigarh University / Regional Law Dept.", exam: { name: "CLAT / Uni Entrance", link: "https://consortiumofnlus.ac.in/" }, collegeLink: "https://www.cuchd.in/" },
    { name: "Kurukshetra University — Law Department", exam: { name: "University Entrance", link: "https://www.kuk.ac.in/" }, collegeLink: "https://www.kuk.ac.in/" },
    { name: "Maharshi Dayanand University — Law", exam: { name: "Uni Entrance", link: "https://www.mdu.ac.in/" }, collegeLink: "https://www.mdu.ac.in/" },
    { name: "Chandigarh Law Colleges (affiliated)", exam: { name: "Merit / Entrance", link: "#" }, collegeLink: "#" },
    { name: "GJU Hisar — Law (regional)", exam: { name: "Uni Entrance", link: "https://www.gjust.ac.in/" }, collegeLink: "https://www.gjust.ac.in/" }
  ]
},

"Uttarakhand": {
  "B.Tech": [
    { name: "IIT Roorkee", exam: { name: "JEE Advanced / JEE Main", link: "https://jeeadv.ac.in/" }, collegeLink: "https://www.iitr.ac.in/" },
    { name: "DIT University, Dehradun (prominent regional)", exam: { name: "JEE Main / Uni Entrance", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.dituniversity.edu.in/" },
    { name: "GB Pant University / Engineering (Govt. colleges)", exam: { name: "State/Uni Entrance", link: "#" }, collegeLink: "#" },
    { name: "University of Petroleum & Energy Studies (UPES) — Engg (regional/private)", exam: { name: "Uni Entrance", link: "https://www.upes.ac.in/" }, collegeLink: "https://www.upes.ac.in/" },
    { name: "HNB Garhwal University — Engg allied", exam: { name: "University Merit", link: "https://www.hnbgu.ac.in/" }, collegeLink: "https://www.hnbgu.ac.in/" }
  ],
  "MBBS": [
    { name: "Government Medical College, Haldwani (GMC Haldwani)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "#" },
    { name: "AIIMS Rishikesh (All India Institute)", exam: { name: "NEET-UG / AIIMS rules", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.aiimsrishikesh.edu.in/" },
    { name: "Government Medical College Srinagar (regional)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "#" },
    { name: "Dr. D. Y. Patil (regional) — if present", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "#" },
    { name: "Other Govt Medical Colleges (state)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "#" }
  ],
  "B.Sc": [
    { name: "University of Roorkee / IIT departments (B.Sc where available)", exam: { name: "Institute Entrance / Merit", link: "https://www.iitr.ac.in/" }, collegeLink: "https://www.iitr.ac.in/" },
    { name: "HNB Garhwal University — Science", exam: { name: "University Merit", link: "https://www.hnbgu.ac.in/" }, collegeLink: "https://www.hnbgu.ac.in/" },
    { name: "Doon University — Science", exam: { name: "University Entrance", link: "https://www.doonuniversity.edu.in/" }, collegeLink: "https://www.doonuniversity.edu.in/" },
    { name: "DAV PG College Dehradun (Science)", exam: { name: "College Merit", link: "https://davpgcollege.com/" }, collegeLink: "https://davpgcollege.com/" },
    { name: "Govt. Postgraduate Colleges (state)", exam: { name: "Merit", link: "#" }, collegeLink: "#" }
  ],
  "BA": [
    { name: "Doon University — Arts", exam: { name: "University Entrance", link: "https://www.doonuniversity.edu.in/" }, collegeLink: "https://www.doonuniversity.edu.in/" },
    { name: "HNB Garhwal University — Arts", exam: { name: "Merit", link: "https://www.hnbgu.ac.in/" }, collegeLink: "https://www.hnbgu.ac.in/" },
    { name: "DAV PG College (Arts)", exam: { name: "Merit", link: "https://davpgcollege.com/" }, collegeLink: "https://davpgcollege.com/" },
    { name: "Uttarakhand Open University (Arts options)", exam: { name: "University Admission", link: "https://www.uktech.ac.in/" }, collegeLink: "https://www.uktech.ac.in/" },
    { name: "Govt. Arts Colleges (regional)", exam: { name: "Merit", link: "#" }, collegeLink: "#" }
  ],
  "B.Com": [
    { name: "Doon University — Commerce", exam: { name: "University Entrance", link: "https://www.doonuniversity.edu.in/" }, collegeLink: "https://www.doonuniversity.edu.in/" },
    { name: "DAV PG College — Commerce", exam: { name: "Merit", link: "https://davpgcollege.com/" }, collegeLink: "https://davpgcollege.com/" },
    { name: "HNB Garhwal University — Commerce", exam: { name: "Merit", link: "https://www.hnbgu.ac.in/" }, collegeLink: "https://www.hnbgu.ac.in/" },
    { name: "Govt. Commerce Colleges (regional)", exam: { name: "Merit", link: "#" }, collegeLink: "#" },
    { name: "UK State P.G. Colleges — Commerce", exam: { name: "Merit", link: "#" }, collegeLink: "#" }
  ],
  "Law": [
    { name: "Gian Jyoti / Regional Law Departments (Dehradun / Roorkee)", exam: { name: "CLAT / Uni Entrance", link: "https://consortiumofnlus.ac.in/" }, collegeLink: "#" },
    { name: "Doon Law Colleges (affiliated)", exam: { name: "University Entrance", link: "https://www.doonuniversity.edu.in/" }, collegeLink: "https://www.doonuniversity.edu.in/" },
    { name: "HNB Garhwal University — Law Dept. (if present)", exam: { name: "Merit / Entrance", link: "https://www.hnbgu.ac.in/" }, collegeLink: "https://www.hnbgu.ac.in/" },
    { name: "Private/State Law Colleges (regional)", exam: { name: "Merit", link: "#" }, collegeLink: "#" },
    { name: "UK Law Colleges (affiliated)", exam: { name: "Uni Entrance / CLAT", link: "#" }, collegeLink: "#" }
  ]
},

"Himachal Pradesh": {
  "B.Tech": [
    { name: "IIT Mandi (Himachal Pradesh)", exam: { name: "JEE Advanced / JEE Main", link: "https://jeeadv.ac.in/" }, collegeLink: "https://iitmandi.ac.in/" },
    { name: "NIT Hamirpur (National Institute of Technology Hamirpur)", exam: { name: "JEE Main", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://nith.ac.in/" },
    { name: "Jaypee University / Regional (if applicable)", exam: { name: "JEE Main / University Entrance", link: "#" }, collegeLink: "#" },
    { name: "University Institute of Information Technology (Shimla / HP Univ.)", exam: { name: "State / Uni Entrance", link: "#" }, collegeLink: "https://hpuniv.ac.in/" },
    { name: "Government Engineering College (regional)", exam: { name: "State Counselling / JEE", link: "#" }, collegeLink: "#" }
  ],
  "MBBS": [
    { name: "Indira Gandhi Medical College, Shimla", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://igmcshimla.org/" },
    { name: "Dr. Rajendra Prasad Govt Medical College, Kangra (Tanda)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://tandahospital.org/" },
    { name: "HP Govt Medical Colleges (regional)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "#" },
    { name: "Private & Government Medical Institutes (regional)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "#" },
    { name: "HP Medical College entries (state list)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "#" }
  ],
  "B.Sc": [
    { name: "Himachal Pradesh University (Shimla) — Science", exam: { name: "University Merit", link: "https://hpuniv.ac.in/" }, collegeLink: "https://hpuniv.ac.in/" },
    { name: "St. Bede's College (Shimla) — Science", exam: { name: "College Merit", link: "https://www.stbedes.in/" }, collegeLink: "https://www.stbedes.in/" },
    { name: "Government College (regional) — Science", exam: { name: "Merit", link: "#" }, collegeLink: "#" },
    { name: "NIT Hamirpur Science/Allied depts", exam: { name: "JEE Main / Institute Entrance", link: "https://nitj.ac.in/" }, collegeLink: "https://nith.ac.in/" },
    { name: "Private Science Colleges (regional)", exam: { name: "Merit", link: "#" }, collegeLink: "#" }
  ],
  "BA": [
    { name: "Himachal Pradesh University — Arts", exam: { name: "Merit / Uni Entrance", link: "https://hpuniv.ac.in/" }, collegeLink: "https://hpuniv.ac.in/" },
    { name: "St. Bede's College — Arts", exam: { name: "College Merit", link: "https://www.stbedes.in/" }, collegeLink: "https://www.stbedes.in/" },
    { name: "Government Arts Colleges (Shimla / regional)", exam: { name: "Merit", link: "#" }, collegeLink: "#" },
    { name: "Central University of Himachal Pradesh (if arts programs)", exam: { name: "University Entrance", link: "https://cuhimachal.ac.in/" }, collegeLink: "https://cuhimachal.ac.in/" },
    { name: "Regional Degree Colleges — Arts", exam: { name: "Merit", link: "#" }, collegeLink: "#" }
  ],
  "B.Com": [
    { name: "Himachal Pradesh University — Commerce", exam: { name: "Merit", link: "https://hpuniv.ac.in/" }, collegeLink: "https://hpuniv.ac.in/" },
    { name: "St. Bede's College — Commerce", exam: { name: "Merit", link: "https://www.stbedes.in/" }, collegeLink: "https://www.stbedes.in/" },
    { name: "Government Commerce Colleges (regional)", exam: { name: "Merit", link: "#" }, collegeLink: "#" },
    { name: "NIT Hamirpur allied commerce/management depts", exam: { name: "Institute Entrance", link: "https://nith.ac.in/" }, collegeLink: "https://nith.ac.in/" },
    { name: "Regional Commerce Colleges — HP", exam: { name: "Merit", link: "#" }, collegeLink: "#" }
  ],
  "Law": [
    { name: "Himachal Pradesh National Law University (proposals/region)", exam: { name: "CLAT / State Entrance", link: "https://consortiumofnlus.ac.in/" }, collegeLink: "#" },
    { name: "HP University — Law Department", exam: { name: "University Entrance", link: "https://hpuniv.ac.in/" }, collegeLink: "https://hpuniv.ac.in/" },
    { name: "St. Bede's / Local Law Departments (affiliated)", exam: { name: "Merit", link: "#" }, collegeLink: "#" },
    { name: "Regional Law Colleges — HP", exam: { name: "Merit / Entrance", link: "#" }, collegeLink: "#" },
    { name: "Private Law Institutes (regional)", exam: { name: "CLAT / Uni Entrance", link: "https://consortiumofnlus.ac.in/" }, collegeLink: "#" }
  ]
},

"Jammu & Kashmir": {
  "B.Tech": [
    { name: "NIT Srinagar (NIT Srinagar)", exam: { name: "JEE Main", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://nitttrjammu.ac.in/" },
    { name: "Government College of Engineering & Technology (GCT) Jammu", exam: { name: "JEE Main / State Counselling", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://gcetjammu.org/" },
    { name: "Islamic University of Science & Technology (IUST) Engineering", exam: { name: "State / JEE", link: "#" }, collegeLink: "https://www.iust.ac.in/" },
    { name: "University of Jammu — Engg affiliated colleges", exam: { name: "University Entrance", link: "https://www.jammuuniversity.ac.in/" }, collegeLink: "https://www.jammuuniversity.ac.in/" },
    { name: "Regional Engineering Colleges / Govt. Engg colleges", exam: { name: "JEE Main / State", link: "#" }, collegeLink: "#" }
  ],
  "MBBS": [
    { name: "Government Medical College Srinagar (GMC Srinagar)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.gmcs.edu.in/" },
    { name: "Government Medical College Jammu (GMC Jammu)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://www.gmcjammu.in/" },
    { name: "SKIMS Srinagar (Sher-i-Kashmir Institute)", exam: { name: "NEET-UG / Institute rules", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.skims.ac.in/" },
    { name: "Associated Govt Medical Institutes (regional)", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "#" },
    { name: "Regional Medical Colleges — J&K", exam: { name: "NEET-UG", link: "https://neet.nta.nic.in/" }, collegeLink: "#" }
  ],
  "B.Sc": [
    { name: "University of Kashmir — Science", exam: { name: "University Entrance / Merit", link: "http://kashmiruniversity.net/" }, collegeLink: "http://kashmiruniversity.net/" },
    { name: "University of Jammu — Science", exam: { name: "University Merit", link: "https://www.jammuuniversity.ac.in/" }, collegeLink: "https://www.jammuuniversity.ac.in/" },
    { name: "SKUAST Kashmir (Science / Agri allied)", exam: { name: "University Entrance", link: "https://skuastkashmir.ac.in/" }, collegeLink: "https://skuastkashmir.ac.in/" },
    { name: "Government Degree Colleges (Science)", exam: { name: "Merit", link: "#" }, collegeLink: "#" },
    { name: "Private / Regional Science Colleges", exam: { name: "Merit / Entrance", link: "#" }, collegeLink: "#" }
  ],
  "BA": [
    { name: "University of Kashmir — Arts", exam: { name: "University Merit", link: "http://kashmiruniversity.net/" }, collegeLink: "http://kashmiruniversity.net/" },
    { name: "University of Jammu — Arts", exam: { name: "University Merit", link: "https://www.jammuuniversity.ac.in/" }, collegeLink: "https://www.jammuuniversity.ac.in/" },
    { name: "Government Degree College, Srinagar (Arts)", exam: { name: "Merit", link: "#" }, collegeLink: "#" },
    { name: "Regional Arts Colleges — J&K", exam: { name: "Merit", link: "#" }, collegeLink: "#" },
    { name: "Private / Affiliated Arts Colleges", exam: { name: "Merit / Entrance", link: "#" }, collegeLink: "#" }
  ],
  "B.Com": [
    { name: "University of Jammu — Commerce", exam: { name: "Merit", link: "https://www.jammuuniversity.ac.in/" }, collegeLink: "https://www.jammuuniversity.ac.in/" },
    { name: "University of Kashmir — Commerce allied", exam: { name: "University Merit", link: "http://kashmiruniversity.net/" }, collegeLink: "http://kashmiruniversity.net/" },
    { name: "Government Commerce Colleges (region)", exam: { name: "Merit", link: "#" }, collegeLink: "#" },
    { name: "SKUAST — Commerce allied (regional)", exam: { name: "University Entrance", link: "https://skuastkashmir.ac.in/" }, collegeLink: "https://skuastkashmir.ac.in/" },
    { name: "Private/Affiliated Commerce Colleges", exam: { name: "Merit", link: "#" }, collegeLink: "#" }
  ],
  "Law": [
    { name: "University of Jammu — Law Dept. (regional)", exam: { name: "CLAT / University Entrance", link: "https://consortiumofnlus.ac.in/" }, collegeLink: "https://www.jammuuniversity.ac.in/" },
    { name: "University of Kashmir — Law / affiliated", exam: { name: "University Entrance", link: "http://kashmiruniversity.net/" }, collegeLink: "http://kashmiruniversity.net/" },
    { name: "Private Law Colleges (regional)", exam: { name: "Merit / Entrance", link: "#" }, collegeLink: "#" },
    { name: "SKIMS / University allied law programs (if any)", exam: { name: "Uni Entrance / CLAT", link: "#" }, collegeLink: "#" },
    { name: "Regional Law Institutes — J&K", exam: { name: "Merit", link: "#" }, collegeLink: "#" }
  ]
},
"Rajasthan": {
    "B.Tech": [
      { name: "Malaviya National Institute of Technology, Jaipur", exam: { name: "JEE Main", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.mnit.ac.in/" },
      { name: "LNMIIT Jaipur", exam: { name: "JEE Main", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.lnmiit.ac.in/" },
      { name: "JECRC University, Jaipur", exam: { name: "JEE Main / University Entrance", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://www.jecrcuniversity.edu.in/" },
      { name: "Government Engineering College, Ajmer", exam: { name: "JEE Main / Rajasthan Counselling", link: "https://hte.rajasthan.gov.in/" }, collegeLink: "https://www.gecajmer.ac.in/" },
      { name: "Manipal University Jaipur", exam: { name: "JEE Main", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://jaipur.manipal.edu/" }
    ],
    "MBBS": [
      { name: "Sawai Man Singh Medical College, Jaipur", exam: { name: "NEET UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.smsmcjaipur.org/" },
      { name: "AIIMS Jodhpur", exam: { name: "NEET UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.aiimsjodhpur.edu.in/" },
      { name: "Sardar Patel Medical College, Bikaner", exam: { name: "NEET UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://spmbikaner.edu.in/" },
      { name: "RNT Medical College, Udaipur", exam: { name: "NEET UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.rntmcudaipur.org/" },
      { name: "Jhalawar Medical College", exam: { name: "NEET UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://jmcjhalawar.com/" }
    ],
    "B.Sc": [
      { name: "University of Rajasthan, Jaipur", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.uniraj.ac.in/" },
      { name: "Mohanlal Sukhadia University, Udaipur", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.mlsu.ac.in/" },
      { name: "Jaipur National University", exam: { name: "Entrance / Merit", link: "#" }, collegeLink: "https://www.jnujaipur.ac.in/" },
      { name: "Jain University Jaipur", exam: { name: "Entrance", link: "#" }, collegeLink: "https://jaipur.jainuniversity.ac.in/" },
      { name: "Banasthali Vidyapith", exam: { name: "Entrance", link: "#" }, collegeLink: "https://www.banasthali.org/" }
    ],
    "B.Com": [
      { name: "University of Rajasthan, Jaipur", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.uniraj.ac.in/" },
      { name: "Jaipur National University", exam: { name: "Entrance / Merit", link: "#" }, collegeLink: "https://www.jnujaipur.ac.in/" },
      { name: "Banasthali Vidyapith", exam: { name: "Entrance", link: "#" }, collegeLink: "https://www.banasthali.org/" },
      { name: "Jaipur Engineering College and Research Centre (Commerce Dept.)", exam: { name: "University Merit", link: "#" }, collegeLink: "https://www.jecrcuniversity.edu.in/" },
      { name: "St. Xavier's College, Jaipur", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.stxaviersjaipur.org/" }
    ],
    "B.A": [
      { name: "University of Rajasthan, Jaipur", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.uniraj.ac.in/" },
      { name: "Mohanlal Sukhadia University, Udaipur", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.mlsu.ac.in/" },
      { name: "Banasthali Vidyapith", exam: { name: "Entrance", link: "#" }, collegeLink: "https://www.banasthali.org/" },
      { name: "Jaipur National University", exam: { name: "Entrance / Merit", link: "#" }, collegeLink: "https://www.jnujaipur.ac.in/" },
      { name: "St. Xavier's College, Jaipur", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.stxaviersjaipur.org/" }
    ],
    "BBA": [
      { name: "Jaipur National University", exam: { name: "Entrance / Merit", link: "#" }, collegeLink: "https://www.jnujaipur.ac.in/" },
      { name: "Banasthali Vidyapith", exam: { name: "Entrance", link: "#" }, collegeLink: "https://www.banasthali.org/" },
      { name: "Jaipur Engineering College and Research Centre (Management Dept.)", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.jecrcuniversity.edu.in/" },
      { name: "St. Xavier's College, Jaipur", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.stxaviersjaipur.org/" },
      { name: "Manipal University Jaipur", exam: { name: "Entrance / Merit", link: "#" }, collegeLink: "https://jaipur.manipal.edu/" }
    ]
  },

  "West Bengal": {
    "B.Tech": [
      { name: "IIT Kharagpur", exam: { name: "JEE Advanced", link: "https://jeeadv.ac.in/" }, collegeLink: "https://www.iitkgp.ac.in/" },
      { name: "Jadavpur University", exam: { name: "WBJEE / JEE Main", link: "https://wbjee.nic.in/" }, collegeLink: "http://www.jaduniv.edu.in/" },
      { name: "Heritage Institute of Technology", exam: { name: "WBJEE / JEE Main", link: "https://wbjee.nic.in/" }, collegeLink: "https://heritageit.edu/" },
      { name: "IEM Kolkata", exam: { name: "JEE Main / Uni Entrance", link: "https://jeemain.nta.nic.in/" }, collegeLink: "https://iem.edu.in/" },
      { name: "Netaji Subhas University", exam: { name: "WBJEE / JEE Main", link: "https://wbjee.nic.in/" }, collegeLink: "https://www.nit.ac.in/" }
    ],
    "MBBS": [
      { name: "Medical College, Kolkata", exam: { name: "NEET UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://mchkolkata.org/" },
      { name: "Nil Ratan Sircar Medical College", exam: { name: "NEET UG", link: "https://neet.nta.nic.in/" }, collegeLink: "http://nrsmc.edu.in/" },
      { name: "R.G. Kar Medical College", exam: { name: "NEET UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://rgkarmedicalcollege.org/" },
      { name: "IQ City Medical College", exam: { name: "NEET UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.iqcity.edu.in/" },
      { name: "KPC Medical College", exam: { name: "NEET UG", link: "https://neet.nta.nic.in/" }, collegeLink: "https://www.kpcmcindia.edu.in/" }
    ],
    "B.Sc": [
      { name: "University of Calcutta", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.caluniv.ac.in/" },
      { name: "Jadavpur University", exam: { name: "Merit / Entrance", link: "#" }, collegeLink: "http://www.jaduniv.edu.in/" },
      { name: "St. Xavier's College", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.sxccal.edu/" },
      { name: "Presidency University", exam: { name: "Merit Based", link: "#" }, collegeLink: "http://www.presidencyuniversity.in/" },
      { name: "Bethune College", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://bethunecollege.ac.in/" }
    ],
    "B.Com": [
      { name: "University of Calcutta", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.caluniv.ac.in/" },
      { name: "St. Xavier's College", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.sxccal.edu/" },
      { name: "Goenka College", exam: { name: "Merit Based", link: "#" }, collegeLink: "http://www.goenkacollege.org/" },
      { name: "Ramakrishna Mission Vivekananda College", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.rkmvc.edu.in/" },
      { name: "Bethune College", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://bethunecollege.ac.in/" }
    ],
    "B.A": [
      { name: "University of Calcutta", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.caluniv.ac.in/" },
      { name: "Jadavpur University", exam: { name: "Merit / Entrance", link: "#" }, collegeLink: "http://www.jaduniv.edu.in/" },
      { name: "St. Xavier's College", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://www.sxccal.edu/" },
      { name: "Presidency University", exam: { name: "Merit Based", link: "#" }, collegeLink: "http://www.presidencyuniversity.in/" },
      { name: "Bethune College", exam: { name: "Merit Based", link: "#" }, collegeLink: "https://bethunecollege.ac.in/" }
    ],
    "BBA": [
      { name: "St. Xavier's College", exam: { name: "Merit / Entrance", link: "#" }, collegeLink: "https://www.sxccal.edu/" },
      { name: "Goenka College", exam: { name: "Merit Based", link: "#" }, collegeLink: "http://www.goenkacollege.org/" },
      { name: "Jadavpur University", exam: { name: "Entrance / Merit", link: "#" }, collegeLink: "http://www.jaduniv.edu.in/" },
      { name: "Presidency University", exam: { name: "Entrance / Merit", link: "#" }, collegeLink: "http://www.presidencyuniversity.in/" },
      { name: "ICFAI University, Kolkata", exam: { name: "Entrance / Merit", link: "#" }, collegeLink: "https://www.icfaiuniversity.in/" }
    ]
  },
    "Bihar": {
    "BSc": [
      { name: "Patna Science College", entrance: "Bihar Combined Entrance Competitive Examination (BCECE)", link: "https://www.patnasciencecollege.ac.in" },
      { name: "Magadh University, Bodh Gaya", entrance: "MU Entrance Test", link: "https://www.magadhuniversity.ac.in" },
      { name: "Bhagalpur College of Science", entrance: "BCECE", link: "https://www.bhagalpurcollege.ac.in" },
      { name: "M.L. College, Darbhanga", entrance: "State Entrance", link: "https://www.mlcollege.ac.in" },
      { name: "Bihar National College, Patna", entrance: "BCECE", link: "https://www.bncollege.ac.in" }
    ],
    "BCom": [
      { name: "Patna College, Patna", entrance: "Merit Based", link: "https://www.patnacollege.ac.in" },
      { name: "Magadh University, Bodh Gaya", entrance: "MU Entrance Test", link: "https://www.magadhuniversity.ac.in" },
      { name: "Bihar National College, Patna", entrance: "Merit Based", link: "https://www.bncollege.ac.in" },
      { name: "Patna Women's College", entrance: "Merit Based", link: "https://www.pwcollege.ac.in" },
      { name: "A N College, Patna", entrance: "Merit Based", link: "https://www.ancollegepatna.org" }
    ],
    "BA": [
      { name: "Patna College", entrance: "Merit Based", link: "https://www.patnacollege.ac.in" },
      { name: "Magadh University, Bodh Gaya", entrance: "MU Entrance Test", link: "https://www.magadhuniversity.ac.in" },
      { name: "A N College, Patna", entrance: "Merit Based", link: "https://www.ancollegepatna.org" },
      { name: "Bihar National College, Patna", entrance: "Merit Based", link: "https://www.bncollege.ac.in" },
      { name: "M.L. College, Darbhanga", entrance: "State Entrance", link: "https://www.mlcollege.ac.in" }
    ],
    "BTech": [
      { name: "IIT Patna", entrance: "JEE Advanced", link: "https://www.iitp.ac.in" },
      { name: "NIT Patna", entrance: "JEE Main", link: "https://www.nitp.ac.in" },
      { name: "BIT Mesra Patna Campus", entrance: "JEE Main", link: "https://www.bitmesra.ac.in" },
      { name: "Maulana Azad College of Engineering, Patna", entrance: "State Entrance", link: "#" },
      { name: "Bihar Engineering College, Patna", entrance: "BCECE", link: "#" }
    ],
    "MBBS": [
      { name: "AIIMS Patna", entrance: "NEET", link: "https://www.aiimspatna.edu.in" },
      { name: "Patna Medical College", entrance: "NEET", link: "https://www.pmchpatna.org" },
      { name: "Indira Gandhi Institute of Medical Sciences", entrance: "NEET", link: "https://www.igims.org" },
      { name: "Nalanda Medical College, Patna", entrance: "NEET", link: "#" },
      { name: "Rajendra Institute of Medical Sciences (RIMS)", entrance: "NEET", link: "https://www.rims.ac.in" }
    ]
  },

  "Gujarat": {
    "BSc": [
      { name: "St. Xavier's College, Ahmedabad", entrance: "Merit Based", link: "https://www.stxaviersahmedabad.com" },
      { name: "M.S. University, Baroda", entrance: "Entrance Test", link: "https://www.msubaroda.ac.in" },
      { name: "Gujarat University, Ahmedabad", entrance: "GU Entrance", link: "https://www.gujaratuniversity.ac.in" },
      { name: "L.D. Science College, Ahmedabad", entrance: "Merit Based", link: "https://www.ldsciencecollege.edu.in" },
      { name: "Hemchandracharya North Gujarat University", entrance: "Entrance Test", link: "https://www.ngu.ac.in" }
    ],
    "BCom": [
      { name: "N.G. Acharya & D.K. Marathe College, Ahmedabad", entrance: "Merit Based", link: "#" },
      { name: "M.S. University, Baroda", entrance: "Entrance Test", link: "https://www.msubaroda.ac.in" },
      { name: "Gujarat University, Ahmedabad", entrance: "Merit Based", link: "https://www.gujaratuniversity.ac.in" },
      { name: "St. Xavier's College, Ahmedabad", entrance: "Merit Based", link: "https://www.stxaviersahmedabad.com" },
      { name: "H.L. College of Commerce, Ahmedabad", entrance: "Merit Based", link: "https://www.hlcollege.edu.in" }
    ],
    "BA": [
      { name: "Gujarat University, Ahmedabad", entrance: "Merit Based", link: "https://www.gujaratuniversity.ac.in" },
      { name: "M.S. University, Baroda", entrance: "Entrance Test", link: "https://www.msubaroda.ac.in" },
      { name: "St. Xavier's College, Ahmedabad", entrance: "Merit Based", link: "https://www.stxaviersahmedabad.com" },
      { name: "H.L. College, Ahmedabad", entrance: "Merit Based", link: "https://www.hlcollege.edu.in" },
      { name: "Nirma University", entrance: "NU Entrance", link: "https://www.nirmauni.ac.in" }
    ],
    "BTech": [
      { name: "IIT Gandhinagar", entrance: "JEE Advanced", link: "https://www.iitgn.ac.in" },
      { name: "Nirma University", entrance: "JEE Main / NU Entrance", link: "https://www.nirmauni.ac.in" },
      { name: "Dhirubhai Ambani Institute of ICT", entrance: "JEE Main", link: "https://www.daiict.ac.in" },
      { name: "M.S. University, Baroda", entrance: "Entrance Test", link: "https://www.msubaroda.ac.in" },
      { name: "Gujarat Technological University", entrance: "GTU Entrance", link: "https://www.gtu.ac.in" }
    ],
    "MBBS": [
      { name: "B.J. Medical College, Ahmedabad", entrance: "NEET", link: "https://www.bjmcahmedabad.edu.in" },
      { name: "Government Medical College, Surat", entrance: "NEET", link: "https://www.gmcsurat.edu.in" },
      { name: "Government Medical College, Baroda", entrance: "NEET", link: "https://www.gmcvadodara.edu.in" },
      { name: "Government Medical College, Bhavnagar", entrance: "NEET", link: "#" },
      { name: "Ahmedabad Medical College", entrance: "NEET", link: "#" }
    ]
  },

  "Telangana": {
    "BSc": [
      { name: "Osmania University, Hyderabad", entrance: "OU Entrance", link: "https://www.osmania.ac.in" },
      { name: "University College of Science, OU", entrance: "Merit Based", link: "https://www.osmania.ac.in" },
      { name: "Kakatiya University, Warangal", entrance: "KU Entrance", link: "https://www.kakatiya.ac.in" },
      { name: "Potti Sreeramulu Telugu University", entrance: "Entrance Test", link: "https://www.telanganauniversity.ac.in" },
      { name: "Nizam College, Hyderabad", entrance: "Merit Based", link: "https://www.nizamcollege.in" }
    ],
    "BCom": [
      { name: "Osmania University, Hyderabad", entrance: "Merit Based", link: "https://www.osmania.ac.in" },
      { name: "Nizam College, Hyderabad", entrance: "Merit Based", link: "https://www.nizamcollege.in" },
      { name: "St. Francis College, Hyderabad", entrance: "Merit Based", link: "#" },
      { name: "Kakatiya University, Warangal", entrance: "Entrance Test", link: "https://www.kakatiya.ac.in" },
      { name: "Jawaharlal Nehru Technological University, Hyderabad", entrance: "Entrance Test", link: "https://www.jntuh.ac.in" }
    ],
    "BA": [
      { name: "Osmania University, Hyderabad", entrance: "Merit Based", link: "https://www.osmania.ac.in" },
      { name: "Nizam College, Hyderabad", entrance: "Merit Based", link: "https://www.nizamcollege.in" },
      { name: "Kakatiya University, Warangal", entrance: "Entrance Test", link: "https://www.kakatiya.ac.in" },
      { name: "St. Francis College, Hyderabad", entrance: "Merit Based", link: "#" },
      { name: "Telangana University, Nizamabad", entrance: "Entrance Test", link: "https://www.telanganauniversity.ac.in" }
    ],
    "BTech": [
      { name: "IIT Hyderabad", entrance: "JEE Advanced", link: "https://www.iith.ac.in" },
      { name: "JNTU Hyderabad", entrance: "JEE Main / JNTUH Entrance", link: "https://www.jntuh.ac.in" },
      { name: "Osmania University College of Engineering", entrance: "OU CET", link: "https://www.osmania.ac.in" },
      { name: "Kakatiya University College of Engineering", entrance: "KU CET", link: "https://www.kakatiya.ac.in" },
      { name: "Chaitanya Bharathi Institute of Technology, Hyderabad", entrance: "JEE Main / CBIT Entrance", link: "https://www.cbit.ac.in" }
    ],
    "MBBS": [
      { name: "Osmania Medical College, Hyderabad", entrance: "NEET", link: "https://www.osmaniamedicalcollege.edu.in" },
      { name: "Gandhi Medical College, Hyderabad", entrance: "NEET", link: "https://www.gmc.edu.in" },
      { name: "Kakatiya Medical College, Warangal", entrance: "NEET", link: "https://www.kmcwarangal.edu.in" },
      { name: "MNR Medical College, Hyderabad", entrance: "NEET", link: "https://www.mnrmedicalcollege.edu.in" },
      { name: "Bhaskar Medical College, Hyderabad", entrance: "NEET", link: "https://www.bhaskar.ac.in" }
    ]
  },

  "Andhra Pradesh": {
    "BSc": [
      { name: "Andhra University, Visakhapatnam", entrance: "AU Entrance", link: "https://www.andhrauniversity.edu.in" },
      { name: "Sri Venkateswara University, Tirupati", entrance: "SVU Entrance", link: "https://www.svuniversity.edu.in" },
      { name: "Potti Sreeramulu Telugu University", entrance: "Entrance Test", link: "#" },
      { name: "Acharya Nagarjuna University", entrance: "ANU Entrance", link: "https://www.anu.ac.in" },
      { name: "GITAM University, Visakhapatnam", entrance: "Merit / Entrance", link: "https://www.gitam.edu" }
    ],
    "BCom": [
      { name: "Andhra University, Visakhapatnam", entrance: "Merit Based", link: "https://www.andhrauniversity.edu.in" },
      { name: "Sri Venkateswara University, Tirupati", entrance: "Merit Based", link: "https://www.svuniversity.edu.in" },
      { name: "Acharya Nagarjuna University", entrance: "Merit Based", link: "https://www.anu.ac.in" },
      { name: "GITAM University, Visakhapatnam", entrance: "Merit / Entrance", link: "https://www.gitam.edu" },
      { name: "Maharajah's College, Vizianagaram", entrance: "Merit Based", link: "#" }
    ],
    "BA": [
      { name: "Andhra University, Visakhapatnam", entrance: "Merit Based", link: "https://www.andhrauniversity.edu.in" },
      { name: "Sri Venkateswara University, Tirupati", entrance: "Merit Based", link: "https://www.svuniversity.edu.in" },
      { name: "Acharya Nagarjuna University", entrance: "Merit Based", link: "https://www.anu.ac.in" },
      { name: "Maharajah's College, Vizianagaram", entrance: "Merit Based", link: "#" },
      { name: "GITAM University, Visakhapatnam", entrance: "Merit / Entrance", link: "https://www.gitam.edu" }
    ],
    "BTech": [
      { name: "IIT Tirupati", entrance: "JEE Advanced", link: "https://www.iittirupati.ac.in" },
      { name: "Andhra University College of Engineering", entrance: "AU CET / JEE Main", link: "https://www.andhrauniversity.edu.in" },
      { name: "JNTU Anantapur", entrance: "JEE Main / JNTU Entrance", link: "https://www.jntua.ac.in" },
      { name: "GITAM University, Visakhapatnam", entrance: "JEE Main / GITAM Entrance", link: "https://www.gitam.edu" },
      { name: "Vellore Institute of Technology (VIT), Andhra Pradesh Campus", entrance: "VITEEE", link: "https://www.vit.ac.in" }
    ],
    "MBBS": [
      { name: "Andhra Medical College, Visakhapatnam", entrance: "NEET", link: "https://www.andhramedicalcollege.edu.in" },
      { name: "Guntur Medical College", entrance: "NEET", link: "https://www.gunturmedicalcollege.edu.in" },
      { name: "NRI Medical College, Vijayawada", entrance: "NEET", link: "https://www.nrimc.edu.in" },
      { name: "Kurnool Medical College", entrance: "NEET", link: "#" },
      { name: "SV Medical College, Tirupati", entrance: "NEET", link: "https://www.svmc.edu.in" }
    ]
  },

  "Odisha": {
    "BSc": [
      { name: "Utkal University, Bhubaneswar", entrance: "UU Entrance", link: "https://www.utkaluniversity.ac.in" },
      { name: "Fakir Mohan University, Balasore", entrance: "FMU Entrance", link: "https://www.fmuniversity.nic.in" },
      { name: "Berhampur University, Berhampur", entrance: "BU Entrance", link: "https://www.buodisha.edu.in" },
      { name: "Ravenshaw University, Cuttack", entrance: "RU Entrance", link: "https://www.ravenshawuniversity.ac.in" },
      { name: "Utkal Women's College, Bhubaneswar", entrance: "Merit Based", link: "#" }
    ],
    "BCom": [
      { name: "Utkal University, Bhubaneswar", entrance: "Merit Based", link: "https://www.utkaluniversity.ac.in" },
      { name: "Fakir Mohan University, Balasore", entrance: "Merit Based", link: "https://www.fmuniversity.nic.in" },
      { name: "Berhampur University, Berhampur", entrance: "Merit Based", link: "https://www.buodisha.edu.in" },
      { name: "Ravenshaw University, Cuttack", entrance: "Merit Based", link: "https://www.ravenshawuniversity.ac.in" },
      { name: "Government Women's College, Bhubaneswar", entrance: "Merit Based", link: "#" }
    ],
    "BA": [
      { name: "Utkal University, Bhubaneswar", entrance: "Merit Based", link: "https://www.utkaluniversity.ac.in" },
      { name: "Fakir Mohan University, Balasore", entrance: "Merit Based", link: "https://www.fmuniversity.nic.in" },
      { name: "Berhampur University, Berhampur", entrance: "Merit Based", link: "https://www.buodisha.edu.in" },
      { name: "Ravenshaw University, Cuttack", entrance: "Merit Based", link: "https://www.ravenshawuniversity.ac.in" },
      { name: "Government Women's College, Bhubaneswar", entrance: "Merit Based", link: "#" }
    ],
    "BTech": [
      { name: "Indian Institute of Technology (IIT), Bhubaneswar", entrance: "JEE Advanced", link: "https://www.iitbbs.ac.in" },
      { name: "Veer Surendra Sai University of Technology, Burla", entrance: "JEE Main / VSSUT Entrance", link: "https://www.vssut.ac.in" },
      { name: "National Institute of Technology (NIT), Rourkela", entrance: "JEE Main", link: "https://www.nitrkl.ac.in" },
      { name: "KIIT University, Bhubaneswar", entrance: "KIITEE / JEE Main", link: "https://www.kiit.ac.in" },
      { name: "College of Engineering & Technology, Bhubaneswar", entrance: "CET / JEE Main", link: "#" }
    ],
    "MBBS": [
      { name: "SCB Medical College, Cuttack", entrance: "NEET", link: "https://www.scbmch.nic.in" },
      { name: "MKCG Medical College, Berhampur", entrance: "NEET", link: "https://www.mkcgmedicalcollege.ac.in" },
      { name: "Hi-Tech Medical College, Bhubaneswar", entrance: "NEET", link: "https://www.hitechmedicalcollege.edu.in" },
      { name: "Sriram Chandra Bhanja Medical College, Cuttack", entrance: "NEET", link: "https://www.scbmch.nic.in" },
      { name: "KIMS, Bhubaneswar", entrance: "NEET", link: "https://www.kims.edu.in" }
    ]
  },

  "Chhattisgarh": {
    "B.Sc": [
      { name: "Government Science College, Raipur", link: "https://www.gscripur.ac.in/", entrance: "CGBSE Merit List", examLink: "https://www.cgbse.nic.in/" },
      { name: "Pt. Ravishankar Shukla University, Raipur", link: "https://www.prsu.ac.in/", entrance: "PRSU Entrance Test", examLink: "https://www.prsu.ac.in/entrance" },
      { name: "Government V.Y.T. PG College, Durg", link: "https://vytcollege.ac.in/", entrance: "Merit Based", examLink: "#" },
      { name: "Govt. Digvijay College, Rajnandgaon", link: "https://www.digvijaycollege.in/", entrance: "Merit List", examLink: "#" },
      { name: "Govt. Science College, Bilaspur", link: "https://www.gscbilaspur.ac.in/", entrance: "Merit Based", examLink: "#" }
    ],
    "B.Com": [
      { name: "Govt. N.P.G. College, Raipur", link: "#", entrance: "Merit List", examLink: "#" },
      { name: "Pt. Ravishankar Shukla University, Raipur", link: "https://www.prsu.ac.in/", entrance: "PRSU Entrance Test", examLink: "https://www.prsu.ac.in/entrance" }
    ],
    "B.A": [
      { name: "Govt. Arts College, Raipur", link: "#", entrance: "Merit Based", examLink: "#" }
    ],
    "B.Tech": [
      { name: "National Institute of Technology, Raipur", link: "https://www.nitrr.ac.in/", entrance: "JEE Main", examLink: "https://jeemain.nta.nic.in/" },
      { name: "Government Engineering College, Raipur", link: "#", entrance: "CG PET", examLink: "https://cgvyapam.choice.gov.in/" }
    ],
    "MBBS": [
      { name: "All India Institute of Medical Sciences, Raipur", link: "https://www.aiimsraipur.edu.in/", entrance: "NEET UG", examLink: "https://neet.nta.nic.in/" },
      { name: "Government Medical College, Raipur", link: "#", entrance: "NEET UG", examLink: "https://neet.nta.nic.in/" }
    ]
  },

  "Assam": {
    "B.Sc": [
      { name: "Gauhati University, Guwahati", link: "https://www.gauhati.ac.in/", entrance: "GU Entrance Test", examLink: "https://www.gauhati.ac.in/exam" },
      { name: "Cotton University, Guwahati", link: "https://www.cottonuniversity.ac.in/", entrance: "Merit Based", examLink: "#" }
    ],
    "B.Com": [
      { name: "Gauhati Commerce College, Guwahati", link: "#", entrance: "Merit List", examLink: "#" }
    ],
    "B.A": [
      { name: "Gauhati University, Guwahati", link: "https://www.gauhati.ac.in/", entrance: "GU Entrance Test", examLink: "https://www.gauhati.ac.in/exam" }
    ],
    "B.Tech": [
      { name: "Indian Institute of Technology, Guwahati", link: "https://www.iitg.ac.in/", entrance: "JEE Advanced", examLink: "https://jeeadv.ac.in/" },
      { name: "Assam Engineering College, Guwahati", link: "https://aecassam.in/", entrance: "JEE Main", examLink: "https://jeemain.nta.nic.in/" }
    ],
    "MBBS": [
      { name: "Gauhati Medical College, Guwahati", link: "https://gmch.assam.gov.in/", entrance: "NEET UG", examLink: "https://neet.nta.nic.in/" }
    ]
  },

  "Meghalaya": {
    "B.Sc": [
      { name: "North Eastern Hill University, Shillong", link: "https://www.nehu.ac.in/", entrance: "NEHU Entrance Exam", examLink: "https://www.nehu.ac.in/entrance" },
      { name: "St. Anthony's College, Shillong", link: "#", entrance: "Merit List", examLink: "#" }
    ],
    "B.Com": [
      { name: "St. Edmund's College, Shillong", link: "#", entrance: "Merit Based", examLink: "#" }
    ],
    "B.A": [
      { name: "North Eastern Hill University, Shillong", link: "https://www.nehu.ac.in/", entrance: "NEHU Entrance Exam", examLink: "https://www.nehu.ac.in/entrance" }
    ],
    "B.Tech": [
      { name: "National Institute of Technology, Meghalaya", link: "https://nitm.ac.in/", entrance: "JEE Main", examLink: "https://jeemain.nta.nic.in/" }
    ],
    "MBBS": [
      { name: "North Eastern Indira Gandhi Regional Institute of Health & Medical Sciences (NEIGRIHMS), Shillong", link: "https://www.neigrihms.gov.in/", entrance: "NEET UG", examLink: "https://neet.nta.nic.in/" }
    ]
  },

  "Tripura": {
    "B.Sc": [
      { name: "Tripura University, Agartala", link: "https://www.tripurauniv.ac.in/", entrance: "TU Entrance Test", examLink: "https://www.tripurauniv.ac.in/admission" },
      { name: "Maharaja Bir Bikram College, Agartala", link: "#", entrance: "Merit Based", examLink: "#" }
    ],
    "B.Com": [
      { name: "Maharaja Bir Bikram College, Agartala", link: "#", entrance: "Merit List", examLink: "#" }
    ],
    "B.A": [
      { name: "Tripura University, Agartala", link: "https://www.tripurauniv.ac.in/", entrance: "TU Entrance Test", examLink: "https://www.tripurauniv.ac.in/admission" }
    ],
    "B.Tech": [
      { name: "National Institute of Technology, Agartala", link: "https://www.nittrp.ac.in/", entrance: "JEE Main", examLink: "https://jeemain.nta.nic.in/" }
    ],
    "MBBS": [
      { name: "Agartala Government Medical College", link: "#", entrance: "NEET UG", examLink: "https://neet.nta.nic.in/" }
    ]
  },

  "Nagaland": {
    "B.Sc": [
      { name: "Nagaland University, Kohima", link: "https://nagalanduniversity.ac.in/", entrance: "NU Entrance Exam", examLink: "https://nagalanduniversity.ac.in/admission" }
    ],
    "B.Com": [
      { name: "St. Joseph's College, Jakhama", link: "#", entrance: "Merit List", examLink: "#" }
    ],
    "B.A": [
      { name: "Nagaland University, Kohima", link: "https://nagalanduniversity.ac.in/", entrance: "NU Entrance Exam", examLink: "https://nagalanduniversity.ac.in/admission" }
    ],
    "B.Tech": [
      { name: "National Institute of Technology, Nagaland (Upcoming/Plan)", link: "#", entrance: "JEE Main", examLink: "https://jeemain.nta.nic.in/" }
    ],
    "MBBS": [
      { name: "Nagaland Medical College, Dimapur", link: "#", entrance: "NEET UG", examLink: "https://neet.nta.nic.in/" }
    ]
  }
};



// 🎓 Event Listeners
document.getElementById("degreeSelect").addEventListener("change", showColleges);
document.getElementById("stateSelect").addEventListener("change", showColleges);

function showColleges() {
  const state = document.getElementById("stateSelect").value;
  const degree = document.getElementById("degreeSelect").value;
  const resultsDiv = document.getElementById("collegeResults");

  resultsDiv.innerHTML = "";

  if (state && degree && collegeData[state] && collegeData[state][degree]) {
    const colleges = collegeData[state][degree];
    colleges.forEach(college => {
      const card = document.createElement("div");
      card.className = "college-card";
      card.innerHTML = `
        <h3>${college.name}</h3>
        <p>Exam: <a href="${college.exam.link}" target="_blank">${college.exam.name}</a></p>
        <p><a href="${college.collegeLink}" target="_blank">Visit College</a></p>
      `;
      resultsDiv.appendChild(card);
    });
  } else if (state && degree) {
    resultsDiv.innerHTML = `<p>No data available for ${degree} in ${state}.</p>`;
  }
}
function scrollToHighlights() {
  const highlights = document.querySelector('.highlight-cards');
  if(highlights){
    highlights.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToColleges() {
  const colleges = document.querySelector('.college-finder');
  if(colleges){
    colleges.scrollIntoView({ behavior: 'smooth' });
  }
}

