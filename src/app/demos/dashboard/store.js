/*
 * NAVIGATION
 */
export const navPrimary = [
  {
    id: 1,
    icon: 'dashboard',
    text: 'Dashboard'
  },
  {
    id: 2,
    icon: 'shopping_cart',
    text: 'Orders'
  },
  {
    id: 3,
    icon: 'people',
    text: 'Customers'
  },
  {
    id: 4,
    icon: 'bar_chart',
    text: 'Reports'
  },
  {
    id: 5,
    icon: 'layers',
    text: 'Integrations'
  }
]

export const navSecondary = [
  {
    id: 6,
    icon: 'assignment',
    text: 'Current month'
  },
  {
    id: 7,
    icon: 'assignment',
    text: 'Last quarter'
  },
  {
    id: 8,
    icon: 'assignment',
    text: 'Year-end sale'
  }
]

// Generate Sales Data
const createDataChart = (time, amount) => {
  return { time, amount }
}

export const chart = [
  createDataChart('00:00', 0),
  createDataChart('03:00', 300),
  createDataChart('06:00', 600),
  createDataChart('09:00', 800),
  createDataChart('12:00', 1500),
  createDataChart('15:00', 2000),
  createDataChart('18:00', 2400),
  createDataChart('21:00', 2400),
  createDataChart('24:00', undefined)
]

// Generate Order Data
const createDataOrder = (id, date, name, shipTo, paymentMethod, amount) => {
  return { id, date, name, shipTo, paymentMethod, amount }
}

export const orders = [
  createDataOrder(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createDataOrder(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createDataOrder(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createDataOrder(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createDataOrder(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79)
]

export const deposits = {
  value: '$3,024.00',
  date: '15 March, 2019'
}

export const drawerWidth = 240
