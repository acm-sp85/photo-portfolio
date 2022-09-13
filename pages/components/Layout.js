import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
