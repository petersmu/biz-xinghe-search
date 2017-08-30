<template>
  <div>
    <search :placeholder="placeHolder"
            v-model="keyword"
            @on-submit="onSubmit"
            @on-cancel="onCancel"
            ref="search">
    </search>
  </div>
</template>

<script>

import { Search } from 'vux'

export default {
  props: {
    placeHolder: {
      type: String,
      default: '请输入关键字查找'
    },
    // 查询
    onSearch: {
      type: Object,
      default () {
        return {
          trigger: ''
        }
      }
    }
  },
  data () {
    return {
      keyword: ''
    }
  },
  components: {
    Search
  },
  methods: {
    triggerSearch (keyword) {
      if (this.onSearch && this.onSearch.trigger) {
        this.$event && this.$event.$emit(this.onSearch.trigger, {search: keyword })
      }
    },
    onSubmit (keyword) {
      this.triggerSearch(keyword)
    },
    onCancel () {
      this.triggerSearch('')
    }
  }
}
</script>

<style scoped>
.vux-search-box {
  position: static!important;
}
</style>
