export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, recusandae maxime! Cum asperiores itaque consectetur voluptatibus illum vero ab odio soluta, repellendus unde incidunt odit nobis culpa reprehenderit a eius? ",
      image: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi nemo modi a deleniti delectus sunt ab vitae dolores non, ipsa impedit nam ullam maiores voluptatibus officiis, ipsum illo similique.",
      image: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tenetur consequatur, iusto repellat explicabo vel, porro dolores illum quasi provident vero, assumenda magni earum omnis doloribus a tempore saepe ducimus.",
      image: null,
    },
  ],
});
