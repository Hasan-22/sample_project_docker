<template>
    <div>
      <h2>Dashboard</h2>
    </div>

    <button @click="handleLogout">Logout</button>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import { logout } from '@/services/authService';
  
  
  async function handleLogout() {
    try {
        console.log("clicked")
      const data = await logout();
      location.reload()
    } catch (error) {
      alert('Logout failed');
    }
  }
  </script>