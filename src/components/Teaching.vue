<script setup>
const teaching = Array.from({ length: 5 }, (_, i) => ({
  image: `/src/assets/teaching/teach${i+1}.jpg`,
  desc: `Teaching moment ${i+1}`
}))
</script>

<template>
  <section id="teaching" class="p-10">
    <h2 class="text-3xl font-bold mb-6">Teaching & Work Experience</h2>

    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      <div v-for="(item, index) in teaching" :key="index" class="shadow p-4">
        <img :src="item.image" class="w-full h-48 object-cover"/>
        <p class="mt-2">{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>