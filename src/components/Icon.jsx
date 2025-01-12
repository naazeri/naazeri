function Icon({ IconComponent, link, children }) {
  return (
    <a href={link} target="_blank">
      {IconComponent ? (
        <IconComponent
          className={`text-2xl 2xs:text-3xl xs:text-4xl text-white hover:text-black transition-colors`}
        />
      ) : (
        children
      )}
    </a>
  );
}

export default Icon;
