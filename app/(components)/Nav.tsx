import Link from "next/link";

const Nav = () => {
  return (
    <header className="bg-black-100 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <Link href="/">My Site</Link>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/rates">Rates</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
