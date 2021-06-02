export const ResearchItems = [
  {
    title: "Storage Systems for Data Science",
    description:
      "Data Science and AI workloads are ubiquitous. From taking care of our health, to running businesses, to managing our energy systems and transport planning, we leverage data science and learning to make more informed decisions. We are able to obtain these insights through the combination of smart algorithms and access to vast amounts of data. Data management now poses a bottleneck that can unfortunately slow down the entire pipeline. The way data is stored and accessed strongly influences how fast the algorithms can provide us with useful insights.",
    direction:
      "The needs of Data Science workloads are poorly met by current general-purpose storage systems. Consequently, to obtain fast results systems rely on heuristics, approximations, or use of stale information. I am interested in designing and building a new storage system that (1) scales with the vast datasets used by Data Science workloads, (2) ingests and cleans new incoming data at high throughput, (3) serves data with low latency, and (4) is energy-efficient. This challenging goal entails many research directions, such as identifying opportunities to reduce data movement, designing adaptable data structures that harmonize with Data Science workloads, and the creative use of new storage resources (e.g., NVRAM, fast SSDs, etc.).",
    keywords: ["Data Science", "Big Data", "Energy Effiency"],
    id: "research1",
    image_url: "/static/deck_images/new_white_data_science.png",
  },
  {
    title: "Reimagining Storage Building Blocks for Fast Devices",
    description:
      "Emerging storage technologies challenge fundamental assumptions in computer systems design. One major assumption being challenged is the significant performance gap between memory and persistent storage access. This gap is now bridged by Byte-addressable persistent memory (e.g., Intel 3D XPoint). Another assumption is that I/O bandwidth is the main bottleneck in storage systems. This too has changed with the development of new fast drives (e.g., Intel Optane NVMe SSDs) shifting the bottleneck to the CPU. In addition, the storage stack is getting deeper and more heterogeneous. It is likely that in a typical server developers and system administrators will have to manage RAM, persistent memory, different types of SSDs and hard disks.",
    direction:
      "These hardware advances provide an opportunity to redesign the basic storage building blocks, such as file systems, caching policies, key-value stores, and relational databases, as well as re-questioning the appropriate level of support that should be ensured by the Operating System. Ultimately, given that the hardware and the workloads keep evolving, my long-term vision is to create a framework that automatically generates storage systems which meet the desired performance requirements, given the workload profile and a set of generic hardware characteristics (e.g., sequential access speed relative to the random access speed, bandwidth, storage capacity etc.) as inputs.",
    keywords: ["Hardware", "Systems Design", "Optimal Performance"],
    id: "research2",
    image_url: "/static/deck_images/new_white_storage.png",
  },
  {
    title: "Data Management for the Internet of Things",
    description:
      "The Internet of Things (IoT) is a fast growing field which produces vast amounts of data. In fact, it is estimated that the data produced by IoT workloads alone in 2025 will be larger than all of the data we will produce in 2020. Naturally, this is an excellent opportunity for storage research.",
    direction:
      "From a storage systems perspective, IoT workloads pose serious challenges in terms of resource management. Numerous IoT settings make use of battery-powered devices with limited energy, low storage and data processing capacities, and unreliable connectivity. An interesting direction is determining at what granularity such systems should store data at the sensor-, edge-, and cloud-levels, while developing energy-efficient schemes for data-filtering and data-movement between these layers. In addition, the nature of the collected IoT data raises compelling questions as well. One possible avenue is designing data layouts that are suitable for storing vast amounts of noisy data, which may also contain high levels of redundancy (e.g., in video surveillance systems).",
    keywords: ["Internet of Things", "Resource Management", "Cloud Computing"],
    id: "research3",
    image_url: "/static/deck_images/new_white_IOT.png",
  },
];
