const ratio = 0.1;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const handleIntersectHome = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }

    setTimeout(() => {
      if (entry.target.classList.contains("btn-welcome")) {
        entry.target.classList.remove("reveal-5");
      }
    }, 1000);
  });
};

const observerHome = new IntersectionObserver(handleIntersectHome, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observerHome.observe(r);
});

const handleIntersectNav = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("nav_reveal-visible");
      observer.unobserve(entry.target);
    }

    setTimeout(() => {
      entry.target.classList.forEach(function (className) {
        if (className.startsWith("nav_reveal")) {
          entry.target.classList.remove(className);
        }
      });
    }, 1000);
  });
};

const observerNav = new IntersectionObserver(handleIntersectNav, options);
document.querySelectorAll('[class*="nav_reveal"]').forEach(function (r) {
  observerNav.observe(r);
});

const handleIntersectContact = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("revealBlock-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observerContact = new IntersectionObserver(
  handleIntersectContact,
  options
);
document.querySelectorAll(".revealBlock").forEach(function (r) {
  observerContact.observe(r);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function displayProjectSkillsExperience() {
  await sleep(1000);

  const handleIntersectProjectExperience = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add("revealBlock-visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observerProjetExperience = new IntersectionObserver(
    handleIntersectProjectExperience,
    options
  );
  document.querySelectorAll(".revealBlock").forEach(function (r) {
    observerProjetExperience.observe(r);
  });

  const handleIntersectSkills = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add("revealSkills-visible");
        observer.observe(entry.target);
      }
    });
  };

  const observerSkills = new IntersectionObserver(
    handleIntersectSkills,
    options
  );
  document.querySelectorAll(".revealSkills").forEach(function (r) {
    observerSkills.observe(r);
  });
}

displayProjectSkillsExperience();
