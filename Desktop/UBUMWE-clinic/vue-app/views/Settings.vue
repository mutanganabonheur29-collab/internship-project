<template>
  <div class="dashboard-wrapper">
    <header class="main-header">
      <div class="logo-container">
        <img src="../assets/healthcare-logo.svg" alt="Logo" class="logo">
        <h1>UBUMWE CLINIC - SETTINGS</h1>
      </div>
    </header>

    <div class="body-layout">
      <Sidebar />
      
      <main class="main-content">
        <div class="settings-card">
          <h2>Configuration Panel</h2>
          
          <div class="settings-grid">
            <div class="full-row">
              <label>Clinic name:</label>
              <input type="text" v-model="settings.clinicName">
            </div>

            <div class="setting-item">
              <label>Language:</label>
              <select v-model="settings.language">
                <option>English</option>
                <option>Kinyarwanda</option>
                <option>French</option>
              </select>
            </div>
            <div class="setting-item">
              <label>Printer:</label>
              <select v-model="settings.printer">
                <option>Default Printer</option>
                <option>HP LaserJet 400</option>
                <option>Canon PIXMA</option>
              </select>
            </div>

            <div class="setting-item">
              <label>Auto Backup:</label>
              <select v-model="settings.autoBackup">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
            <div class="setting-item">
              <label>Offline Mode:</label>
              <select v-model="settings.offlineMode" @change="updateStatus">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div class="action-buttons">
            <button class="blue-btn" @click="resetSettings">Reset</button>
            <button class="blue-btn" @click="saveSettings">Save</button>
            <button class="blue-btn" @click="printSettings">Print</button>
          </div>
        </div>

        <div class="settings-footer" :style="{ color: statusColor }">
          {{ statusMessage }}
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Settings',
  components: {
    Sidebar
  },
  data() {
    return {
      settings: {
        clinicName: 'Hope Health Center',
        language: 'English',
        printer: 'Default Printer',
        autoBackup: 'Enable',
        offlineMode: 'Active'
      },
      statusMessage: 'System Ready > Offline System',
      statusColor: '#333'
    }
  },
  mounted() {
    this.loadSettings()
  },
  methods: {
    loadSettings() {
      const savedSettings = localStorage.getItem('clinicSettings')
      if (savedSettings) {
        const settings = JSON.parse(savedSettings)
        this.settings = {
          clinicName: settings.clinicName || 'Hope Health Center',
          language: settings.language || 'English',
          printer: settings.printer || 'Default Printer',
          autoBackup: settings.autoBackup || 'Enable',
          offlineMode: settings.offlineMode || 'Active'
        }
      }
      this.updateStatus()
    },
    saveSettings() {
      localStorage.setItem('clinicSettings', JSON.stringify(this.settings))
      
      // Update status message
      this.statusMessage = 'Settings Saved Successfully > Offline System'
      this.statusColor = '#28a745'
      
      setTimeout(() => {
        this.statusMessage = 'System Ready > Offline System'
        this.statusColor = '#333'
      }, 3000)
      
      alert('Settings have been saved successfully!')
    },
    resetSettings() {
      if (confirm('Are you sure you want to reset all settings to default?')) {
        this.settings = {
          clinicName: 'Hope Health Center',
          language: 'English',
          printer: 'Default Printer',
          autoBackup: 'Enable',
          offlineMode: 'Active'
        }
        
        // Clear localStorage
        localStorage.removeItem('clinicSettings')
        
        alert('Settings have been reset to default values!')
      }
    },
    printSettings() {
      window.print()
    },
    updateStatus() {
      if (this.settings.offlineMode === 'Active') {
        this.statusMessage = 'System Ready > Offline System'
      } else {
        this.statusMessage = 'System Ready > Online System'
      }
    }
  }
}
</script>

<style scoped>
.settings-card {
  background: white;
  border: 2px solid #333;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.settings-card h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
}

.settings-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.full-row {
  grid-column: 1 / -1;
}

.setting-item, .full-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.setting-item label, .full-row label {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.setting-item input, .full-row input,
.setting-item select, .full-row select {
  padding: 10px;
  border: 2px solid #333;
  border-radius: 4px;
  font-size: 14px;
  background: white;
}

.setting-item input:focus, .full-row input:focus,
.setting-item select:focus, .full-row select:focus {
  outline: none;
  border-color: #007bff;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.blue-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.blue-btn:hover {
  background: #0056b3;
}

.settings-footer {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .settings-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .blue-btn {
    width: 200px;
  }
}
</style>
