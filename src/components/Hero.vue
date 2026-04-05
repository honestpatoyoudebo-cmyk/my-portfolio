<script setup>
import profile from '../assets/profile.jpg'
import bg from '../assets/background.jpg'
</script>

<template>
  <section class="relative h-screen flex items-center justify-center text-white">

    <!-- Background -->
    <div 
      class="absolute inset-0 bg-cover bg-center blur-sm scale-110"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>

    <!-- Smokey overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Content -->
    <div class="relative text-center">
      <img :src="profile" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-secondary"/>
      <h1 class="text-4xl font-bold">Honest Pato Youdebo</h1>
      <p class="mt-2 text-secondary">Graphic Designer & Instructor</p>
    </div>

  </section>
</template>