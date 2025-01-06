function Container({ children }) {
  return (
    <div className="bg-[url('/images/background.webp')] bg-no-repeat bg-center bg-cover h-screen flex items-center justify-center">
      <main className="flex flex-col items-center justify-center gap-14 w-screen h-screen bg-[#ff9100e3]">
        {children}
      </main>
    </div>
  );
}

export default Container;
