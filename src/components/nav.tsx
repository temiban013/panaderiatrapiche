import Link from 'next/link';

export default function HamburgerMenu() {
  return (
    <>
      <Link href="/">
        <a className="menu-item">Home</a>
      </Link>
      <Link href="/menu">
        <a className="menu-item">Menu</a>
      </Link>
      <Link href="/aboutus">
        <a className="menu-item">About Us</a>
      </Link>
      <Link href="/contactus">
        <a className="menu-item">Contact Us</a>
      </Link>
    </>
  );
}