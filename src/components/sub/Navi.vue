<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Vue-HelloJs Demo</a>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="https://github.com/jacobgoh101/vue-hellojs">
            <i class="fa fa-github" aria-hidden="true"></i> vue-hellojs
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-github" aria-hidden="true"></i> Source Code
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped lang=scss>
nav {
  i.fa {
    font-size: 25px;
    margin-right: 5px;
    vertical-align: middle;
  }
}
</style>