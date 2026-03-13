import './App.css'
import KPI from './components/shared/KPI'
import OrderPerDay from './components/OrdersPerDay'
import { getAvgOrderValue, getCancellationRate, getTotalOrders } from './services/api'
import DeliveryTimePerHour from './components/DeliverTimePerHour'
import OrdersPerCity from './components/OrdersPerCity'
import RevenuePerCity from './components/RevenuePercity'
import AvgDeliveryTimePerCity from './components/AvgDeliveryTimePerCity'
import CancellationPerCity from './components/CancellationPerCity'

function App() {

  return (
    <div className='w-full h-auto flex flex-col p-10 gap-4'>
      <KPI title={"Total Orders"} apifunction={getTotalOrders()}/>
      <KPI title={"Average Order Value"} apifunction={getAvgOrderValue()} />
      <KPI title={"Cancellation Rate"} apifunction={getCancellationRate()} />
      <OrderPerDay />
      <DeliveryTimePerHour />
      <OrdersPerCity />
      <RevenuePerCity />
      <AvgDeliveryTimePerCity />
      <CancellationPerCity />
    </div>
  )
}

export default App
