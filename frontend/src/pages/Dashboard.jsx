import BuyersProfilePieChart from "../sections/BuyersProfilePieChart";
import DashboardStatsGrid from "../sections/DashboardStatsGrid";
import PopularProducts from "../sections/PopularProducts";
import RecentOrders from "../sections/RecentOrders";
import TransactionChart from "../sections/TransactionChart";

const DashBoard = () => {
  return (
    <main className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <section className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyersProfilePieChart />
      </section>
      <section className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</section>
    </main>
  );
};

export default DashBoard;