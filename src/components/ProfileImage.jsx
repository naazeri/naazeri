function ProfileImage({ imageSrc, alt = '' }) {
  return (
    <img
      className="w-52 h-52 shadow-[0px_0px_40px_1px_#000000aa] rounded-full object-cover"
      src={imageSrc}
      alt={alt}
    />
  );
}
export default ProfileImage;
