function HeaderBlock() {
  return (
    <header className="TodoApp_Header">
      <span style={{ color: "#83ff83" }} className="font-xl">
        Todo App
      </span>
      <p className="font-md italic">
        made in pure <span style={{ color: "#8383ff" }}>React </span>
        and
        <span style={{ color: "#ff8383" }}> Zustand state manager</span>
      </p>
    </header>
  );
}

export default HeaderBlock;
