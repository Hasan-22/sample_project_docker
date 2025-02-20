<template>
    <div>
      <h2>Signup</h2>
      <input v-model="email" placeholder="email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="handleSignup">Signup</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { signup } from '@/services/authService';
  
  const email = ref('');
  const password = ref('');
  
  async function handleSignup() {
    try {
      await signup(email.value, password.value);
      alert('Signup successful');
    } catch (error) {
      alert('Signup failed');
    }
  }
  </script>
  