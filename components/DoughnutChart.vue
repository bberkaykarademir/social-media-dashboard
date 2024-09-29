<template>
  <div
    class="flex justify-center py-2 bg-gray-900 flex-shrink-0 rounded-2xl w-[400px] h-[250px]"
  >
    <canvas ref="doughnutChart" width="400" height="250"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Chart from "chart.js/auto";

const postsStore = usePostsStore();

const twitterPostsCount = ref(0);
const linkedinPostsCount = ref(0);

const calculateTotals = () => {
  twitterPostsCount.value = postsStore.postsResponse.results?.filter(
    (post) => post.platform.name === "Twitter"
  ).length;
  linkedinPostsCount.value = postsStore.postsResponse.results?.filter(
    (post) => post.platform.name === "Linkedin"
  ).length;
};

const doughnutChart = ref(null);
let chartInstance = null;

const createChart = () => {
  if (chartInstance) {
    chartInstance.destroy();
  }

  const ctx = doughnutChart.value.getContext("2d");
  chartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Twitter", "Linkedin"],
      datasets: [
        {
          label: "Post Count",
          backgroundColor: ["#252dda", "#ff0000"],
          data: [twitterPostsCount.value, linkedinPostsCount.value],
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
