<template>
  <div>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div v-for="(item,i) in list">
        <el-menu-item :index="i.toString()">{{item}}</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script>
import options from '../../config/options';
var defaultList = options.category[0].value;
const routeList = ['/', '/list/' + defaultList, '/add']
export default {
  name: 'my-menu',
  data() {
    return {
      list: ['首页', '查看列表', '新增']
    }
  },
  computed: {
    activeIndex() {
      return this.$store.state.activeIndex;
    }
  },
  methods: {
    handleSelect(key) {
      this.$router.push(routeList[key]);
    }
  },
  created() {
    switch (this.$route.name) {
      case 'Main':
        this.activeIndex = '0';
        break;
      case 'List':
        this.activeIndex = '1';
        break;
      case 'Add':
        this.activeIndex = '2';
        break;
    }
  }
}
</script>
<style lang="less">
.el-menu-demo {
  border-radius: 0px;
}
</style>
