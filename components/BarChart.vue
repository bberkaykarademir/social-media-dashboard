<template>
  <div class="flex justify-center items-center mx-auto py-2 bg-gray-900 flex-shrink-0 rounded-2xl w-full md:w-[350px] lg:w-[400px] h-[220px] lg:h-[250px]">
    <canvas ref="barChart" ></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Chart from "chart.js/auto";

const postsStore = usePostsStore();

const totalFavorites = ref(0);
const totalRetweets = ref(0);
const totalReplies = ref(0);

const calculateTotals = () => {
  totalFavorites.value = postsStore.postsResponse.results?.reduce(
    (acc, post) => acc + post.favorite_count,
    0
  );
  totalRetweets.value = postsStore.postsResponse.results?.reduce(
    (acc, post) => acc + post.retweet_count,
    0
  );
  totalReplies.value = postsStore.postsResponse.results?.reduce(
    (acc, post) => acc + post.reply_count,
    0
  );
};

const barChart = ref(null);
let chartInstance = null;

const createChart = () => {
  if (chartInstance) {
    chartInstance.destroy(); 
  }

  const ctx = barChart.value.getContext("2d");
  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Favorites", "Retweets", "Replies"],
      datasets: [
        {
          label: "Interactions",
          backgroundColor: ["#252dda"],
          data: [totalFavorites.value, totalRetweets.value, totalReplies.value],
        },
      ],
    },
  });
};

watch(
  () => postsStore.postsResponse.results,
  () => {
    calculateTotals();
    createChart();
  }
);

onMounted(() => {
  calculateTotals();
  createChart();
});
</script>
