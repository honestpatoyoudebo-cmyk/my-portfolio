<script setup>
import { ref } from 'vue'

const selected = ref(null)

const projects = [
  { img: '/src/assets/projects/project1.jpg', desc: 'Flyer Design for Business' },
  { img: '/src/assets/projects/project2.jpg', desc: 'Logo Branding Project' },
  // continue up to 15 with DIFFERENT descriptions
]
</script>

<template>
  <section class="p-10 bg-primary text-light">

    <div class="text-center mb-6 bg-secondary text-black py-2 rounded">
      <h2 class="text-3xl font-bold">Projects</h2>
    </div>

    <p class="text-center mb-6">
      Below are some of my recent graphic design works showcasing creativity and professionalism.
    </p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="(p, i) in projects" :key="i"
        class="rounded overflow-hidden cursor-pointer transform hover:scale-105 transition"
        @click="selected = p"
      >
        <img :src="p.img" class="w-full h-40 object-cover"/>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selected" class="fixed inset-0 bg-black/80 flex items-center justify-center">
      <div class="bg-white p-4 rounded max-w-md text-black text-center">
        <img :src="selected.img" class="w-full mb-2"/>
        <p>{{ selected.desc }}</p>
        <button @click="selected=null" class="mt-2 bg-primary text-white px-4 py-1 rounded">Close</button>
      </div>
    </div>

  </section>
</template>