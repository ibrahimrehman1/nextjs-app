import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <footer>Hello Footer</footer>
    </>
  );
}
