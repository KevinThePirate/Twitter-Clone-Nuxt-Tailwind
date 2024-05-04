<template>
  <div :class="{ dark: darkMode }">
    <div class="min-h-full">
      <div class="bg-white dark:bg-dim-900">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!-- Left Side Bar-->

          <div class="hidden md:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0"><SidebarLeft /></div>
          </div>

          <!-- Main Content -->
          <!-- <main class="col-span-12 md:col-span-8 xl-col-span-6 bg-red-500">
            <h1>Main Content</h1>
          </main> -->

          <!-- Right Side Bar -->

          <div
            class="md:block xl:col-span-4 md:col-span-3 bg-blue-500 col-span-12"
          >
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(false);
</script>
