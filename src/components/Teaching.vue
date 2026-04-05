<script setup>
import { reactive } from 'vue'

const teaching = reactive(
  Array.from({ length: 5 }, (_, i) => ({
    image: `/images/teaching/teach${i+1}.jpeg`,
    desc: `Teaching moment ${i+1}`,
    open: false
  }))
)
</script>

<template>
  <section 
    id="teaching" 
    class="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white py-20 px-6"
  >
    
    <!-- Title -->
     <div class="text-center mb-6 bg-secondary text-black py-2 rounded">
      <h2 class="text-3xl font-bold">Teaching & Work Experience</h2>
    </div>

    <p class="text-center mb-6">
      Below are some pictures of me teaching and working in graphic design and print press environment. 
    </p>

    <!-- Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

      <div 
        v-for="(item, index) in teaching" 
        :key="index"

        @click="item.open = !item.open"

        class="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden 
               hover:scale-105 hover:bg-white/10 transition duration-300 
               shadow-xl cursor-pointer"
      >
        <!-- Image -->
        <div class="overflow-hidden">
          <img 
            :src="item.image" 
            class="w-full h-48 object-cover 
                   group-hover:scale-110 transition duration-500"
          />
        </div>

        <!-- Content -->
        <div class="p-4">
          <p class="text-lg font-semibold">
            {{ item.desc }}
          </p>

          <!-- Hidden / Click content -->
          <p 
            v-if="item.open" 
            class="mt-3 text-blue-400 text-sm"
          >
            More details about this experience...
          </p>
        </div>

      </div>

    </div>

  </section>
</template>