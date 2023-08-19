<template>
  <nav>
    <ul>
      <li><router-link :to="{ name: 'HelloWorld' }"> HelloWorld </router-link></li>
      <li><router-link :to="{ name: 'Home' }"> Home </router-link></li>

    </ul>
  </nav>
  <router-view />
</template>