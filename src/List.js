function List() {
  const name = ["ram", "shyam", "laxman", "sonu", "monu", "tonu"];

  const showlist = () =>
    name.map((e) => {
      console.log("e", e);
      return <li>{e}</li>;
    });

  const filterlist = name.filter((element) => {
    // console.log("filter element", element);
    return element !== "tonu";
  });
  //   console.log("filterlist", filterlist);
  const renderlistfilter = () => filterlist.map((dl) => <li>{dl}</li>);

  const filterno = name.filter((el, index) => {
    return index == 2;
  });

  const rendernolistfilter = () =>
    filterno.map((no) => {
      return <li>{no}</li>;
    });

  let data = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
  ];

  const printdata = () =>
    data.map((datashow) => {
      console.log(datashow);
      return (
        <>
          <li>
            <input type="checkbox" checked={datashow.completed} />
            {datashow.title}
          </li>
        </>
      );
    });

  return (
    <>
      <ul>{showlist()}</ul>
      <h1>Filtered Array</h1>
      <ol>{renderlistfilter()}</ol>
      <ol>{rendernolistfilter()}</ol>
      <ol>{printdata()}</ol>
    </>
  );
}

export default List;
