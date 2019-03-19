<template>
  <div class="littleApp">
    <h1>优雅的做一件事。</h1>
    <div>
      <input v-focus type="text">
    </div>
  </div>
</template>
<script>
export default {
  name: 'littleApp',
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>
