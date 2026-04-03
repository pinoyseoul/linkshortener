<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const { title, description } = useAppConfig()
</script>

<template>
  <div class="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
    <div class="max-w-2xl">
      <div class="mb-8 flex justify-center">
        <img
          src="/dongsaeng.png"
          :alt="`${title} Logo`"
          class="h-24 w-24 rounded-full"
        >
      </div>

      <h1 class="text-4xl font-medium text-balance md:text-5xl xl:text-6xl">
        {{ title }}
      </h1>

      <p class="mt-6 text-lg text-pretty text-muted-foreground">
        {{ description }}
      </p>

      <div class="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row">
        <Button
          as-child
          size="lg"
          class="px-5 text-base"
        >
          <NuxtLink to="/dashboard">
            <span class="text-nowrap">{{ $t('dashboard.title') }}</span>
            <ArrowRight class="ml-2 h-4 w-4" />
          </NuxtLink>
        </Button>
      </div>
    </div>
  </div>
</template>
