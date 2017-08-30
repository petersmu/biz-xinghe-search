<template>
    <el-form :model="form"
        label-width="90px">
        <el-form-item label="提示语">
            <el-input :value="form.props.placeHolder"
                @change="changePlaceHolder"></el-input>
        </el-form-item>
    
        <el-form-item label="触发的事件">
            <el-input :value="form.props.onSearch && form.props.onSearch.trigger"
                @change="changeSearchEvent"
                placeholder="输入要触发的事件ID"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
import Vue from 'vue'
import Form from 'element-ui/lib/form'
import FormItem from 'element-ui/lib/form-item'
import Input from 'element-ui/lib/input'

Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)

export default {
    props: {
        value: Object
    },
    data() {
        let form = this.value.props
        return {
            form: {
                props: {
                    placeHolder: form && form.placeHolder,
                    onSearch: {
                        trigger: form && form.onSearch && form.onSearch.trigger
                    }
                }
            }
        }
    },
    watch: {
        value() {
            let form = this.value.props
            this.form.props.placeHolder = form && form.placeHolder
            this.form.props.onSearch.trigger = form && form.onSearch && form.onSearch.trigger
        }
    },
    methods: {
        changePlaceHolder(text) {
            this.form.props.placeHolder = text
            this.$emit('onupdate', this.form)
        },
        changeSearchEvent(action) {
            this.form.props.onSearch.trigger = action
            this.$emit('onupdate', this.form)
        }
    }
}
</script>
