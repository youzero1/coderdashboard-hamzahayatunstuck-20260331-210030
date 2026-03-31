export default function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">Dash<span>board</span></div>
        <nav>
          <a href="#" className="nav-item active">
            <span className="nav-icon">📊</span>
            Overview
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📈</span>
            Analytics
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">👥</span>
            Customers
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📦</span>
            Products
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">💬</span>
            Messages
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">⚙️</span>
            Settings
          </a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <div>
            <h1>Dashboard Overview</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem' }}>
              Welcome back! Here is what is happening today.
            </p>
          </div>
          <div className="header-actions">
            <button className="btn btn-secondary">📅 Today</button>
            <button className="btn btn-primary">+ New Report</button>
          </div>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Revenue</h3>
            <div className="stat-value">$48,574</div>
            <span className="stat-change positive">↑ 12.5% vs last month</span>
          </div>
          <div className="stat-card">
            <h3>Active Users</h3>
            <div className="stat-value">2,456</div>
            <span className="stat-change positive">↑ 8.2% vs last month</span>
          </div>
          <div className="stat-card">
            <h3>New Orders</h3>
            <div className="stat-value">1,234</div>
            <span className="stat-change negative">↓ 3.1% vs last month</span>
          </div>
          <div className="stat-card">
            <h3>Conversion Rate</h3>
            <div className="stat-value">3.24%</div>
            <span className="stat-change positive">↑ 1.2% vs last month</span>
          </div>
        </div>

        <div className="content-grid">
          <div className="card">
            <div className="card-header">
              <h2>Revenue Overview</h2>
              <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                Last 7 Days
              </button>
            </div>
            <div className="card-body">
              <div className="chart-placeholder">
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '80%' }}></div>
                <div className="chart-bar" style={{ height: '45%' }}></div>
                <div className="chart-bar" style={{ height: '90%' }}></div>
                <div className="chart-bar" style={{ height: '70%' }}></div>
                <div className="chart-bar" style={{ height: '85%' }}></div>
                <div className="chart-bar" style={{ height: '95%' }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Recent Activity</h2>
            </div>
            <div className="card-body">
              <div className="activity-item">
                <div className="activity-icon" style={{ background: 'rgba(99, 102, 241, 0.2)' }}>📦</div>
                <div className="activity-content">
                  <h4>New order received</h4>
                  <p>Order #12345 from John Doe</p>
                </div>
                <span className="activity-time">2m ago</span>
              </div>
              <div className="activity-item">
                <div className="activity-icon" style={{ background: 'rgba(34, 197, 94, 0.2)' }}>✅</div>
                <div className="activity-content">
                  <h4>Payment confirmed</h4>
                  <p>$2,450.00 from Sarah Smith</p>
                </div>
                <span className="activity-time">15m ago</span>
              </div>
              <div className="activity-item">
                <div className="activity-icon" style={{ background: 'rgba(251, 191, 36, 0.2)' }}>⭐</div>
                <div className="activity-content">
                  <h4>New review</h4>
                  <p>5-star rating on Product A</p>
                </div>
                <span className="activity-time">1h ago</span>
              </div>
              <div className="activity-item">
                <div className="activity-icon" style={{ background: 'rgba(239, 68, 68, 0.2)' }}>⚠️</div>
                <div className="activity-content">
                  <h4>Low stock alert</h4>
                  <p>Product B is running low</p>
                </div>
                <span className="activity-time">2h ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: '1.5rem' }}>
          <div className="card-header">
            <h2>Recent Orders</h2>
            <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
              View All
            </button>
          </div>
          <div className="card-body" style={{ padding: '0' }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#12345</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div className="user-avatar">JD</div>
                      <span>John Doe</span>
                    </div>
                  </td>
                  <td>Product A</td>
                  <td>$245.00</td>
                  <td><span className="status active">Active</span></td>
                </tr>
                <tr>
                  <td>#12346</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div className="user-avatar" style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}>SS</div>
                      <span>Sarah Smith</span>
                    </div>
                  </td>
                  <td>Product B</td>
                  <td>$189.00</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>#12347</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div className="user-avatar" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>MJ</div>
                      <span>Mike Johnson</span>
                    </div>
                  </td>
                  <td>Product C</td>
                  <td>$320.00</td>
                  <td><span className="status completed">Completed</span></td>
                </tr>
                <tr>
                  <td>#12348</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div className="user-avatar" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)' }}>EW</div>
                      <span>Emily White</span>
                    </div>
                  </td>
                  <td>Product A</td>
                  <td>$245.00</td>
                  <td><span className="status active">Active</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
