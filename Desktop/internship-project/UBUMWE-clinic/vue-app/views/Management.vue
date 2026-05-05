<template>
  <div class="dashboard-wrapper">
    <header class="main-header">
      <div class="logo-container">
        <img src="../assets/healthcare-logo.svg" alt="Logo" class="logo">
        <h1>UBUMWE CLINIC - PATIENT MANAGEMENT</h1>
      </div>
    </header>

    <div class="body-layout">
      <Sidebar />
      
      <main class="main-content">
        <section class="patients-section">
          <h2>Patient Records</h2>
          <div class="search-bar">
            <input type="text" v-model="searchQuery" placeholder="Search patients...">
          </div>
          
          <table class="patients-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(patient, index) in filteredPatients" :key="patient.id">
                <td>{{ String(index + 1).padStart(3, '0') }}</td>
                <td>{{ patient.name }}</td>
                <td>{{ patient.gender }}</td>
                <td>{{ patient.phone }}</td>
                <td>
                  <button class="view-link" @click="viewPatient(patient)">View</button>
                  <button class="edit-link" @click="editPatient(patient)">Edit</button>
                  <button class="delete-link" @click="deletePatient(index)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Management',
  components: {
    Sidebar
  },
  data() {
    return {
      patients: [],
      searchQuery: ''
    }
  },
  computed: {
    filteredPatients() {
      if (!this.searchQuery) return this.patients
      return this.patients.filter(patient => 
        patient.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        patient.phone.includes(this.searchQuery)
      )
    }
  },
  mounted() {
    this.loadPatients()
  },
  methods: {
    loadPatients() {
      this.patients = JSON.parse(localStorage.getItem('patients')) || []
    },
    viewPatient(patient) {
      alert(`Patient Details:\nName: ${patient.name}\nAge: ${patient.age}\nGender: ${patient.gender}\nPhone: ${patient.phone}`)
    },
    editPatient(patient) {
      const newName = prompt('Edit patient name:', patient.name)
      if (newName && newName.trim()) {
        patient.name = newName.trim()
        localStorage.setItem('patients', JSON.stringify(this.patients))
        this.loadPatients()
      }
    },
    deletePatient(index) {
      if (confirm('Are you sure you want to delete this patient?')) {
        this.patients.splice(index, 1)
        localStorage.setItem('patients', JSON.stringify(this.patients))
        this.loadPatients()
      }
    }
  }
}
</script>
