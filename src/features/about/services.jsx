function Services() {
  const servicesDetails = [
    {
      'id': 1,
      'name': 'Branding',
      'value': 'Web Design',
    },
    {
      'id': 2,
      'name': 'Strategy',
      'value': 'Product design',
    },
    {
      'id': 3,
      'name': 'Art Direction',
      'value': 'Web Development',
    },
  ];
  return (
    <>
      <section className="pt-40 px-4 lg:px-8 pb-20 xl:pb-24">
        <div className="flex items-start flex-col xl:flex-row text-left gap-2">
          <div className="w-full xl:w-1/3 pb-14 xl:p-0">
            <h3 className="text-[28px] xl:text-[34px] font-[600] uppercase">Services <span className="text-[#737373]">I OFFER</span></h3>
          </div>
          <div className="flex flex-col w-full xl:w-2/3 gap-5">
            {servicesDetails.map(service => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;

const Service = ({ service }) => (
  <div className="grid grid-cols-2 text-lg w-full text-[#bfbfbf] pb-5 border-b border-solid border-[rgb(38,38,38)]">
    <h2 className="flex gap-2 leading-none">{service.name}</h2>
    <p className="flex">{service.value}</p>
  </div>
);