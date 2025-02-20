<template>
    <div>
      <h2>Login</h2>
      <input v-model="email" placeholder="email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="handleLogin">Login</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { login } from '@/services/authService';
  
  const email = ref('');
  const password = ref('');
  
  async function handleLogin() {
    try {
      const data = await login(email.value, password.value);
      alert('Login successful: ' + data.token);
    } catch (error) {
      alert('Login failed');
    }
  }
  </script>
  