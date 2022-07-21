const ListRender = () => {
  let list = ["Jonas", "Rafael", "Pedro"];
  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListRender;
