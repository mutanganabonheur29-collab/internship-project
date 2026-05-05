<template>
  <div class="container">
    <header class="header">
      <div class="logo-box">
        <img src="../assets/healthcare-logo.svg" alt="Logo" class="logo">
        <h1>UBUMWE CLINIC - DASHBOARD</h1>
      </div>
    </header>

    <div class="main-body">
      <Sidebar />
      
      <main class="content">
        <div class="stats-container">
          <div class="card red-card">
            <h4>Today patients</h4>
            <p class="stat-number">{{ stats.todayPatients }}</p>
          </div>
          <div class="card green-card">
            <h4>Appointments</h4>
            <p class="stat-number">{{ stats.appointments }}</p>
          </div>
          <div class="card blue-card">
            <h4>Pending</h4>
            <p class="stat-number">{{ stats.pending }}</p>
          </div>
        </div>

        <section class="recent-patients">
          <h3>Recent Patients</h3>
          <ul>
            <li v-for="activity in recentActivities" :key="activity.id">{{ activity.description }}</li>
          </ul>
        </section>

        <footer class="status-bar">
          Offline Mode ACTIVE
        </footer>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Dashboard',
  components: {
    Sidebar
  },
  data() {
    return {
      stats: {
        todayPatients: 24,
        appointments: 12,
        pending: 5
      },
      recentActivities: [
        { id: 1, description: 'Kevin checked in' },
        { id: 2, description: 'Bonheur added' },
        { id: 3, description: 'Appointment scheduled' }
      ]
    }
  }
}
</script>
