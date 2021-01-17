<template>
  <div class="about" style="color: red;">
    <h1>This is an about page</h1>
    <div>page2</div>
    <button @click="$router.push({ name: 'Page3' })">去page3</button>
    <button @click="$router.go(-1)">返回page2</button>
  </div>
</template>
