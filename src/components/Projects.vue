<script setup>
const projects = Array.from({ length: 15 }, (_, i) => ({
  image: `/src/assets/projects/project${i+1}.jpg`,
  desc: `Project ${i+1} description`
}))
</script>

<template>
  <section id="projects" class="p-10 bg-gray-100">
    <h2 class="text-3xl font-bold mb-6">My Design Projects</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="(project, index) in projects" :key="index" class="bg-white p-4 shadow">
        <img :src="project.image" class="w-full h-48 object-cover"/>
        <p class="mt-2">{{ project.desc }}</p>
      </div>
    </div>
  </section>
</template>