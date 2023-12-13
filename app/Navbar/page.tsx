import ActionButtons from './action-buttons'
import Logo from './logo'
import NavigationBar from './navigation-bar'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 border-b">
      <Logo />
      <NavigationBar />
      <ActionButtons />
    </div>
  );
};

export default Navbar;
