const opportunities = [
  {
    img: "https://spring.io/img/projects/spring-boot.svg",
    title: "Spring Boot",
    description: `Takes an opinionated view of building Spring applications
       and gets you up and running as quickly as possible.`,
  },
  {
    img: "https://spring.io/img/projects/spring-framework.svg?v=2",
    title: "Spring Framework",
    description: `Provides core support for dependency injection, transaction
      management, web apps, data access, messaging, and more.`,
  },
  {
    img: "https://spring.io/img/projects/spring-data.svg",
    title: "Spring Data",
    description: `Provides a consistent approach to data access – relational,
      non-relational, map-reduce, and beyond.`,
  },
  {
    img: "https://spring.io/img/projects/spring-cloud.svg",
    title: "Spring Cloud",
    description: `Provides a set of tools for common patterns in distributed
      systems. Useful for building and deploying microservices.`,
  },
  {
    img: "https://spring.io/img/projects/spring-data-flow.svg",
    title: "Spring Data Flow",
    description: `Provides an orchestration service for composable data
      microservice applications on modern runtimes.`,
  },
  {
    img: "https://spring.io/img/projects/spring-security.svg",
    title: "Spring Security",
    description: `Protects your application with comprehensive and extensible
      authentication and authorization support.`,
  },
];

const navigationItems = [
  {
    label: "Why Spring",
    link: "#",
    children: [
      {
        label: "Overview",
        link: "#",
      },
      {
        label: "Microservices",
        link: "#",
      },
      {
        label: "Reactive",
        link: "#",
      },
      {
        label: "Event Driven",
        link: "#",
      },
      {
        label: "Cloud",
        link: "#",
      },
      {
        label: "Web Applications",
        link: "#",
      },
      {
        label: "Serverless",
        link: "#",
      },
      {
        label: "Batch",
        link: "#",
      },
    ],
  },
  {
    label: "Learn",
    link: "#",
    children: [
      {
        label: "Overview",
        link: "#",
      },
      {
        label: "Quickstart",
        link: "#",
      },
      {
        label: "Guides",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
    ],
  },
  {
    label: "Projects",
    link: "#",
    children: [
      {
        label: "Overview",
        link: "#",
      },
      {
        label: "Spring Boot",
        link: "#",
      },
      {
        label: "Spring Framework",
        link: "#",
      },
      {
        label: "Spring Cloud",
        link: "#",
      },
      {
        label: "Spring Cloud Data Flow",
        link: "#",
      },
      {
        label: "Spring Data",
        link: "#",
      },
      {
        label: "Spring Security",
        link: "#",
      },
    ],
  },
  {
    label: "Academy",
    link: "#",
    children: [
      {
        label: "Courses",
        link: "#",
      },
      {
        label: "Get Sertified",
        link: "#",
      },
    ],
  },
  {
    label: "Support",
    link: "#",
    children: [
      {
        label: "Overview",
        link: "#",
      },
      {
        label: "Security Advisories",
        link: "#",
      },
    ],
  },
  {
    label: "Community",
    link: "#",
    children: [
      {
        label: "Overview",
        link: "#",
      },
      {
        label: "Events",
        link: "#",
      },
      {
        label: "Team",
        link: "#",
      },
    ],
  },
];

const opportunitiesContainer = document.querySelector(
  ".opportunities_container"
);

const addOpportunity = (opportunity) => {
  const opportunityItem = document.createElement("div");
  opportunityItem.classList.add("opportunity_item");
  opportunityItem.innerHTML = `<div class="opportunity_item-image">
    <img
      src=${opportunity.img}
      alt="Spring Boot"
    />
    </div>
    <div class="opportunity_item-info">
      <h1 class="opportunity_item-title">${opportunity.title}</h1>
      <p class="opportunity_item-description">
      ${opportunity.description}
      </p>
    </div>`;

  opportunitiesContainer.append(opportunityItem);
};

opportunities.forEach((item) => {
  addOpportunity(item);
});

const navigationContainer = document.querySelector(".header_navigation-list");
const sidenavContainer = document.querySelector(".sidenav-navigation");

const addNavigation = (navigation) => {
  const li = document.createElement("li");
  li.classList = "header_navigation-item";

  const a = document.createElement("a");
  a.classList = "header_navigation-link";

  li.innerHTML = `<a class="header_navigation-link">${navigation.label}</a>
  <div class="dropdown-content">
  ${navigation.children
    .map((link) => {
      return `<a href=${link.link}>${link.label}</a>`;
    })
    .join("")}
  </div>
  `;

  navigationContainer.append(li);
};

const handleExpandedState = (e) => {
  const target = e.target.parentElement;
  if (target.classList.contains("expanded")) {
    target.classList.remove("expanded");
  } else {
    const previouslyExpanded = document.querySelector(
      ".navigation-item.expanded"
    );
    if (previouslyExpanded) {
      previouslyExpanded.classList.remove("expanded");
    }
    target.classList.add("expanded");
  }
};

const addSideNavigation = (navigation) => {
  const container = document.createElement("div");

  container.classList = "navigation-item";

  const link = document.createElement("a");

  link.addEventListener("click", handleExpandedState);
  link.href = navigation.link;
  link.innerText = navigation.label;

  container.append(link);

  if (navigation.children.length) {
    const nestedContainer = document.createElement("div");
    nestedContainer.classList = "nested";

    container.append(nestedContainer);

    navigation.children.forEach((child) => {
      const nestedLink = document.createElement("a");
      nestedLink.href = child.link;
      nestedLink.innerText = child.label;

      nestedContainer.append(nestedLink);
    });
  }

  sidenavContainer.append(container);
};

navigationItems.forEach((navigation) => {
  addNavigation(navigation);
  addSideNavigation(navigation);
});

const debounce = (fn, delay) => {
  let timeout;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

document.querySelector(".input").addEventListener(
  "keyup",
  debounce(() => {
    opportunitiesContainer.innerHTML = "";

    const input = document.querySelector(".input").value?.toLowerCase();
    const error = document.querySelector(".error_title");

    error.innerHTML = "";

    const filtered = opportunities.filter((item) => {
      return (
        item.title.toLowerCase().includes(input) ||
        item.description.toLowerCase().includes(input)
      );
    });

    console.log(filtered);

    if (!filtered.length) {
      error.innerHTML = "No results";
    } else {
      filtered.forEach((item) => addOpportunity(item));
    }
  }, 300)
);

function openNav() {
  document.querySelector(".mySidenav").style.height = "100%";
}

function closeNav() {
  document.querySelector(".mySidenav").style.height = "0";
}
