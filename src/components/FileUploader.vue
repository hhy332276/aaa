<template>
    <div>
        <input v-if="isMultipleUpload" :accept="accept" @change="onFilesChosen" ref="fileInput" multiple type="file">
        <input v-else :accept="accept" @change="onFilesChosen" ref="fileInput" type="file">
    </div>
</template>

<script>
    import http from "../utils/axiosConfig";
    import {constants} from "../../public/static";
    export default {
        name: "FileUploader",
        props:{
            uploadProgress:{
                type: Function,
                required: false
            },
            uploadCompleted:{
                type: Function,
                required: false
            },
            isMultipleUpload:{
                type: Boolean,
                required: true
            },
            //accepted files eg:"image/*"
            accept:{
                type: String,
                required: true
            },
            //file size in bytes
            maxSize:{
                type: Number,
                required: false
            },
            imagesPreview:{
                type: Function,
                required: false
            },
            filesChosen:{
                type: Function,
                required: false
            },
            fileTooLarge:{
                type: Function,
                required: false
            }
        },
        data(){
            return {
                progress: 0,
                imagesPreviewList: [],
                filesList: [],
                isUploading: false
            }
        },
        methods:{
            selectFiles(){
                this.$refs.fileInput.click();
            },
            onFilesChosen(){
                if(this.isUploading){
                    return;
                }

                this.imagesPreviewList = [];
                this.filesList = [];
                let files = this.$refs.fileInput.files;

                if(typeof this.filesChosen === "function"){
                    this.filesChosen(files);
                }

                let allFilesNum = files.length;
                for(let i=0;i<files.length;i++){
                    if(files[i].size < this.maxSize){
                        this.filesList.push(files[i]);
                        //only image files will go in here
                        if(this.accept === "image/*"){
                            let reader = new FileReader();
                            reader.onload = (e)=>{
                                this.imagesPreviewList.push(e.target.result);
                                if(allFilesNum === this.imagesPreviewList.length){
                                    this.imagesPreview(this.imagesPreviewList);
                                }
                            };
                            reader.readAsDataURL(files[i]);
                        }
                    }else{
                        allFilesNum--;
                        if(this.fileTooLarge){
                            this.fileTooLarge({"message":"File too large"});
                        }
                    }
                }

            },
            startUpload(){
                if(this.filesList.length === 0){
                    //no image was uploaded
                    return;
                }

                this.isUploading = true;
                if(this.isMultipleUpload){
                    //do something else
                }else{
                    http.singleFileUpload("/console/user/uploadImage",this.filesList[0],(evt)=>{

                    }).then((res)=>{
                        this.isUploading = false;
                        if(res.data.code === constants.responseCode.SUCCESS){
                            this.uploadComplete(res.data);
                        }
                    }).catch(()=>{
                        this.isUploading = false;
                    });
                }

            }
        }
    }
</script>

<style scoped>

</style>
