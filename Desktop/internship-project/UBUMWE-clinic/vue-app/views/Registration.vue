<template>
  <div class="dashboard-wrapper">
    <header class="main-header">
      <div class="logo-container">
        <img src="../assets/healthcare-logo.svg" alt="Logo" class="logo">
        <h1>UBUMWE CLINIC - PATIENT REGISTRATION</h1>
      </div>
    </header>

    <div class="body-layout">
      <Sidebar />
      
      <main class="main-content">
        <section class="form-section">
          <h2>Patient Registration</h2>
          <form @submit.prevent="savePatient">
            <input type="text" v-model="patient.name" placeholder="Full Name" required>
            <input type="number" v-model="patient.age" placeholder="Age" required>
            <input type="text" v-model="patient.gender" placeholder="Gender" required>
            <input type="tel" v-model="patient.phone" placeholder="Phone Number" required>
            <input type="text" v-model="patient.id" placeholder="National ID" required>
            <input type="text" v-model="patient.address" placeholder="Address" required>
            
            <div class="btn-group">
              <button type="submit" class="btn-save">Save</button>
              <button type="button" class="btn-clear" @click="clearForm">Clear</button>
              <button type="button" class="btn-print" @click="window.print()">Print</button>
            </div>
          </form>
        </section>

        <section class="success-message" v-if="showSuccess">
          <p>Patient registered successfully!</p>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Registration',
  components: {
    Sidebar
  },
  data() {
    return {
      patient: {
        name: '',
        age: '',
        gender: '',
        phone: '',
        id: '',
        address: ''
      },
      showSuccess: false
    }
  },
  methods: {
    savePatient() {
      let patients = JSON.parse(localStorage.getItem('patients')) || []
      patients.push({...this.patient, id: Date.now()})
      localStorage.setItem('patients', JSON.stringify(patients))
      this.showSuccess = true
      setTimeout(() => {
        this.showSuccess = false
        this.$router.push('/management')
      }, 2000)
    },
    clearForm() {
      this.patient = {
        name: '',
        age: '',
        gender: '',
        phone: '',
        id: '',
        address: ''
      }
    }
  }
}
</script>
