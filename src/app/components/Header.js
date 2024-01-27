export default function header() {
  return (
    <header className="flex items-center justify-between">
      <a className="text-indigo-700 font-semibold text-xl" href="/">
        St Pizza
      </a>
      <nav className="flex items-center gap-7 font-semibold  text-blue-500">
        <a href={"/"}>Home</a>
        <a href={""}>Menu</a>
        <a href={""}>About</a>
        <a href={""}>Contact</a>
      </nav>
      <nav className="flex items-center gap-4  font-semibold text-blue-500 ">
        <a href="/login">Login</a>
        <a
          href={"/register"}
          className="bg-sky-700 rounded-full text-white px-6 py-2"
        >
          Register
        </a>
      </nav>
    </header>
  );
}
