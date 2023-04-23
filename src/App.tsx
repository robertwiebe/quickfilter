function App() {
  const filters = [
    {
      key: "Mega evolution",
      value: "mega1,mega2",
    },
    {
      key: "12 candy evolution",
      value: "10,13,16,265,293,519",
    },
    {
      key: "PvP",
      value: "0-1attack&3defense&3hp",
    },
    {
      key: "Nundo",
      value: "0attack&0defense&0hp",
    },
  ];

  return (
    <div className="p-4">
      {filters.map((filter, i) => {
        return (
          <div key={`filter-${i}`} className="w-full flex flex-col pb-2">
            <span className="font-bold pb-2">{filter.key}</span>
            <button
              className="p-2 border rounded bg-gray-100 truncate"
              onPointerUp={(_e) => {
                navigator.clipboard.writeText(filter.value);
              }}
            >
              {filter.value}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
