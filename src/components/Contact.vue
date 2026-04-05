<script setup>
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <section class="p-10 bg-primary text-light text-center">

    <div class="mb-6 bg-secondary text-black py-2 rounded">
      <h2 class="text-3xl font-bold">Contact</h2>
    </div>

    <div class="space-y-3">
      <p class="flex justify-center gap-2"><Mail/> honestpatoyoudebo@gmail.com</p>
      <p class="flex justify-center gap-2"><Phone/> +231775987649/+231555854750</p>

      <div class="flex justify-center gap-6 mt-4 text-secondary">
        <a href="https://www.facebook.com/share/1QCeYymJQC/"><Facebook/></a>
        <a href="https://www.instagram.com/mc_honest_pato?igsh=Ym42NzhnMWhkM3Bl"><Instagram/></a>
        <a href="https://www.linkedin.com/in/honest-pato-youdebo-a343613b8"><Linkedin/></a>
      </div>
    </div>

  </section>
</template>