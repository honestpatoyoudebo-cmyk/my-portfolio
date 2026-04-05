<script setup>
import { ref } from 'vue'

const selected = ref(null)

const projects = [
  { img: '/src/assets/projects/project1.jpeg', desc: 'Flyer Design for Restaurent' },
  { img: '/src/assets/projects/project2.jpeg', desc: 'Advertisement Design for a Makeup Studio' },
  { img: '/src/assets/projects/project3.jpeg', desc: 'Restaurant Menu Design' },
  { img: '/src/assets/projects/project4.jpeg', desc: 'Event Poster Design' },
  { img: '/src/assets/projects/project5.jpeg', desc: 'Business flyer Design' },
  { img: '/src/assets/projects/project6.jpeg', desc: 'Flyer Design for a Salon and Makeup Studio' },
  { img: '/src/assets/projects/project7.jpeg', desc: 'Flyer Design for a Barbing Salon' },
  { img: '/src/assets/projects/project8.jpeg', desc: 'Graduation Invitation Design' },
  { img: '/src/assets/projects/project9.jpeg', desc: 'Wedding Brochure Design' },
  { img: '/src/assets/projects/project10.jpeg', desc: 'Admission Flyer Design' },
  { img: '/src/assets/projects/project11.jpeg', desc: 'Graphic Design school flyer' },
  { img: '/src/assets/projects/project12.jpeg', desc: 'Music Album Cover Design' },
  { img: '/src/assets/projects/project13.jpeg', desc: 'Church Youth Event Poster' },
  { img: '/src/assets/projects/project14.jpeg', desc: 'Facilitators poster' },
  { img: '/src/assets/projects/project15.jpeg', desc: 'Church Event Poster' }
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