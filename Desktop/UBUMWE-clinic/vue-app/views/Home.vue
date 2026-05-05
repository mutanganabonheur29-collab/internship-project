<template>
  <div class="dashboard-wrapper">
    <header class="main-header">
      <div class="logo-container">
        <img src="../assets/healthcare-logo.svg" alt="Logo" class="logo">
        <h1>UBUMWE CLINIC - HOME</h1>
      </div>
    </header>

    <div class="body-layout">
      <Sidebar />
      
      <main class="main-content">
        <section class="form-section">
          <h2>Patient Registration</h2>
          <form @submit.prevent="savePatient">
            <input type="text" v-model="patient.name" placeholder="Name" required>
            <input type="number" v-model="patient.age" placeholder="Age" required>
            <input type="text" v-model="patient.gender" placeholder="Gender" required>
            
            <div class="btn-group">
              <button type="submit" class="btn-save">Save</button>
              <button type="button" class="btn-clear" @click="clearForm">Clear</button>
              <button type="button" class="btn-print" @click="window.print()">Print</button>
            </div>
          </form>
        </section>

        <section class="appointments-section">
          <h3>Appointments Panel</h3>
          <p class="table-header">Date / Time / Doctor / Status</p>
          <div class="data-display">
            <div v-for="appointment in recentAppointments" :key="appointment.id" class="appointment-item">
              {{ appointment.date }} / {{ appointment.time }} / {{ appointment.doctor }} / {{ appointment.status }}
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Sidebar
  },
  data() {
    return {
      patient: {
        name: '',
        age: '',
        gender: ''
      },
      recentAppointments: [
        { id: 1, date: '2024-05-04', time: '10:00', doctor: 'Dr. Smith', status: 'Scheduled' },
        { id: 2, date: '2024-05-04', time: '11:30', doctor: 'Dr. Johnson', status: 'Confirmed' }
      ]
    }
  },
  methods: {
    savePatient() {
      let patients = JSON.parse(localStorage.getItem('patients')) || []
      patients.push({...this.patient})
      localStorage.setItem('patients', JSON.stringify(patients))
      alert('Patient saved successfully!')
      this.clearForm()
    },
    clearForm() {
      this.patient = {
        name: '',
        age: '',
        gender: ''
      }
    }
  }
}
</script>
