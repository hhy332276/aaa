<template>
    <div class="portrait-shade">
        <div class="portrait-container">
            <div class="portrait-wrap clear">

                <div @click="change" class="closeImg">
                    ×
                </div>
                <div class="portrait-title">
                    <h3>{{$t('replaceThePicture')}}</h3>
                    <p>
                        {{$t('pictureFormat')}}：jpg/gif/png,{{$t('maxSize')}}10MB
                    </p>
                </div>
                <div class="portrait-content clear">
                    <div style="max-width: 900px; display: inline-block;height: 300px;width: 300px;">
                        <vue-cropper
                                ref='cropper'
                                :guides='guides'
                                :view-mode='viewMode'
                                drag-mode="crop"
                                :aspect-ratio='aspectRatio'
                                :auto-crop-area='autoCropArea'
                                :min-container-width='minContainerWidth'
                                :min-container-height='minContainerHeight'
                                :background='background'
                                :rotatable='rotatable'
                                :src='cropImg'
                                alt="Source Image"
                                :img-style='imgStyle'
                                :cropmove='cropImage'
                        >
                        </vue-cropper>
                    </div>
                    <div class="portrait-preview right">
                        <p>{{$t('preview')}}</p>
                        <div class="big-img">
                            <img :src="uri" alt="Cropped Image">
                        </div>
                        <p>120px×120px</p>
                        <div class="normal-img">
                            <img :src="uri" alt="Cropped Image">
                        </div>
                        <p>60px×60px</p>
                        <div class="small-img">
                            <img :src="uri" alt="Cropped Image">
                        </div>
                        <p>30px×30px</p>
                    </div>
                </div>
                <div class="portrait-bottom clear">
                    <div class="uploadBtn">
                        <!--                        <button>{{$t('localUpload')}}</button>-->
                        <input type="file" name="123"
                               style="font-size: 1.2em; padding: 10px 0;"
                               @change='setImage'
                        />
                    </div>
                    <div class="affirm">
                        <button @click="preservation()">{{$t('affirm')}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueCropper from 'vue-cropperjs'
    import http from "../utils/axiosConfig";
    import {constants} from "../../public/static/index";

    export default {
        name: "basicInformation",
        components: {
            VueCropper
        },
        props: {
            num: {
                type: Number
            },
            onChangeNum: {
                type: Function
            }
        },
        data() {
            return {
                is: this.num,
                uri: "/imgs/bgaut.jpg",
                cropImg: '/imgs/bgaut.jpg',
                guides: true,
                viewMode: 2,
                autoCropArea: 0.5,
                minContainerWidth: 250,
                minContainerHeight: 180,
                background: true,
                rotatable: true,
                aspectRatio: NaN,
                // aspectRatio: 16 / 9,
                imgStyle: {width: '400px', 'height': '300px'},
                newUrl: ""
            }
        },
        methods: {
            change() {
                this.innerNum = false;
                if (this.onChangeNum) {
                    this.onChangeNum(this.innerNum);
                }
            },
            setImage(e) {
                const file = e.target.files[0]

                if (!file.type.includes('image/')) {
                    alert('Please select an image file')
                    return
                }

                if (typeof FileReader === 'function') {
                    const reader = new FileReader()

                    reader.onload = (event) => {
                        this.originalUri = event.target.result
                        // rebuild cropperjs with the updated source
                        // console.log('this.$refs.cropper =')
                        // console.log(this.$refs.cropper)
                        this.oneNewUrl = this.originalUri.replace(/^data:image\/\w+;base64,/, "");
                        this.$refs.cropper.replace(event.target.result)
                    }

                    reader.readAsDataURL(file)
                } else {
                    alert('Sorry, FileReader API not supported')
                }
            },
            cropImage() {
                // get image data for post processing, e.g. upload or setting image src
                this.uri = this.$refs.cropper.getCroppedCanvas().toDataURL()
                this.newUrl = this.uri.replace(/^data:image\/\w+;base64,/, "");

            },
            preservation() {
                http.post("console/user/uploadImage", {"file": this.newUrl!="" ? this.newUrl:this.oneNewUrl}).then((res) => {
                    if (constants.responseCode.SUCCESS === res.code) {
                        this.usertext = res.data;
                        // console.log(this.usertext)
                        this.$emit('newImgUrl', this.usertext)
                        this.change()
                    }
                }).catch((err) => {

                });

            }

        },
        created(){
            var users = this.$cookies.get('user')
            if(users == null){
                this.$router.push('/home');
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";

    .portrait-shade {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.3);
        z-index: 10;

        .portrait-container {
            height: 490px;
            width: 100%;
            top: 21%;
            right: 0;
            position: fixed;

            .portrait-wrap {
                width: 580px;
                height: 100%;
                background: $white-bg;
                margin: 0 auto;
                left: 0;
                position: relative;
                padding: 20px 0 20px 20px;

                .closeImg {
                    cursor: pointer;
                    position: absolute;
                    right: 20px;
                    top: 12px;
                    font-size: 25px;
                    color: #999999;
                }

                .portrait-title {
                    margin-bottom: 20px;

                    h3 {
                        font-size: 18px;
                        color: $black-text-three;
                        display: inline-block;
                        margin-right: 20px;
                        font-weight: 500;
                    }

                    p {
                        font-size: 14px;
                        color: #999999;
                        display: inline-block;
                    }
                }

                .portrait-content {
                    margin-bottom: 30px;

                    .portrait-img {
                        width: 340px;
                        height: 340px;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .portrait-preview {
                        width: 220px;

                        p {
                            text-align: center;
                            color: #666666;
                        }

                        > div {
                            border-radius: 50%;
                            overflow: hidden;
                            margin: 8px auto;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .big-img {
                            width: 120px;
                            height: 120px;
                        }

                        .normal-img {
                            width: 60px;
                            height: 60px;
                        }

                        .small-img {
                            width: 30px;
                            height: 30px;
                        }

                    }
                }

                .portrait-bottom {
                    float: right;

                    > div {
                        float: left;
                        margin-right: 20px;

                        button {
                            padding: 0;
                            height: 36px;
                            line-height: 36px;
                        }
                    }

                    .affirm {
                        button {
                            border: none;
                            background: $color-primary;
                            color: $white-color;
                        }
                    }
                }
            }
        }

    }

    .left {
        float: left;
    }

    .right {
        float: right;
    }

    .clear {
        overflow: hidden;
    }
</style>
