
function Awards() {
  const listsArray = [
    {
      'id': 1,
      'name': 'Awwwards',
      'value': '4',
      // 'year': '2022-Present',
    },
    {
      'id': 2,
      'name': 'CSS Design Awards',
      'value': '3',
      // 'year': '2020-2021',
    },
    {
      'id': 3,
      'name': 'CSS Winner',
      'value': '2',
      // 'year': '2016-2020',
    }
  ];
  return (
    <>
      <section className="py-20 xl:py-24 px-4 lg:px-8">
        <div className="flex items-start flex-col xl:flex-row text-left gap-2">
          <div className="w-full xl:w-1/3 pb-14 xl:p-0">
            <h3 className="text-[28px] xl:text-[34px] font-[600] uppercase">MY <span className="text-[#737373]">AWARDS</span></h3>
          </div>
          <div className="flex flex-col w-full xl:w-2/3 gap-5">
            {listsArray.map(list => (
              <List key={list.id} list={list}></List>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Awards;

const List = ({ list }) => (
  <div className="grid grid-cols-2 lg:grid-cols-3 text-lg w-full text-[#bfbfbf] pb-5 border-b border-solid border-[rgb(38,38,38)]">
    <h2 className="flex gap-2 leading-none text-white lg:col-span-2">{list.name}</h2>
    <h3 className="flex gap-2 leading-none xsm:ml-auto">{list.value}</h3>
  </div>
);