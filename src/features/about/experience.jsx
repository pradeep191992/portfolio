
function Experience() {
  const listsArray = [
    {
      'id': 1,
      'name': 'Product Designer',
      'value': 'Apple',
      'year': '2022-Present',
    },
    {
      'id': 2,
      'name': 'UI/UX Designer',
      'value': 'Amazon',
      'year': '2020-2021',
    },
    {
      'id': 3,
      'name': 'Web Designer',
      'value': 'Google',
      'year': '2016-2020',
    },
    {
      'id': 4,
      'name': 'UI/UX Designer',
      'value': 'Microsoft',
      'year': '2010-2015',
    },
  ];
  return (
    <>
      <section className="py-20 xl:py-24 px-4 lg:px-8">
        <div className="flex items-start flex-col xl:flex-row text-left gap-2">
          <div className="w-full xl:w-1/3 pb-14 xl:p-0">
            <h3 className="text-[28px] xl:text-[34px] font-[600] uppercase">MY <span className="text-[#737373]">EXPERIENCE</span></h3>
          </div>
          <div className="flex flex-col w-full xl:w-2/3 gap-5">
            {listsArray.map(listItem => (
              <List key={listItem.id} listItem={listItem}></List>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Experience;

const List = ({ listItem }) => (
  <div className="grid grid-cols-[1fr,100px,1fr] lg:grid-cols-3 text-lg w-full text-[#bfbfbf] pb-5 border-b border-solid border-[rgb(38,38,38)] whitespace-nowrap gap-2">
    <h2 className="flex gap-2 leading-none text-white">{listItem.name}</h2>
    <h3 className="flex gap-2 leading-none">{listItem.value}</h3>
    <p className="flex">{listItem.year}</p>
  </div>
);