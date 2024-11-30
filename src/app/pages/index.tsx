import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import CalendarComponent from "../components/Calendar";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "250px", width: "100%" }}>
        <Table />
        <CalendarComponent />
      </div>
    </div>
  );
}

