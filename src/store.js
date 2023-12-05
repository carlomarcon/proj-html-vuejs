import { reactive } from "vue";

export const store = reactive({
  objectArray: [
    {
      logo: "fa-regular fa-building",
      title: "Buildings",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolor incidunt recusandae iure perferendis vitae, magni ipsa laboriosam nisi maiores voluptate numquam sint suscipit autem quis!",
    },
    {
      logo: "fa-solid fa-arrows-rotate",
      title: "Renovate",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolor incidunt recusandae iure perferendis vitae, magni ipsa laboriosam nisi maiores voluptate numquam sint suscipit autem quis!",
    },
    {
      logo: "fa-solid fa-house",
      title: "Construct",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolor incidunt recusandae iure perferendis vitae, magni ipsa laboriosam nisi maiores voluptate numquam sint suscipit autem quis!",
    },
    {
      logo: "fa-solid fa-truck",
      title: "Exclusive",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolor incidunt recusandae iure perferendis vitae, magni ipsa laboriosam nisi maiores voluptate numquam sint suscipit autem quis!",
    },
  ],
  objectarrayStats: [
    {
      logo: "fa-solid fa-suitcase",
      title: "3534",
      paragraph: "PLANNING APPLICATIONS",
    },
    {
      logo: "fa-regular fa-building",
      title: "896",
      paragraph: "COMPLETED PROJECTS",
    },
    {
      logo: "fa-solid fa-users",
      title: "172",
      paragraph: "TRAINED PROFESSIONALS",
    },
    {
      logo: "fa-solid fa-globe",
      title: "19",
      paragraph: "INTERNATIONAL OFFICES",
    },
  ],
  objectImg: [
    {
      img: "project2-featured-15013609-600x600.jpg",
    },
    { img: "project1-featured-294276386-600x600.jpg" },
    { img: "project3-featured-189023420-600x600.jpg" },
  ],
});
