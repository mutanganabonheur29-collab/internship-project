<template>
  <div class="dashboard-wrapper">
    <header class="main-header">
      <div class="logo-container">
        <img src="../assets/healthcare-logo.svg" alt="Logo" class="logo">
        <h1>UBUMWE CLINIC - REPORTS</h1>
      </div>
    </header>

    <div class="body-layout">
      <Sidebar />
      
      <main class="main-content">
        <div class="date-selection-section">
          <div class="date-input-group">
            <label for="from-date">From Date</label>
            <input type="text" id="from-date" placeholder="mm/dd/yyyy" v-model="fromDate" />
          </div>
          <div class="date-input-group">
            <label for="to-date">To Date</label>
            <input type="text" id="to-date" placeholder="mm/dd/yyyy" v-model="toDate" />
          </div>
          <button class="generate-btn" @click="generateReport">Generate</button>
        </div>

        <div class="summary-cards">
          <div class="card total-patients">
            <p>Total Patients</p>
            <h3>{{ totalPatients }}</h3>
          </div>
          <div class="card appointments">
            <p>Appointments</p>
            <h3>{{ totalAppointments }}</h3>
          </div>
          <div class="card pending">
            <p>Pending</p>
            <h3>{{ pendingAppointments }}</h3>
          </div>
        </div>

        <div class="chart-section">
          <h2>Monthly Activity Chart</h2>
          <div class="chart-container">
            <div class="chart-bars">
              <div v-for="(bar, index) in chartData" :key="index" class="bar" :style="{ height: bar.height + 'px' }"></div>
            </div>
          </div>
        </div>

        <button class="print-export-btn" @click="printExport">Reports Ready for print/Export</button>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Reports',
  components: {
    Sidebar
  },
  data() {
    return {
      patients: [],
      appointments: [],
      fromDate: '',
      toDate: '',
      chartData: [
        { height: 120 },
        { height: 80 },
        { height: 150 },
        { height: 90 },
        { height: 110 },
        { height: 70 },
        { height: 130 },
        { height: 100 },
        { height: 85 },
        { height: 140 },
        { height: 95 },
        { height: 75 }
      ]
    }
  },
  computed: {
    totalPatients() {
      return 103 // Static value as shown in the image
    },
    totalAppointments() {
      return 58 // Static value as shown in the image
    },
    pendingAppointments() {
      return 12 // Static value as shown in the image
    }
  },
  mounted() {
    this.loadData()
    this.setDefaultDates()
  },
  methods: {
    loadData() {
      this.patients = JSON.parse(localStorage.getItem('patients')) || []
      this.appointments = JSON.parse(localStorage.getItem('appointments')) || []
    },
    setDefaultDates() {
      const today = new Date()
      const firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
      
      this.toDate = this.formatDateInput(today)
      this.fromDate = this.formatDateInput(firstDay)
    },
    formatDateInput(date) {
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const year = date.getFullYear()
      return `${month}/${day}/${year}`
    },
    generateReport() {
      if (!this.fromDate || !this.toDate) {
        alert('Please select both from and to dates')
        return
      }
      
      // Filter data based on date range
      alert(`Report generated for ${this.fromDate} to ${this.toDate}`)
    },
    printExport() {
      // Create a printable version of the report
      const reportContent = `
        <html>
          <head>
            <title>UBUMWE Clinic Report</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              .header { text-align: center; margin-bottom: 30px; }
              .stats { display: flex; justify-content: space-around; margin: 20px 0; }
              .stat { text-align: center; padding: 20px; border: 1px solid #ccc; }
              .chart { margin: 30px 0; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>UBUMWE Clinic Report</h1>
              <p>Period: ${this.fromDate} to ${this.toDate}</p>
            </div>
            <div class="stats">
              <div class="stat">
                <h3>Total Patients</h3>
                <p>${this.totalPatients}</p>
              </div>
              <div class="stat">
                <h3>Appointments</h3>
                <p>${this.totalAppointments}</p>
              </div>
              <div class="stat">
                <h3>Pending</h3>
                <p>${this.pendingAppointments}</p>
              </div>
            </div>
            <div class="chart">
              <h2>Monthly Activity Chart</h2>
              <p>Chart data would be displayed here</p>
            </div>
          </body>
        </html>
      `
      
      const printWindow = window.open('', '_blank')
      printWindow.document.write(reportContent)
      printWindow.document.close()
      printWindow.print()
    }
  }
}
</script>

<style scoped>
.date-selection-section {
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 30px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.date-input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.date-input-group label {
  font-weight: bold;
  color: #333;
  font-size: 14px;
}

.date-input-group input {
  padding: 10px 15px;
  border: 2px solid #333;
  border-radius: 4px;
  font-size: 14px;
  width: 150px;
  background: white;
}

.date-input-group input:focus {
  outline: none;
  border-color: #007bff;
}

.generate-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
  align-self: flex-end;
}

.generate-btn:hover {
  background: #0056b3;
}

.summary-cards {
  display: flex;
  gap: 30px;
  margin: 30px 0;
  justify-content: center;
}

.card {
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  min-width: 180px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card p {
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.card h3 {
  margin: 0;
  font-size: 36px;
  font-weight: bold;
}

.total-patients {
  background: #2d6a4f;
  color: white;
}

.appointments {
  background: #1e3a8a;
  color: white;
}

.pending {
  background: #92400e;
  color: white;
}

.chart-section {
  margin: 40px 0;
  text-align: center;
}

.chart-section h2 {
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
}

.chart-container {
  background: #f8f9fa;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 40px;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 15px;
  height: 100%;
}

.bar {
  width: 30px;
  background: #6c757d;
  border-radius: 4px 4px 0 0;
  transition: background-color 0.3s;
}

.bar:hover {
  background: #495057;
}

.print-export-btn {
  display: block;
  margin: 40px auto;
  padding: 15px 40px;
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.print-export-btn:hover {
  background: #5a6268;
}

@media (max-width: 768px) {
  .date-selection-section {
    flex-direction: column;
    align-items: stretch;
  }
  
  .summary-cards {
    flex-direction: column;
    align-items: center;
  }
  
  .card {
    width: 100%;
    max-width: 300px;
  }
  
  .chart-bars {
    gap: 8px;
  }
  
  .bar {
    width: 20px;
  }
}
</style>
