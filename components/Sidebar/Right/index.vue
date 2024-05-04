<template>
  <div class="flex flex-col">
    <!-- Preview Card: What's Happening  -->
    <SidebarRightPreviewCard title="What Is Happening">
      <SidebarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningItems"
      >
        <!-- Item -->
        <div
          class="p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300"
          :class="wrapperClasses"
        >
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ whatsHappening.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!-- Preview Card: Who to Follow  -->
    <SidebarRightPreviewCard title="Who To Follow">
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex flex-row justify-between p-2">
          <div class="flex flex-row">
            <img
              :src="whoToFollow.image"
              :alt="whoToFollow.handle"
              class="w-10 h-10"
            />
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ whoToFollow.name }}
              </h1>
              <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="flex items-center h-full">
            <button
              class="py-2 px-4 text-xs font-bold text-white dark:text-black bg-black dark:bg-white rounded-full"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  { id: 1, title: "Item 1", count: 100 },
  { id: 2, title: "Item 2", count: 200 },
  { id: 3, title: "Item 3", count: 300 },
  { id: 4, title: "Item 4", count: 400 },
  { id: 5, title: "Item 5", count: 500 },
]);

const whoToFollowItems = ref([
  {
    name: "John Doe",
    handle: "@johndoe",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aae48a5d-ee59-4699-8f20-1c7482c2696a/deygf1l-ef9a66f0-25e8-498b-82e7-b22fae9d1a4a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FhZTQ4YTVkLWVlNTktNDY5OS04ZjIwLTFjNzQ4MmMyNjk2YVwvZGV5Z2YxbC1lZjlhNjZmMC0yNWU4LTQ5OGItODJlNy1iMjJmYWU5ZDFhNGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yr67CWeBjHl_GwQUXSxmOBgNfm5eenzFGCZZreLrOMY",
  },
  {
    name: "Jane Doe",
    handle: "@janedoe",
    image: "https://pbs.twimg.com/media/GGexKupWsAA21S0.jpg:large",
  },
]);
</script>
