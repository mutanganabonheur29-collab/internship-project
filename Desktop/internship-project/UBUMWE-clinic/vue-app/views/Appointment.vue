<template>
  <div class="dashboard-wrapper">
    <header class="main-header">
      <div class="logo-container">
        <img src="../assets/healthcare-logo.svg" alt="Logo" class="logo">
        <h1>UBUMWE CLINIC - APPOINTMENTS</h1>
      </div>
    </header>

    <div class="body-layout">
      <Sidebar />
      
      <main class="main-content">
        <div class="date-selection">
          <label for="appointment-date">Select Date:</label>
          <input type="text" id="appointment-date" v-model="selectedDate" placeholder="mm/dd/yyyy" />
          <button class="new-appointment-btn" @click="showNewAppointmentForm">New Appointment</button>
        </div>

        <div class="appointments-table">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="appointment in todaysAppointments" :key="appointment.id">
                <td>{{ appointment.time }}</td>
                <td>{{ appointment.patient }}</td>
                <td>{{ appointment.doctor }}</td>
                <td>
                  <span :class="'status-badge ' + appointment.status.toLowerCase()">
                    {{ appointment.status }}
                  </span>
                </td>
                <td>
                  <button class="action-btn" @click="editAppointment(appointment)">
                    {{ appointment.status === 'Done' ? 'View' : 'Edit' }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="today-summary">
          <h3>Today's Summary</h3>
          <div class="summary-stats">
            <div class="stat-item">
              <span class="stat-label">Total:</span>
              <span class="stat-value">{{ totalAppointments }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Pending:</span>
              <span class="stat-value pending">{{ pendingAppointments }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Done:</span>
              <span class="stat-value done">{{ doneAppointments }}</span>
            </div>
          </div>
        </div>

        <div class="offline-indicator">
          Offline Mode ACTIVE
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Appointment',
  components: {
    Sidebar
  },
  data() {
    return {
      selectedDate: '04/27/2026',
      appointments: [
        { id: 1, time: '08:00', patient: 'Kevin', doctor: 'Dr.mac', status: 'Pending' },
        { id: 2, time: '09:30', patient: 'Marie', doctor: 'Dr. Alice', status: 'Done' },
        { id: 3, time: '11:00', patient: 'Eric', doctor: 'Dr.alice', status: 'Pending' },
        { id: 4, time: '13:00', patient: 'Sarah', doctor: 'Dr.mac', status: 'Pending' },
        { id: 5, time: '14:30', patient: 'John', doctor: 'Dr. Alice', status: 'Done' },
        { id: 6, time: '16:00', patient: 'Emma', doctor: 'Dr.mac', status: 'Pending' },
        { id: 7, time: '17:30', patient: 'Michael', doctor: 'Dr.alice', status: 'Done' },
        { id: 8, time: '18:00', patient: 'Lisa', doctor: 'Dr.mac', status: 'Pending' },
        { id: 9, time: '19:00', patient: 'David', doctor: 'Dr. Alice', status: 'Done' },
        { id: 10, time: '20:00', patient: 'Anna', doctor: 'Dr.mac', status: 'Done' },
        { id: 11, time: '21:00', patient: 'James', doctor: 'Dr.alice', status: 'Done' },
        { id: 12, time: '22:00', patient: 'Sophie', doctor: 'Dr.mac', status: 'Pending' }
      ]
    }
  },
  computed: {
    todaysAppointments() {
      return this.appointments
    },
    totalAppointments() {
      return this.appointments.length
    },
    pendingAppointments() {
      return this.appointments.filter(apt => apt.status === 'Pending').length
    },
    doneAppointments() {
      return this.appointments.filter(apt => apt.status === 'Done').length
    }
  },
  mounted() {
    this.loadData()
    this.setCurrentDate()
  },
  methods: {
    loadData() {
      const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || []
      if (savedAppointments.length > 0) {
        this.appointments = savedAppointments
      }
    },
    setCurrentDate() {
      const today = new Date()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const day = String(today.getDate()).padStart(2, '0')
      const year = today.getFullYear()
      this.selectedDate = `${month}/${day}/${year}`
    },
    showNewAppointmentForm() {
      const patientName = prompt('Enter patient name:')
      if (patientName) {
        const time = prompt('Enter appointment time (e.g., 14:30):')
        const doctor = prompt('Enter doctor name:')
        
        if (time && doctor) {
          const newAppointment = {
            id: Date.now(),
            time: time,
            patient: patientName,
            doctor: doctor,
            status: 'Pending'
          }
          this.appointments.push(newAppointment)
          this.saveData()
          alert('Appointment added successfully!')
        }
      }
    },
    editAppointment(appointment) {
      if (appointment.status === 'Done') {
        alert(`Appointment Details:\nPatient: ${appointment.patient}\nTime: ${appointment.time}\nDoctor: ${appointment.doctor}\nStatus: ${appointment.status}`)
      } else {
        const newStatus = prompt('Update status (Pending/Done):', appointment.status)
        if (newStatus && (newStatus === 'Pending' || newStatus === 'Done')) {
          appointment.status = newStatus
          this.saveData()
        }
      }
    },
    saveData() {
      localStorage.setItem('appointments', JSON.stringify(this.appointments))
    }
  }
}
</script>

<style scoped>
.date-selection {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.date-selection label {
  font-weight: bold;
  color: #333;
  font-size: 14px;
}

.date-selection input {
  padding: 8px 12px;
  border: 2px solid #333;
  border-radius: 4px;
  font-size: 14px;
  width: 120px;
  background: white;
}

.date-selection input:focus {
  outline: none;
  border-color: #007bff;
}

.new-appointment-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.new-appointment-btn:hover {
  background: #0056b3;
}

.appointments-table {
  margin: 30px 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.appointments-table table {
  width: 100%;
  border-collapse: collapse;
}

.appointments-table th {
  background: #f8f9fa;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  color: #333;
  border-bottom: 2px solid #333;
}

.appointments-table td {
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
}

.appointments-table tr:hover {
  background: #f8f9fa;
}

.status-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

.status-badge.pending {
  background: #ffc107;
  color: #856404;
}

.status-badge.done {
  background: #28a745;
  color: white;
}

.action-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s;
}

.action-btn:hover {
  background: #5a6268;
}

.today-summary {
  margin: 30px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.today-summary h3 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 18px;
}

.summary-stats {
  display: flex;
  gap: 30px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-label {
  font-weight: bold;
  color: #333;
}

.stat-value {
  font-weight: bold;
  font-size: 16px;
}

.stat-value.pending {
  color: #ffc107;
}

.stat-value.done {
  color: #28a745;
}

.offline-indicator {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #6c757d;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .date-selection {
    flex-direction: column;
    align-items: stretch;
  }
  
  .summary-stats {
    flex-direction: column;
    gap: 10px;
  }
  
  .appointments-table {
    overflow-x: auto;
  }
  
  .offline-indicator {
    bottom: 10px;
    right: 10px;
  }
}
</style>
