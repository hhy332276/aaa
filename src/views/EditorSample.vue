<template>
    <div>
        <VueUEditor ueditorPath="/ueditor1_4_3_3/" :ueditorConfig = editorConfig
                    @ready="editorReady"  style="width: 800px"></VueUEditor>
        <button @click="update">update text</button>
    </div>
</template>

<script>
    import VueUEditor from "../components/UEditor";
    import config from "../static_data/editor";
    export default {
        name: "EditorSample",
        components:{
            VueUEditor
        },
        data(){
            return {
                content:"",
                editorConfig:config.configOne,
                myConfig: {
                    enableAutoSave: false,
                    // 编辑器不自动被内容撑高
                    autoHeightEnabled: false,
                    // 初始容器高度
                    initialFrameHeight: 240,
                    // 初始容器宽度
                    initialFrameWidth: '100%',
                    // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
                    serverUrl: 'http://35.201.165.105:8000/controller.php',
                    //Must be added
                    UEDITOR_HOME_URL: '/ueditor1_4_3_3/',
                    toolbars: [[
                        'fullscreen','bold', 'italic', 'underline', 'fontborder', 'strikethrough','insertimage'
                    ]],
                    initialContent:'123'
                },
                editor:"",
                text:"This is super great."
            }
        },
        methods: {
            editorReady (editorInstance) {
                this.editor = editorInstance;
                editorInstance.setContent('');
                editorInstance.addListener('contentChange', () => {
                    this.content = editorInstance.getContent();
                    console.log(this.content);
                    console.log('编辑器内容发生了变化：', editorInstance.getContent());
                });
            },
            update(){
                if(this.editor !== ""){
                    this.editor.setContent(this.text);
                }
            }
        }
    }
</script>

<style scoped>

</style>
