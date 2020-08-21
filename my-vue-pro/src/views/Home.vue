<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
export default {
  name: 'Home',
  components: {
  }
}
</script>
