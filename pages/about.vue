<script setup lang="ts">
const isYear: number = formatDate();

function formatDate(): number {
  const today = new Date();
  const year = today.getFullYear();
  return year;
}

function getAlert() {
  alert("good");
}
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <p class="footer__container__text">
        The material on this website is provided for information purposes only and does
        not constitute an offer or solicitation for the purchase of any cryptoassets or
        any form of financial instruments referencing cryptoassets. The information on
        this website is not directed at nor intended for distribution to, or use by, any
        person resident in any country or jurisdiction where such distribution or use
        would be contrary to local law or regulation.
        <span class="accent__text" @click="getAlert()">{{ isYear }} Gotbit Ltd</span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.accent__text {
  cursor: pointer;
}
</style>
