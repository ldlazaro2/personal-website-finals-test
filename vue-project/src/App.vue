<template>
  <div id="app">
    <PersonalProfile />
  </div>
</template>

<script>
import PersonalProfile from "./components/PersonalProfile.vue";

export default {
  components: {
    PersonalProfile,
  },
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
  color: #333;
}

#app {
  text-align: center;
  padding: 20px;
}
</style>

