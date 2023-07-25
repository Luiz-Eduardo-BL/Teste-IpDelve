import LocationList from "../components/Location";
import Logout from "../components/Logout";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full text-white px-4">
      <h1 className="text-2xl font-semibold px-10">Dashboard</h1>
      <div>
        <Logout />
      </div>
    </div>
  );
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex-grow overflow-x-auto mt-4">
        <LocationList />
      </div>
    </div>
  );
}
