function Icon({ IconComponent, link }) {
  return (
    <a href={link} target="_blank">
      <IconComponent
        className={`text-2xl 2xs:text-3xl xs:text-4xl text-white hover:text-black transition-colors`}
      />
    </a>
  );
}

export default Icon;
