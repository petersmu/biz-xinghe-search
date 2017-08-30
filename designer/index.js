import EditComponent from './components/edit'

export default {
    name: '采招搜索',

    // 预览区域默认数据
    previewData: {
        props: {
            placeHolder: '请输入关键字查找'
        }
    },

    ctrl: {
        component: EditComponent
    }
}