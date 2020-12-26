<template>
  <div>

    <dj-container>
      <dj-header>Header</dj-header>
      <dj-main>Main</dj-main>
    </dj-container>

    <dj-container>
      <dj-header>Header</dj-header>
      <dj-main>Main</dj-main>
      <dj-footer>Footer</dj-footer>
    </dj-container>

    <dj-container>
      <dj-aside width="200px">Aside</dj-aside>
      <dj-main>Main</dj-main>
    </dj-container>

    <dj-container>
      <dj-header>Header</dj-header>
      <dj-container>
        <dj-aside width="200px">Aside</dj-aside>
        <dj-main>Main</dj-main>
      </dj-container>
    </dj-container>

    <dj-container>
      <dj-header>Header</dj-header>
      <dj-container>
        <dj-aside width="200px">Aside</dj-aside>
        <dj-container>
          <dj-main>Main</dj-main>
          <dj-footer>Footer</dj-footer>
        </dj-container>
      </dj-container>
    </dj-container>

    <dj-container>
      <dj-aside width="200px">Aside</dj-aside>
      <dj-container>
        <dj-header>Header</dj-header>
        <dj-main>Main</dj-main>
      </dj-container>
    </dj-container>

    <dj-container>
      <dj-aside width="200px">Aside</dj-aside>
      <dj-container>
        <dj-header>Header</dj-header>
        <dj-main>Main</dj-main>
        <dj-footer>Footer</dj-footer>
      </dj-container>
    </dj-container>
  </div>
</template>

<style>
.dj-header,
.dj-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.dj-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.dj-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .dj-container {
  margin-bottom: 40px;
}

.dj-container:nth-child(5) .dj-aside,
.dj-container:nth-child(6) .dj-aside {
  line-height: 260px;
}

.dj-container:nth-child(7) .dj-aside {
  line-height: 320px;
}
</style>
