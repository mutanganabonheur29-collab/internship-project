<template>
  <aside class="sidebar">
    <h3>Menu</h3>
    <ul>
      <li :class="{ active: $route.path === '/' }">
        <router-link to="/" class="menu-link">Home</router-link>
      </li>
      <li :class="{ active: $route.path === '/dashboard' }">
        <router-link to="/dashboard" class="menu-link">Dashboard</router-link>
      </li>
      <li :class="{ active: $route.path === '/registration' }">
        <router-link to="/registration" class="menu-link">Patient Registration</router-link>
      </li>
      <li :class="{ active: $route.path === '/management' }">
        <router-link to="/management" class="menu-link">Patient Management</router-link>
      </li>
      <li :class="{ active: $route.path === '/appointment' }">
        <router-link to="/appointment" class="menu-link">Appointment</router-link>
      </li>
      <li :class="{ active: $route.path === '/reports' }">
        <router-link to="/reports" class="menu-link">Reports</router-link>
      </li>
      <li :class="{ active: $route.path === '/settings' }">
        <router-link to="/settings" class="menu-link">Settings</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
