// Displayed in TEACHING section
// NOTE: If class has no prerequisites, enter "none" into prerequisites array and it will display as green button instead of red and will not link to anything
export const TeachingsItems = {
  "Fall 2021": [
    {
      course: "COMP 596: Principles of Computer Systems",
      overview:
        "In this course, we identify some of the core principles in systems design and learn how to solve problems in computing using ideas, techniques, and algorithms from operating systems, networks, databases, and computer architecture. The basic courses on these topics teach how the individual parts of systems work. POCS picks up where those courses leave off and focuses on how the pieces come together to form useful, efficient systems.",
      instructors: [
        {
          name: "Oana Balmau",
          link: "https://sites.google.com/view/oanabalmau",
        },
      ],
      prerequisites: ["COMP 206", "COMP 273", "COMP 310"],
      syllabus: "https://sites.google.com/view/oanabalmau/pocs?authuser=0",
      notes:
        "There are no prerequisites for graduate students, but a background in operating systems, databases, networking, and computer architecture is highly recommended.",
    },
  ],
  "Winter 2021": [
    {
      course: "COMP 310: Operating Systems",
      overview:
        "Control and scheduling of large information processing systems. Operating system software - resource allocation, dispatching, processors, access methods, job control languages, main storage management. Batch processing, multiprogramming, multiprocessing, time sharing.",
      instructors: [
        {
          name: "Oana Balmau",
          link: "https://sites.google.com/view/oanabalmau",
        },
        {
          name: "Joseph Vybihal",
          link: "https://www.cs.mcgill.ca/~jvybihal/index.php?Page=Home",
        },
      ],
      prerequisites: ["COMP 273"],
      syllabus:
        "https://www.cs.mcgill.ca/media/academic/courses/17_COMP_310_kotTIIj.pdf",
      notes: "",
    },
  ],
};
