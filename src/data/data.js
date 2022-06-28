const getData = () => {
  return [
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: false,
      createdAt: "2022-04-14T04:27:34.572Z",
    },
    {
      id: 2,
      title: "Linkedin",
      body: "LinkedIn Learning is an American online learning provider. It provides video courses taught by industry experts in software, creative, and business skills. It is a subsidiary of LinkedIn. All the courses on LinkedIn fall into four categories: Business, Creative, Technology and Certifications.",
      archived: false,
      createdAt: "2022-04-14T04:27:34.572Z",
    },
    {
      id: 3,
      title: "Youtube",
      body: "YouTube is an American online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google, and is the second most visited website, after Google Search",
      archived: true,
      createdAt: "2022-04-14T04:27:34.572Z",
    },
    {
      id: 4,
      title: "Instagram",
      body: "Instagram is a photo and video sharing social networking service founded in 2010 by Kevin Systrom and Mike Krieger, and later acquired by American company Facebook Inc. The app allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging.",
      archived: true,
      createdAt: "2022-04-14T04:27:34.572Z",
    },
  ];
};

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getData, showFormattedDate };
