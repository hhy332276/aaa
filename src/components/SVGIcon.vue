<template>
    <div class="icon-wrapper">
        <svg class="icon-position" v-if="iconName === 'profile'" :width="iconWidth" :height="iconHeight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="11.87" cy="7.61" r="4.12" style="fill:none;stroke:#333;stroke-miterlimit:10"/><path d="M5.07,18.53a6.8,6.8,0,0,1,13.6,0" style="fill:none;stroke:#333;stroke-miterlimit:10;fill-rule:evenodd"/><circle cx="12" cy="12" r="11.5" style="fill:none;stroke:#333;stroke-miterlimit:10"/></svg>
        <svg class="icon-position" v-if="iconName === 'language-en'" :width="iconWidth" :height="iconHeight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0.51" y="2.29" width="21.21" height="21.21" rx="2" ry="2" style="fill:none;stroke:#323333;stroke-miterlimit:10"/><path d="M2.29,2.61v-.2A1.92,1.92,0,0,1,4.21.49H21.59A1.92,1.92,0,0,1,23.5,2.41V19.79a1.92,1.92,0,0,1-1.91,1.92h-.32" style="fill:none;stroke:#323333;stroke-miterlimit:10"/><text transform="translate(4.33 16.81)" style="font-size:10.008801460266113px;fill:#040000;font-family:ArialMT, Arial">EN</text></svg>
        <svg class="icon-position" v-if="iconName === 'double-arrow'" :width="iconWidth" :height="iconHeight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30"><polyline points="8.55 0.36 23.35 15.15 8.85 29.64" style="fill:none;stroke:#fff;stroke-miterlimit:10"/><polyline points="0.36 0.36 15.01 15.01 0.38 29.64" style="fill:none;stroke:#fff;stroke-miterlimit:10"/></svg>
        <svg class="icon-position" v-if="iconName === 'caret'" :width="iconWidth" :height="iconHeight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14"><polyline points="0.47 0.36 7.14 7.03 0.53 13.65" style="fill:none;stroke:#231815;stroke-miterlimit:10"/></svg>
        <svg class="icon-position" v-if="iconName === 'search'" :width="iconWidth" :height="iconHeight" viewBox="0 0 24 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document" transform="translate(-1320.000000, -458.000000)">
                    <g id="搜索" transform="translate(310.000000, 436.000000)">
                        <g id="Group-5" transform="translate(1023.000000, 35.500000) rotate(-45.000000) translate(-1023.000000, -35.500000) translate(1012.000000, 21.000000)">
                            <rect id="Combined-Shape" fill="#7D8A93" x="10.8180195" y="20.0961941" width="3" height="8" rx="1.5"></rect>
                            <circle id="Oval-2" stroke="#7D8A93" stroke-width="3" cx="11.2573593" cy="11.0147186" r="9"></circle>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

        <svg class="icon-position" v-if="iconName === 'profile'" :width="iconWidth" :height="iconHeight" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document" transform="translate(-1567.000000, -15.000000)">
                    <g id="Head">
                        <g id="Group-5" transform="translate(1372.000000, 15.000000)">
                            <g id="Group-4" transform="translate(195.000000, 0.000000)">
                                <circle id="Oval-4" stroke="#7D8A93" stroke-width="2" cx="13" cy="13" r="12"></circle>
                                <circle id="Oval-4-Copy" stroke="#7D8A93" stroke-width="2" cx="13" cy="11" r="4"></circle>
                                <path d="M4.64783191,20.1586069 C6.75726109,17.6179078 9.93968925,16 13.5,16 C16.7754573,16 19.7310804,17.3693733 21.8256046,19.5668551 C21.4246182,20.1048888 20.9755922,20.6050111 20.4848786,21.0608699 C18.7490275,19.178844 16.2621806,18 13.5,18 C10.5022779,18 7.82884916,19.3884649 6.08773169,21.5573769 C5.56633152,21.1356865 5.08424577,20.6673107 4.64783191,20.1586069 Z" id="Combined-Shape" fill="#7D8A93"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

        <svg class="icon-position" v-if="iconName === 'drop-down'" :width="iconWidth" :height="iconHeight" viewBox="0 0 8 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document" transform="translate(-1434.000000, -26.000000)" fill="#7D8A93">
                    <g id="Head">
                        <g id="Group-5" transform="translate(1372.000000, 15.000000)">
                            <polygon id="Triangle-3-Copy" transform="translate(66.000000, 13.000000) scale(1, -1) translate(-66.000000, -13.000000) " points="66 11 70 15 62 15"></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

        <svg class="icon-position" v-if="iconName === 'drop-up'" :width="iconWidth" :height="iconHeight" viewBox="0 0 8 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document" transform="translate(-1434.000000, -26.000000)" fill="#FFFFFF">
                    <g id="Head">
                        <g id="Group-5" transform="translate(1372.000000, 15.000000)">
                            <polygon id="Triangle-3-Copy" transform="translate(66.000000, 13.000000) scale(1, -1) translate(-66.000000, -13.000000) " points="66 11 70 15 62 15"></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

        <svg class="icon-position" v-if="iconName === 'atlas200dk'" :width="iconWidth" :height="iconHeight" viewBox="0 0 49 49" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document" transform="translate(-447.000000, -667.000000)">
                    <g id="文档" transform="translate(406.000000, 547.000000)">
                        <g id="Group-31" transform="translate(0.000000, 79.000000)">
                            <g id="Group-67">
                                <g id="Group-3" transform="translate(41.000000, 41.000000)">
                                    <path d="M33,37 L41,37 L41,32.8571429 L33,32.8571429 L33,37 Z M33,28.7080714 L41,28.7080714 L41,24.559 L33,24.559 L33,28.7080714 Z M33,20.4161429 L41,20.4161429 L41,16.2732857 L33,16.2732857 L33,20.4161429 Z M33,12.1428571 L41,12.1428571 L41,8 L33,8 L33,12.1428571 Z" id="Fill-1" fill="#3D88FF"></path>
                                    <path d="M4.07738714,0 L4.07738714,8.17279473 L0,8.17279473 L0,36.7683842 L4.07738714,36.7683842 L4.07738714,49 L49,49 L49,0 L4.07738714,0 Z M8.15477429,4.08537602 L44.9205742,4.08537602 L44.9205742,44.914624 L8.15477429,44.914624 L8.15477429,36.7683842 L28.5478261,36.7683842 L28.5478261,8.17279473 L8.15477429,8.17279473 L8.15477429,4.08537602 Z" id="Fill-2" fill="#3D88FF"></path>
                                    <text id="D" font-family="PingFangTC-Medium, PingFang TC" font-size="22" font-weight="400" fill="#FFFFFF">
                                        <tspan x="6.613" y="30">D</tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

        <svg class="icon-position" v-if="iconName === 'atlas200'" :width="iconWidth" :height="iconHeight" viewBox="0 0 49 49" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document" transform="translate(-693.000000, -667.000000)">
                    <g id="文档" transform="translate(406.000000, 547.000000)">
                        <g id="Group-30" transform="translate(246.000000, 79.000000)">
                            <g id="Group-29">
                                <g id="Group-3" transform="translate(41.000000, 41.000000)">
                                    <path d="M33,37 L41,37 L41,32.8571429 L33,32.8571429 L33,37 Z M33,28.7080714 L41,28.7080714 L41,24.559 L33,24.559 L33,28.7080714 Z M33,20.4161429 L41,20.4161429 L41,16.2732857 L33,16.2732857 L33,20.4161429 Z M33,12.1428571 L41,12.1428571 L41,8 L33,8 L33,12.1428571 Z" id="Fill-1" fill="#3D88FF"></path>
                                    <path d="M4.07738714,0 L4.07738714,8.17279473 L0,8.17279473 L0,36.7683842 L4.07738714,36.7683842 L4.07738714,49 L49,49 L49,0 L4.07738714,0 Z M8.15477429,4.08537602 L44.9205742,4.08537602 L44.9205742,44.914624 L8.15477429,44.914624 L8.15477429,36.7683842 L28.5478261,36.7683842 L28.5478261,8.17279473 L8.15477429,8.17279473 L8.15477429,4.08537602 Z" id="Fill-2" fill="#3D88FF"></path>
                                    <text id="2" font-family="PingFangTC-Medium, PingFang TC" font-size="22" font-weight="400" fill="#FFFFFF">
                                        <tspan x="7.9" y="30">2</tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

        <svg class="icon-position" v-if="iconName === 'atlas300'" :width="iconWidth" :height="iconHeight" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document" transform="translate(-939.000000, -667.000000)">
                    <g id="文档" transform="translate(406.000000, 547.000000)">
                        <g id="Group-27" transform="translate(492.000000, 79.000000)">
                            <g id="Group-67">
                                <g id="Group-3" transform="translate(41.000000, 41.000000)">
                                    <path d="M33,37 L41,37 L41,32.8571429 L33,32.8571429 L33,37 Z M33,28.7080714 L41,28.7080714 L41,24.559 L33,24.559 L33,28.7080714 Z M33,20.4161429 L41,20.4161429 L41,16.2732857 L33,16.2732857 L33,20.4161429 Z M33,12.1428571 L41,12.1428571 L41,8 L33,8 L33,12.1428571 Z" id="Fill-1" fill="#3D88FF"></path>
                                    <path d="M4.07738714,0 L4.07738714,8.17279473 L0,8.17279473 L0,36.7683842 L4.07738714,36.7683842 L4.07738714,49 L49,49 L49,0 L4.07738714,0 Z M8.15477429,4.08537602 L44.9205742,4.08537602 L44.9205742,44.914624 L8.15477429,44.914624 L8.15477429,36.7683842 L28.5478261,36.7683842 L28.5478261,8.17279473 L8.15477429,8.17279473 L8.15477429,4.08537602 Z" id="Fill-2" fill="#3D88FF"></path>
                                    <text id="3" font-family="PingFangTC-Medium, PingFang TC" font-size="22" font-weight="400" fill="#FFFFFF">
                                        <tspan x="7.9" y="30">3</tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

        <svg class="icon-position" v-if="iconName === 'atlas500'" :width="iconWidth" :height="iconHeight" viewBox="0 0 49 49" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document" transform="translate(-1185.000000, -667.000000)">
                    <g id="文档" transform="translate(406.000000, 547.000000)">
                        <g id="Group-28" transform="translate(738.000000, 79.000000)">
                            <g id="Group-67">
                                <g id="Group-3" transform="translate(41.000000, 41.000000)">
                                    <path d="M33,37 L41,37 L41,32.8571429 L33,32.8571429 L33,37 Z M33,28.7080714 L41,28.7080714 L41,24.559 L33,24.559 L33,28.7080714 Z M33,20.4161429 L41,20.4161429 L41,16.2732857 L33,16.2732857 L33,20.4161429 Z M33,12.1428571 L41,12.1428571 L41,8 L33,8 L33,12.1428571 Z" id="Fill-1" fill="#3D88FF"></path>
                                    <path d="M4.07738714,0 L4.07738714,8.17279473 L0,8.17279473 L0,36.7683842 L4.07738714,36.7683842 L4.07738714,49 L49,49 L49,0 L4.07738714,0 Z M8.15477429,4.08537602 L44.9205742,4.08537602 L44.9205742,44.914624 L8.15477429,44.914624 L8.15477429,36.7683842 L28.5478261,36.7683842 L28.5478261,8.17279473 L8.15477429,8.17279473 L8.15477429,4.08537602 Z" id="Fill-2" fill="#3D88FF"></path>
                                    <text id="5" font-family="PingFangTC-Medium, PingFang TC" font-size="22" font-weight="400" fill="#FFFFFF">
                                        <tspan x="7.9" y="30">5</tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>


        <svg class="icon-position" v-if="iconName === 'play-btn'" :width="iconWidth" :height="iconHeight" viewBox="0 0 78 78" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <circle id="path-1" cx="30" cy="30" r="30"></circle>
                <filter x="-26.7%" y="-18.3%" width="153.3%" height="153.3%" filterUnits="objectBoundingBox" id="filter-2">
                    <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="4.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.458359906   0 0 0 0 0.458359906   0 0 0 0 0.458359906  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                </filter>
            </defs>
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.899999976">
                <g id="Document" transform="translate(-239.000000, -1251.000000)">
                    <g id="学院" transform="translate(0.000000, 1049.000000)">
                        <g id="1" transform="translate(100.000000, 136.000000)">
                            <g id="Group-2" transform="translate(148.000000, 70.000000)">
                                <g id="Oval">
                                    <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                                    <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                                </g>
                                <path d="M34.3048856,21.4943296 L43.9064747,40.6975078 C44.128765,41.1420884 43.9485631,41.6826941 43.5039824,41.9049845 C43.3790126,41.9674694 43.2412108,42 43.1014902,42 L23.898312,42 C23.4012558,42 22.998312,41.5970563 22.998312,41.1 C22.998312,40.9602794 23.0308426,40.8224777 23.0933276,40.6975078 L32.6949167,21.4943296 C32.917207,21.049749 33.4578127,20.869547 33.9023934,21.0918374 C34.076568,21.1789247 34.2177983,21.3201549 34.3048856,21.4943296 Z" id="Triangle" fill="#A4B4CE" transform="translate(33.500000, 31.500000) rotate(-270.000000) translate(-33.500000, -31.500000) "></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>


        <svg class="icon-position" v-if="iconName === 'graduation-hat'" :width="iconWidth" :height="iconHeight" viewBox="0 0 20 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document" transform="translate(-371.000000, -1398.000000)" fill="#FFFFFF">
                    <g id="学院" transform="translate(0.000000, 1049.000000)">
                        <g id="1" transform="translate(100.000000, 136.000000)">
                            <path d="M281.61497,222.850532 C281.230295,223.049823 280.771619,223.049823 280.388857,222.850532 L272,218.492836 L280.386944,214.149468 C280.771619,213.950177 281.230295,213.950177 281.613056,214.149468 L290,218.507164 L281.61497,222.850532 Z M284.639524,224.46337 L281.496493,226.145955 C281.186032,226.312025 280.813968,226.312025 280.503507,226.145955 L277.360476,224.46337 C277.139677,224.345577 277,224.107414 277,223.844149 L277,222 L279.939311,223.578952 C280.271119,223.755964 280.635255,223.844149 280.99939,223.844149 C281.362916,223.844149 281.727051,223.755964 282.058859,223.578952 L284.99756,222.005793 L284.99756,223.844149 C285,224.107414 284.862763,224.343002 284.639524,224.46337 Z M282.085625,213.260357 C281.40625,212.913214 280.59375,212.913214 279.91375,213.260357 L271.536875,217.552308 C271.206875,217.722093 271,218.059137 271,218.435945 C271,218.81086 271.205,219.149797 271.536875,219.319582 L275.83,221.524887 L275.83,224.006771 C275.83,224.675179 276.196875,225.276684 276.786875,225.579014 L280.0075,227.227628 C280.318125,227.387314 280.66,227.46621 281.001875,227.46621 C281.343125,227.46621 281.685,227.387314 281.995625,227.227628 L285.216875,225.579014 C285.80625,225.276684 286.17375,224.673286 286.17375,224.006771 L286.17375,221.532461 L288.605625,220.285902 L288.605625,222.493101 C288.605625,222.792906 288.845,223.035907 289.1425,223.035907 C289.439375,223.035907 289.679375,222.792906 289.679375,222.493101 L289.679375,219.824517 C289.679375,219.794852 289.6775,219.767081 289.67375,219.739941 L290.4625,219.335361 C290.794375,219.165577 291,218.826639 291,218.451724 C291,218.074916 290.794375,217.735978 290.4625,217.566194 L282.085625,213.260357 Z" id="Fill-1"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>


        <svg class="icon-position" v-if="iconName === 'caret-filled-right'" :width="iconWidth" :height="iconHeight" viewBox="0 0 4 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document-Detial" transform="translate(-1317.000000, -212.000000)" fill="#999999">
                    <g id="lefnav-copy" transform="translate(1284.000000, 136.000000)">
                        <g id="Group-8-Copy-4" transform="translate(31.000000, 25.000000)">
                            <polygon id="Rectangle-3-Copy-3" points="2 51 6 55 2 58"></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </svg>


        <svg class="icon-position" v-if="iconName === 'play'" :width="iconWidth" :height="iconHeight" viewBox="0 0 78 78" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <circle id="path-1" cx="30" cy="30" r="30"></circle>
                <filter x="-26.7%" y="-18.3%" width="153.3%" height="153.3%" filterUnits="objectBoundingBox" id="filter-2">
                    <feOffset dx="0" dy="5" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="4.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.458359906   0 0 0 0 0.458359906   0 0 0 0 0.458359906  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                </filter>
            </defs>
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.899999976">
                <g id="Document" transform="translate(-239.000000, -1251.000000)">
                    <g id="学院" transform="translate(0.000000, 1049.000000)">
                        <g id="1" transform="translate(100.000000, 136.000000)">
                            <g id="Group-2" transform="translate(148.000000, 70.000000)">
                                <g id="Oval">
                                    <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                                    <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                                </g>
                                <path d="M34.3048856,21.4943296 L43.9064747,40.6975078 C44.128765,41.1420884 43.9485631,41.6826941 43.5039824,41.9049845 C43.3790126,41.9674694 43.2412108,42 43.1014902,42 L23.898312,42 C23.4012558,42 22.998312,41.5970563 22.998312,41.1 C22.998312,40.9602794 23.0308426,40.8224777 23.0933276,40.6975078 L32.6949167,21.4943296 C32.917207,21.049749 33.4578127,20.869547 33.9023934,21.0918374 C34.076568,21.1789247 34.2177983,21.3201549 34.3048856,21.4943296 Z" id="Triangle" fill="#A4B4CE" transform="translate(33.500000, 31.500000) rotate(-270.000000) translate(-33.500000, -31.500000) "></path>

                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <svg class="icon-position" v-if="iconName === 'hat'" :width="iconWidth" :height="iconHeight" viewBox="0 0 20 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document" transform="translate(-371.000000, -1398.000000)" fill="#FFFFFF">
                    <g id="学院" transform="translate(0.000000, 1049.000000)">
                        <g id="1" transform="translate(100.000000, 136.000000)">
                            <path d="M281.61497,222.850532 C281.230295,223.049823 280.771619,223.049823 280.388857,222.850532 L272,218.492836 L280.386944,214.149468 C280.771619,213.950177 281.230295,213.950177 281.613056,214.149468 L290,218.507164 L281.61497,222.850532 Z M284.639524,224.46337 L281.496493,226.145955 C281.186032,226.312025 280.813968,226.312025 280.503507,226.145955 L277.360476,224.46337 C277.139677,224.345577 277,224.107414 277,223.844149 L277,222 L279.939311,223.578952 C280.271119,223.755964 280.635255,223.844149 280.99939,223.844149 C281.362916,223.844149 281.727051,223.755964 282.058859,223.578952 L284.99756,222.005793 L284.99756,223.844149 C285,224.107414 284.862763,224.343002 284.639524,224.46337 Z M282.085625,213.260357 C281.40625,212.913214 280.59375,212.913214 279.91375,213.260357 L271.536875,217.552308 C271.206875,217.722093 271,218.059137 271,218.435945 C271,218.81086 271.205,219.149797 271.536875,219.319582 L275.83,221.524887 L275.83,224.006771 C275.83,224.675179 276.196875,225.276684 276.786875,225.579014 L280.0075,227.227628 C280.318125,227.387314 280.66,227.46621 281.001875,227.46621 C281.343125,227.46621 281.685,227.387314 281.995625,227.227628 L285.216875,225.579014 C285.80625,225.276684 286.17375,224.673286 286.17375,224.006771 L286.17375,221.532461 L288.605625,220.285902 L288.605625,222.493101 C288.605625,222.792906 288.845,223.035907 289.1425,223.035907 C289.439375,223.035907 289.679375,222.792906 289.679375,222.493101 L289.679375,219.824517 C289.679375,219.794852 289.6775,219.767081 289.67375,219.739941 L290.4625,219.335361 C290.794375,219.165577 291,218.826639 291,218.451724 C291,218.074916 290.794375,217.735978 290.4625,217.566194 L282.085625,213.260357 Z" id="Fill-1"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <svg class="icon-position" v-if="iconName === 'love'" :width="iconWidth" :height="iconHeight" viewBox="0 0 14 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="App" transform="translate(-273.000000, -917.000000)" fill="#C5C5C5">
                    <g id="应用列表" transform="translate(250.000000, 417.000000)">
                        <g id="创建者" transform="translate(20.000000, 460.000000)">
                            <g id="Group-2">
                                <path d="M12.3920775,40 C11.2674116,40 10.224675,40.5632393 9.53153449,41.4896196 C8.84677309,40.5632393 7.79658837,40 6.67192246,40 C4.64603421,40 3,41.7934724 3,43.9945521 C3,45.3063067 3.58840137,46.2326871 4.06508096,46.9737914 C5.4429829,49.1304049 8.91380616,51.8057914 9.06276853,51.9169571 C9.20428278,52.0281227 9.36814139,52.08 9.53153449,52.08 C9.69585861,52.08 9.85971722,52.0281227 10.0012315,51.9169571 C10.1501938,51.8057914 13.613569,49.1229939 14.998919,46.9737914 C15.4755986,46.2326871 16.064,45.3063067 16.064,43.9945521 C16.064,41.7934724 14.4179658,40 12.3920775,40" id="Fill-1"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <svg class="icon-position" v-if="iconName === 'img'" :width="iconWidth" :height="iconHeight" viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="App" transform="translate(-296.000000, -917.000000)" fill="#C5C5C5">
                    <g id="应用列表" transform="translate(250.000000, 417.000000)">
                        <g id="创建者" transform="translate(20.000000, 460.000000)">
                            <g id="Group-2">
                                <path d="M37.7021543,41.3308788 L27.3084138,41.3308788 L27.3084138,49.5616534 C27.4331989,49.3770059 27.5713973,49.1923585 27.723822,49.007711 C27.8762468,48.8234804 28.0351749,48.656339 28.2014195,48.5075373 C28.3676641,48.3583189 28.5391927,48.2357763 28.7155989,48.1399097 C28.8920051,48.0440431 29.0704437,47.9961098 29.2501016,47.9961098 C29.4647156,47.9961098 29.6500641,48.0119486 29.8057405,48.0440431 C29.961417,48.0761375 30.1000219,48.1169851 30.2211487,48.1665856 C30.3422756,48.216603 30.4544602,48.2712053 30.5585155,48.3316429 C30.6625707,48.3916638 30.7747553,48.4470997 30.8958822,48.4967002 C31.017009,48.5467176 31.1539881,48.5871483 31.3060063,48.6192428 C31.458431,48.6509205 31.6417472,48.6671761 31.8563612,48.6671761 C32.0709752,48.6671761 32.2563237,48.6013199 32.4120001,48.4700243 C32.5676766,48.3387287 32.7115655,48.1736714 32.842854,47.9748524 C32.9741425,47.7764502 33.1058375,47.5630427 33.2375324,47.3358805 C33.3692274,47.1087183 33.5175875,46.8961445 33.683832,46.6973255 C33.8500766,46.4985064 34.047619,46.3334491 34.2756464,46.2021535 C34.5044868,46.0708579 34.7808836,46.0050017 35.1064628,46.0050017 C35.3832661,46.0050017 35.6499078,46.0921153 35.9059813,46.2659257 C36.1620548,46.4401528 36.3994309,46.665231 36.6172967,46.9424106 C36.8351624,47.2191733 37.0359566,47.5276138 37.2196792,47.8685655 C37.4029953,48.2091004 37.5639559,48.5429663 37.7021543,48.8693296 L37.7021543,41.3308788 Z M39,52 L26,52 L26,40 L39,40 L39,41.3308788 L39,52 Z M30.8804365,46.0050017 C30.6520026,46.0050017 30.4390145,45.9608197 30.2418785,45.8720389 C30.0447425,45.7832581 29.8732139,45.6627996 29.7276991,45.5098298 C29.5825908,45.3572768 29.4663415,45.180132 29.3797642,44.9775617 C29.2935935,44.7754081 29.2501016,44.5607503 29.2501016,44.3335881 C29.2501016,44.1064258 29.2935935,43.891768 29.3797642,43.6891976 C29.4663415,43.4870441 29.5825908,43.3111497 29.7276991,43.162348 C29.8732139,43.0131296 30.0447425,42.8943383 30.2418785,42.8055575 C30.4390145,42.7167767 30.6520026,42.6725947 30.8804365,42.6725947 C31.1019604,42.6725947 31.3112904,42.7167767 31.5084264,42.8055575 C31.7059688,42.8943383 31.877091,43.0131296 32.0226058,43.162348 C32.1681206,43.3111497 32.2839634,43.4870441 32.3705406,43.6891976 C32.4571178,43.891768 32.5002032,44.1064258 32.5002032,44.3335881 C32.5002032,44.5607503 32.4571178,44.7754081 32.3705406,44.9775617 C32.2839634,45.180132 32.1681206,45.3572768 32.0226058,45.5098298 C31.877091,45.6627996 31.7059688,45.7832581 31.5084264,45.8720389 C31.3112904,45.9608197 31.1019604,46.0050017 30.8804365,46.0050017 L30.8804365,46.0050017 Z" id="Fill-1"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <svg class="icon-position" v-if="iconName === 'camera'" :width="iconWidth" :height="iconHeight" viewBox="0 0 16 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="App" transform="translate(-318.000000, -918.000000)" fill="#C5C5C5">
                    <g id="应用列表" transform="translate(250.000000, 417.000000)">
                        <g id="创建者" transform="translate(20.000000, 460.000000)">
                            <g id="Group-2">
                                <path d="M52.9680152,44.7649479 C52.8379972,45.3671072 52.3635567,45.8403659 51.8022292,45.9692666 C50.7227052,46.1841012 49.81633,45.2382065 50.0319848,44.2057554 C50.1620028,43.603596 50.6370684,43.1303373 51.1977708,43.0444035 C52.2772948,42.786602 53.18367,43.6895298 52.9680152,44.7649479 M58.3717034,41 L49.6289172,41 C48.7285138,41 48,41.7790782 48,42.7419764 L48,50.2580236 C48,51.2209218 48.7285138,52 49.6289172,52 L58.3717034,52 C59.2714862,52 60,51.2209218 60,50.2580236 L60,42.7419764 C60,41.7790782 59.2714862,41 58.3717034,41 M60.8005148,43.489729 L63.2001287,42.1148467 C63.6441441,41.8489891 64,42.0705371 64,42.5142754 L64,49.4773061 C64,49.965354 63.6441441,50.1425924 63.2001287,49.8760926 L60.8005148,48.5012103 C60.3552124,48.2353526 60,47.9688528 60,47.5257567 L60,44.420873 C60,43.9771348 60.3552124,43.7555867 60.8005148,43.489729" id="Fill-1"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <svg class="icon-position" v-if="iconName === 'url'" :width="iconWidth" :height="iconHeight" viewBox="0 0 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="App" transform="translate(-344.000000, -918.000000)" fill="#C5C5C5">
                    <g id="应用列表" transform="translate(250.000000, 417.000000)">
                        <g id="创建者" transform="translate(20.000000, 460.000000)">
                            <g id="Group-2">
                                <path d="M78.3742099,48.7526291 L81.7534078,45.3730103 C82.0718638,45.0686801 82.0832862,44.5646617 81.7794508,44.246623 C81.4756154,43.9281272 80.9716599,43.9167034 80.6532038,44.2205767 C80.6440659,44.2292588 80.634928,44.2383978 80.626247,44.2475369 L77.2465922,47.6271557 C76.9281362,47.931029 76.9167138,48.4355043 77.2205492,48.753543 C77.5243846,49.0715818 78.0283401,49.0834626 78.3463393,48.7795893 C78.3554772,48.7709072 78.3646151,48.7617682 78.373753,48.7526291 L78.3742099,48.7526291 Z M77.0001641,50.6183762 L75.3815228,48.9993846 L77.8094847,46.5720459 L77.4044962,46.16738 C77.1809977,45.9442067 76.8190023,45.9442067 76.5955038,46.16738 L74.16787,48.595047 C73.9440433,48.8188767 73.9440433,49.1812053 74.16787,49.4047069 L76.5955038,51.8323738 C76.8190023,52.0558754 77.1809977,52.0558754 77.4044962,51.8323738 L79.83213,49.4047069 C80.0559567,49.1812053 80.0559567,48.8188767 79.83213,48.595047 L79.428126,48.1910375 L77.0001641,50.6183762 Z M82.4050041,41.16738 C82.1818139,40.9442067 81.8194581,40.9442067 81.5959397,41.16738 L79.1680903,43.5953752 C78.9442437,43.8185486 78.9439155,44.1808771 79.1674339,44.4047069 L79.1680903,44.4050351 L79.5718019,44.8090445 L81.9999796,42.3813776 L83.6190929,44.000041 L81.1909152,46.4273798 L81.5959397,46.8323738 C81.8191299,47.0558754 82.1814857,47.0558754 82.4046759,46.8323738 L84.8328535,44.4047069 C85.0557155,44.1808771 85.0557155,43.8185486 84.8328535,43.595047 L82.4050041,41.16738 Z" id="Fill-1"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <svg class="icon-position" v-if="iconName === 'recommend'" :width="iconWidth" :height="iconHeight" viewBox="0 0 44 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <path d="M1,-3.33955086e-13 L38.9999811,-8.92373185e-08 C39.5522658,-8.92373186e-08 39.9999811,0.447715161 39.9999811,0.999999911 C39.9999811,0.999999941 39.9999811,0.99999997 39.9999811,1 L39.9999811,28.1382785 C39.999981,28.9003168 39.566937,29.5961376 38.883238,29.9326759 C30.4846012,34.0667512 24.1901885,36.1337889 20,36.1337889 C15.8098131,36.1337889 9.51539711,34.0667528 1.116752,29.9326807 L1.116748,29.9326888 C0.433045987,29.5961496 1.44866406e-13,28.9003261 1.44773082e-13,28.1382847 L1.45661261e-13,1 C1.45593625e-13,0.44771525 0.44771525,-3.33853633e-13 1,-3.33955086e-13 Z" id="path-1"></path>
                <filter x="-8.8%" y="-6.9%" width="117.5%" height="119.4%" filterUnits="objectBoundingBox" id="filter-2">
                    <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                </filter>
            </defs>
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="App" transform="translate(-459.000000, -486.000000)" fill-rule="nonzero">
                    <g id="应用列表" transform="translate(250.000000, 417.000000)">
                        <g id="推荐" transform="translate(211.000000, 70.000000)">
                            <g id="Group">
                                <g id="Rectangle-34">
                                    <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                                    <use fill="#3D88FF" xlink:href="#path-1"></use>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        <svg class="icon-position" v-if="iconName === 'arrow'" :width="iconWidth" :height="iconHeight" viewBox="0 0 11 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Homepage-Newstyle" transform="translate(-851.000000, -3820.000000)" stroke="#FFFFFF" stroke-width="2">
                    <g id="news" transform="translate(255.000000, 3454.000000)">
                        <g id="Group" transform="translate(0.000000, 92.000000)">
                            <polyline id="Path-15" points="597 275 605 287 597 299"></polyline>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

        <svg class="icon-position" v-if="iconName === 'level'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.12 17.16"><path d="M408.56,299.76a6.07,6.07,0,0,1-1.92,4l0,0a29.91,29.91,0,0,1-6,4.3.46.46,0,0,1-.38,0,29,29,0,0,1-5.92-4.31l0,0a6,6,0,0,1-1.92-3.95v-.06h0v-8.37a.44.44,0,0,1,.44-.44h15.24a.44.44,0,0,1,.44.44v8.4Z" transform="translate(-392.44 -290.93)" style="fill:#eea164;fill-rule:evenodd"/><path d="M400.59,293.53c1.51,0,.91,1.82,1.94,2.24a4.88,4.88,0,0,0,.9.06c.66.11,1.37.14,1.48.82.18,1.13-1.4,1.52-1.58,2.26s1,2.46-.19,2.85c-1,.33-1.56-.78-2.32-.91s-1.44,1.55-2.6.82c-.93-.58.27-1.94,0-2.83-.21-.71-1.43-.89-1.59-1.85s.74-1,1.42-1.16c.42-.07.88.07,1.14-.15.55-.46.49-1.57,1.07-2Z" transform="translate(-392.44 -290.93)" style="fill:#fff;fill-rule:evenodd"/></svg>

        <svg class="icon-position" v-if="iconName === 'points'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.8 19.32"><path d="M400,310.16c-4.64,0-8.4-1.08-8.4-2.41v-2.9c2.4,1.62,7.65,1.69,8.4,1.69s6-.07,8.4-1.69v2.9C408.4,309.08,404.64,310.16,400,310.16Zm0-4.83c-4.64,0-8.4-1.08-8.4-2.41V300c2.4,1.62,7.65,1.69,8.4,1.69s6-.07,8.4-1.69v2.9C408.4,304.25,404.64,305.33,400,305.33Zm0-4.83c-4.64,0-8.4-1.08-8.4-2.42v-2.9c2.4,1.62,7.65,1.69,8.4,1.69s6-.07,8.4-1.69v2.9C408.4,299.42,404.64,300.5,400,300.5Zm0-4.83c-4.64,0-8.4-1.08-8.4-2.42s3.76-2.41,8.4-2.41,8.4,1.08,8.4,2.41S404.64,295.67,400,295.67Z" transform="translate(-391.6 -290.84)" style="fill:#e96c66;fill-rule:evenodd"/></svg>
<!--眼睛-->
        <svg class="icon-position" v-if="iconName === 'eye'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.17 14.59"><path d="M400,294.17a13.09,13.09,0,0,1,11.08,6.13v.34a13.09,13.09,0,0,1-22.17,0v-.34A13.1,13.1,0,0,1,400,294.17m0,10a3.73,3.73,0,1,0-3.79-3.74A3.77,3.77,0,0,0,400,304.2m0-11A14.06,14.06,0,0,0,387.92,300v.91a14.09,14.09,0,0,0,24.17,0V300A14.06,14.06,0,0,0,400,293.17Zm0,10a2.74,2.74,0,1,1,2.79-2.74A2.76,2.76,0,0,1,400,303.2Z" transform="translate(-387.92 -293.17)" style="fill:#999899"/></svg>

        <svg class="icon-position bubble" v-if="iconName === 'comment-bubble'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.9 18.06"><path d="M400,292.47c5.21,0,9.45,2.75,9.45,6.13s-4.24,6.12-9.45,6.12a14.27,14.27,0,0,1-1.85-.12H398c-.71,0-1.59.58-3.76,2.13l-1.37,1,.27-.58c.91-2,1.56-3.36.43-4.05-1.91-1.17-3-2.79-3-4.45,0-3.38,4.24-6.13,9.45-6.13m0-1c-5.77,0-10.45,3.19-10.45,7.13,0,2.11,1.34,4,3.48,5.31.77.47-2.52,5.32-1.58,5.62h.07c.95,0,5.55-3.94,6.47-3.94h0a15.22,15.22,0,0,0,2,.13c5.77,0,10.45-3.19,10.45-7.12s-4.68-7.13-10.45-7.13Z" transform="translate(-389.55 -291.47)" style="fill:#393a3c"/><path d="M395,298a1,1,0,1,1-1,1A1,1,0,0,1,395,298Z" transform="translate(-389.55 -291.47)" style="fill:#393a3c;fill-rule:evenodd"/><path d="M400,298a1,1,0,1,1-1,1A1,1,0,0,1,400,298Z" transform="translate(-389.55 -291.47)" style="fill:#393a3c;fill-rule:evenodd"/><path d="M405,298a1,1,0,1,1-1,1A1,1,0,0,1,405,298Z" transform="translate(-389.55 -291.47)" style="fill:#393a3c;fill-rule:evenodd"/></svg>

        <svg class="icon-position bubble" v-if="iconName === 'favorite-filled'" :width="iconWidth" :height="iconHeight" version="1.1" id="&#x56FE;&#x5C42;_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
             y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve">
            <path style="fill:#3D88FF;" d="M21.07,26c0.361-0.06,0.001-1.93,0.001-1.93l-2.827-6.816c-0.751-1.478-0.059-1.87-0.059-1.87
                l5.891-3.8C25.76,10.859,26,10.497,26,10.497c-0.723-0.905-1.984-0.905-1.984-0.905h-6.734c-0.841,0-0.962-1.026-0.962-1.026
                L14.337,1.81C13.555,0,13.044,0,13.044,0h-0.061c0,0-0.54,0-1.321,1.81L9.678,8.566c0,0-0.121,1.026-0.962,1.026H1.983
                c0,0-1.261,0-1.983,0.905c0,0,0.3,0.482,1.923,1.086l6.012,3.8c0,0,0.871,0.242-0.06,1.81L4.99,24.009c0,0-0.301,1.931,0.06,1.991
                c0.83,0.048,7.484-5.851,7.484-5.851s0.542-0.694,0.993,0.03C13.526,20.179,19.382,25.222,21.07,26z"/>
        </svg>

        <svg class="icon-position bubble" v-if="iconName === 'favorite-blank'" :width="iconWidth" :height="iconHeight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M400,291.54l.09.19,1.49,5.07a1.79,1.79,0,0,0,1.72,1.57h4.2l-4,2.61c-.5.31-1.08,1.19-.33,2.7l1.74,4.19c-1.19-.91-2.67-2.14-3.71-3a1.37,1.37,0,0,0-1.11-.58,1.54,1.54,0,0,0-1.11.53c-1.28,1.13-2.73,2.36-3.81,3.21l1.83-4.33a2.22,2.22,0,0,0,.32-2,1.43,1.43,0,0,0-.71-.76l-4.06-2.57h4.19a1.79,1.79,0,0,0,1.72-1.57l1.49-5.07.09-.19m0-1.54h0s-.42,0-1,1.39l-1.53,5.2s-.09.79-.74.79h-5.18a2.13,2.13,0,0,0-1.53.7s.23.37,1.48.84l4.62,2.92s.67.19,0,1.39l-2.22,5.24s-.23,1.49,0,1.53h0c.67,0,5.75-4.5,5.75-4.5a.61.61,0,0,1,.4-.23.44.44,0,0,1,.36.25s4.5,3.88,5.8,4.48c.28,0,0-1.48,0-1.48L404,303.27c-.58-1.14,0-1.44,0-1.44l4.53-2.92c1.3-.56,1.48-.84,1.48-.84a2.13,2.13,0,0,0-1.53-.7h-5.18c-.65,0-.74-.79-.74-.79l-1.53-5.2c-.6-1.39-1-1.39-1-1.39Z" transform="translate(-390 -290)" style="fill:#3d88ff"/></svg>
<!--视频-->
        <svg class="icon-position bubble" v-if="iconName === 'video'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11"><path d="M402.37,295h-8.74a1.69,1.69,0,0,0-1.63,1.74v7.52a1.69,1.69,0,0,0,1.63,1.74h8.74a1.69,1.69,0,0,0,1.63-1.74v-7.52a1.69,1.69,0,0,0-1.63-1.74" transform="translate(-392 -295)" style="fill:#3d88ff"/><path d="M404.8,297.49l2.4-1.37c.44-.27.8,0,.8.4v7c0,.49-.36.67-.8.4l-2.4-1.37c-.45-.27-.8-.53-.8-1v-3.1c0-.44.36-.67.8-.93" transform="translate(-392 -295)" style="fill:#3d88ff"/><path d="M397,298.76a1.59,1.59,0,0,1-1.17,1.2,1.5,1.5,0,0,1-1.77-1.76A1.47,1.47,0,0,1,395.2,297a1.44,1.44,0,0,1,1.77,1.72" transform="translate(-392 -295)" style="fill:#fff"/></svg>
<!--图片图标-->
        <svg class="icon-position bubble" v-if="iconName === 'pic-post'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.6 14.4"><path d="M408.3,307.2H392.7V292.8h15.6v14.4Z" transform="translate(-392.7 -292.8)" style="fill:#c5c5c5"/><path d="M406.74,294.4H394.27v9.88q.22-.33.5-.67a5.54,5.54,0,0,1,.57-.6,3.23,3.23,0,0,1,.62-.44,1.33,1.33,0,0,1,.64-.17,3.34,3.34,0,0,1,.67.06,2.81,2.81,0,0,1,.5.15,3.28,3.28,0,0,1,.41.2,3.25,3.25,0,0,0,.4.2,2.85,2.85,0,0,0,.49.15,3.32,3.32,0,0,0,.66.06,1,1,0,0,0,.67-.24,2.79,2.79,0,0,0,.52-.59q.24-.36.47-.77a5.44,5.44,0,0,1,.54-.77,2.63,2.63,0,0,1,.71-.59,2,2,0,0,1,1-.24,1.68,1.68,0,0,1,1,.31,3.84,3.84,0,0,1,.85.81,7.68,7.68,0,0,1,.72,1.11q.33.61.58,1.2Z" transform="translate(-392.7 -292.8)" style="fill:#fff"/><path d="M398.55,300a1.85,1.85,0,0,1-.77-.16,2,2,0,0,1-.62-.43,2.13,2.13,0,0,1-.42-.64,2,2,0,0,1,0-1.55,2,2,0,0,1,.42-.63,2,2,0,0,1,.62-.43,1.84,1.84,0,0,1,.77-.16,1.81,1.81,0,0,1,.75.16,2,2,0,0,1,.62.43,2,2,0,0,1,.42.63,2,2,0,0,1,0,1.55,2.14,2.14,0,0,1-.42.64,2,2,0,0,1-.62.43,1.82,1.82,0,0,1-.75.16Z" transform="translate(-392.7 -292.8)" style="fill:#c5c5c5"/></svg>
<!--操作指导-->
        <svg class="icon-position bubble" v-if="iconName === 'operation'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.01 13.99"><path d="M405.48,307h-11a1.46,1.46,0,0,1-1.49-1.48V294.34c0-1.4,1.47-1.33,1.47-1.33h11.05a1.47,1.47,0,0,1,1.48,1.33v11.13A1.54,1.54,0,0,1,405.48,307Zm-1-6a16.43,16.43,0,0,0-2.66-.17l.08.07a4.23,4.23,0,0,1-2.21-2.7s-.4-1.66-.46-2.17.17-1,.29-.57a1.59,1.59,0,0,1,.11.91l.12.69s.4-1.49.12-1.89c0,0-1-.63-1,.34a9.41,9.41,0,0,0,.23,2.63,25,25,0,0,1-2.6,5.32s-.63.91-.92,1c0,0-.69.29-.23-.34,0,0,1.1-1.26,1.33-1.6a11.82,11.82,0,0,0-1.9,1.43c-.12.29-.35.91.12,1.14,0,0,.52.29,1.15-.4a24.9,24.9,0,0,0,1.67-2.29,33.72,33.72,0,0,1,4.27-1s1.67.69,2.19.8a1.21,1.21,0,0,1,.75.51s.4-.51.12-.69a17,17,0,0,1-1.85-.69l-.13-.06a3.92,3.92,0,0,1,1.58.17c.4.23.35.4.64.17S404.93,301.15,404.46,301Zm-1.67.34a1.84,1.84,0,0,1-.9-.45c.44.21.83.32,1.12.45Zm-3.46-2.23c.11.57,1.73,2,1.73,2-.46.06-3.12.69-3.12.69Z" transform="translate(-393 -293.01)" style="fill:#c5c5c5;fill-rule:evenodd"/></svg>
<!--收藏-->
        <svg class="icon-position bubble" v-if="iconName === 'collect'" :width="iconWidth" :height="iconHeight" version="1.1" id="&#x56FE;&#x5C42;_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
             y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve">
            <path style="fill:#3D88FF;" d="M21.07,26c0.361-0.06,0.001-1.93,0.001-1.93l-2.827-6.816c-0.751-1.478-0.059-1.87-0.059-1.87
                l5.891-3.8C25.76,10.859,26,10.497,26,10.497c-0.723-0.905-1.984-0.905-1.984-0.905h-6.734c-0.841,0-0.962-1.026-0.962-1.026
                L14.337,1.81C13.555,0,13.044,0,13.044,0h-0.061c0,0-0.54,0-1.321,1.81L9.678,8.566c0,0-0.121,1.026-0.962,1.026H1.983
                c0,0-1.261,0-1.983,0.905c0,0,0.3,0.482,1.923,1.086l6.012,3.8c0,0,0.871,0.242-0.06,1.81L4.99,24.009c0,0-0.301,1.931,0.06,1.991
                c0.83,0.048,7.484-5.851,7.484-5.851s0.542-0.694,0.993,0.03C13.526,20.179,19.382,25.222,21.07,26z"/>
        </svg>
<!--点评-->
        <svg class="icon-position bubble" v-if="iconName === 'comment'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 19.05"><path d="M405.08,292l.89.89-.44.45-.16.16-.16-.16-.57-.57-.16-.16.16-.16.45-.45m-2.59,2.59.16.16.57.58.16.16-8.2,8.21-.44.44-.89-.89.44-.44,8.2-8.2m2.59-3.67a.81.81,0,0,0-.58.24l-.58.57-.86.87.86.87.58.58.86.87.86-.87.57-.58a.82.82,0,0,0,0-1.16l-1.15-1.15a.81.81,0,0,0-.58-.24Zm-2.59,2.25-8.91,8.91-1.19,1.19a5.58,5.58,0,0,1,.62.54l1.15,1.15a5.71,5.71,0,0,1,.54.62l1.19-1.19,8.91-8.91-.86-.87-.57-.57-.86-.87ZM392,304c-.12.27-.26.64-.41,1.08l-.7,2.09h0l2.09-.7c.44-.15.81-.29,1.08-.41a5.15,5.15,0,0,0-.43-.49l-1.15-1.15A5.1,5.1,0,0,0,392,304Z" transform="translate(-390 -290.95)" style="fill:#393a3c"/><path d="M390,309h21v1H390Z" transform="translate(-390 -290.95)" style="fill:#393a3c;fill-rule:evenodd"/></svg>
<!--举报-->
        <svg class="icon-position bubble" v-if="iconName === 'inform'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.61 17.99"><path d="M400,292c.27,0,.57.23.82.64l8.72,14.16c.28.45.29.77.22.9s-.36.29-.9.29H391.14c-.28,0-.94,0-.94-.47a1.43,1.43,0,0,1,.26-.72l8.73-14.16c.25-.41.55-.64.82-.64m0-1a2,2,0,0,0-1.67,1.12l-8.73,14.16a2.42,2.42,0,0,0-.41,1.25c0,.87.71,1.47,1.94,1.47h17.72c1.76,0,2.46-1.22,1.54-2.71l-8.72-14.16A2,2,0,0,0,400,291Z" transform="translate(-389.19 -291)" style="fill:#393a3c"/><path d="M399.1,306.3h1.8v-1.8h-1.8Zm1.8-9h-1.8v5.33l1.79.07v-5.4Z" transform="translate(-389.19 -291)" style="fill:#393a3c;fill-rule:evenodd"/></svg>
<!-- share   分享-->
        <svg class="icon-position bubble" v-if="iconName === 'share'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M405.5,292a2.5,2.5,0,1,1-2.2,3.66l-.19-.36L403,295a2.5,2.5,0,0,1,2.45-3m-11,5a2.49,2.49,0,0,1,2.09,1.13l.17.27.12.39a2.37,2.37,0,0,1-.33,2.13l-.19.27-.32.26a2.48,2.48,0,0,1-1.54.55,2.5,2.5,0,0,1,0-5m11,6a2.5,2.5,0,1,1-2.5,2.55v-.47l.13-.38a2.49,2.49,0,0,1,2.35-1.7m0-12a3.5,3.5,0,0,0-3.43,4.19l-4.64,2.39a3.51,3.51,0,1,0-.76,4.64l5.34,3.19s0,.05,0,.08a3.56,3.56,0,1,0,.2-1.13l-4.83-2.88a3.37,3.37,0,0,0,.46-3l4.59-2.36A3.49,3.49,0,1,0,405.5,291Z" transform="translate(-391 -291)" style="fill:#323333"/></svg>
<!--蓝色点赞 blue like -->
        <svg class="icon-position bubble" v-if="iconName === 'Like'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19"><path d="M391.81,309a.77.77,0,0,1-.81-.81v-9.42a.77.77,0,0,1,.81-.81h1.68c3,0,4.55-2.59,5.9-4.88l.11-.21a1.75,1.75,0,0,0,.18-.29l.06-.06.07-.14c.38-.76.78-1.38,1.82-1.38a2.25,2.25,0,0,1,1.82.8c.31.41.35.62.3.84a10.92,10.92,0,0,1-1.17,3.3l-.91,1.52h5.26a2.14,2.14,0,0,1,1.68.66,1.93,1.93,0,0,1,.33,1.71l-1.81,7.89c-.09.52-.43,1.29-1.87,1.29Z" transform="translate(-391 -291)" style="fill:#3d88ff"/><path d="M394.52,310a.61.61,0,0,1-.65-.65V297.74a.65.65,0,0,1,1.29,0v11.74a.59.59,0,0,1-.65.52Zm0,0" transform="translate(-391 -291)" style="fill:#fff"/></svg>
<!--更新 update-->
        <svg class="icon-position bubble" v-if="iconName === 'update'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17"><path d="M404,297h-9c-.86,0-3,1.13-3,2h-2c0-2.62,2.42-4,5-4h9v-3l6,3.75L404,300Zm-8,7h9c.86,0,3-1.13,3-2l2,.08c0,2.62-2.41,3.92-5,3.92h-9v3l-6-3.75,6-4.25Z" transform="translate(-390 -292)" style="fill:#666;fill-rule:evenodd"/></svg>
<!--下载 download-->
        <svg class="icon-position bubble" v-if="iconName === 'download'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.11 14.39"><path d="M405.87,307.2H395.13a2.17,2.17,0,0,1-2.18-2.16v-2.58a.84.84,0,0,1,1.68,0V305a.5.5,0,0,0,.51.5h10.74a.5.5,0,0,0,.51-.5v-2.58a.84.84,0,0,1,1.68,0V305A2.17,2.17,0,0,1,405.87,307.2Zm-9.07-9.54h2.6V292.8h2.22v4.86h2.6L400.5,304Z" transform="translate(-392.94 -292.8)" style="fill:#fff"/></svg>
<!--    向右    towards the right-->
        <svg class="icon-position bubble" v-if="iconName === 'next'" :width="iconWidth" :height="iconHeight" viewBox="0 0 7 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document-Detial" transform="translate(-297.000000, -84.000000)" fill="#3D88FF">
                    <g id="面包" transform="translate(0.000000, 56.000000)">
                        <path d="M297.449747,34.4497475 L302.449747,34.4497475 L302.449747,36.4497475 L297.449747,36.4497475 L295.449747,36.4497475 L295.449747,29.4497475 L297.449747,29.4497475 L297.449747,34.4497475 Z" id="Combined-Shape" transform="translate(298.949747, 32.949747) rotate(-135.000000) translate(-298.949747, -32.949747) "></path>
                    </g>
                </g>
            </g>
        </svg>
<!--        为了首页改样式特意多写一个-->
        <svg class="icon-position bubble" v-if="iconName === 'nextIcon'" :width="iconWidth" :height="iconHeight" viewBox="0 0 7 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="currentpages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Document-Detial" transform="translate(-297.000000, -84.000000)" fill="#ffffff" class="nextIcon">
                    <g id="面包" transform="translate(0.000000, 56.000000)">
                        <path d="M297.449747,34.4497475 L302.449747,34.4497475 L302.449747,36.4497475 L297.449747,36.4497475 L295.449747,36.4497475 L295.449747,29.4497475 L297.449747,29.4497475 L297.449747,34.4497475 Z" id="Combined-Shape" transform="translate(298.949747, 32.949747) rotate(-135.000000) translate(-298.949747, -32.949747) "></path>
                    </g>
                </g>
            </g>
        </svg>
        <!--帖子 邀请-->
        <svg class="icon-position bubble" v-if="iconName === 'invitation'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M399,293s5-.06,6,0c0,.76,0,.58,0,1v12c0,.34,0,.72,0,1h-9.94a.06.06,0,0,1-.06-.06V297h4Zm-5,3v11c0,.68.14,1,.8,1h10.4c.66,0,.8-.32.8-1V293c0-.68-.14-1-.8-1h-7.6Zm2,5v1h4v-1Zm0,3v1h8v-1Zm0-5v1h6v-1Z" transform="translate(-394 -292)" style="fill:#666;fill-rule:evenodd"/><path d="M398,293v3h-2.8Z" transform="translate(-394 -292)" style="fill:#fff;fill-rule:evenodd"/></svg>
<!--关注-->
        <svg class="icon-position bubble" v-if="iconName === 'attention'" :width="iconWidth" :height="iconHeight" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.4 16.44"><path d="M400.16,292.88a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-1a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z" transform="translate(-392.6 -291.88)" style="fill:#666"/><path d="M400,304h7v1h-7Z" transform="translate(-392.6 -291.88)" style="fill:#666;fill-rule:evenodd"/><path d="M403,301h1v7h-1Z" transform="translate(-392.6 -291.88)" style="fill:#666;fill-rule:evenodd"/><path d="M393.13,307.81s-.81-8.66,7.4-8.45" transform="translate(-392.6 -291.88)" style="fill:none;stroke:#666;stroke-linecap:round;stroke-linejoin:round;fill-rule:evenodd"/></svg>

        <svg class="icon-position" v-if="iconName === 'close-media'" :width="iconWidth" :height="iconHeight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M400,280a20,20,0,1,1-20,20A20,20,0,0,1,400,280Z" transform="translate(-380 -280)" style="fill:#040000;fill-rule:evenodd;opacity:0.2"/><path d="M396,319l-4-4,15-15L392.08,285l4-4,18.9,19h0Z" transform="translate(-380 -280)" style="fill:none;fill-rule:evenodd"/><path d="M405.87,307.2H395.13a2.17,2.17,0,0,1-2.18-2.16v-2.58a.84.84,0,0,1,1.68,0V305a.5.5,0,0,0,.51.5h10.74a.5.5,0,0,0,.51-.5v-2.58a.84.84,0,0,1,1.68,0V305A2.17,2.17,0,0,1,405.87,307.2Zm-9.07-9.54h2.6V292.8h2.22v4.86h2.6L400.5,304Z" transform="translate(-380 -280)" style="fill:none;fill-rule:evenodd"/><path d="M408,293l-1-1-7,7-7-7-1,1,7,7-7,7,1,1,7-7,7,7,1-1-7-7Z" transform="translate(-380 -280)" style="fill:#fff;fill-rule:evenodd"/></svg>

        <svg class="icon-position" v-if="iconName === 'right-media'" :width="iconWidth" :height="iconHeight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M400,260a40,40,0,1,1-40,40A40,40,0,0,1,400,260Z" transform="translate(-360 -260)" style="fill:#2a2525;fill-rule:evenodd;opacity:0.2"/><path d="M396,319l-4-4,15-15L392.08,285l4-4,18.9,19h0Z" transform="translate(-360 -260)" style="fill:#fff;fill-rule:evenodd"/></svg>

        <svg class="icon-position" v-if="iconName === 'left-media'" :width="iconWidth" :height="iconHeight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M400,260a40,40,0,1,1-40,40A40,40,0,0,1,400,260Z" transform="translate(-360 -260)" style="fill:#040000;opacity:0.2"/><path d="M404,319l4-4-15-15L407.92,285l-4-4-18.9,19h0Z" transform="translate(-360 -260)" style="fill:#fff;fill-rule:evenodd"/><path d="M400,260a40,40,0,1,1-40,40A40,40,0,0,1,400,260Z" transform="translate(-360 -260)" style="fill:none;fill-rule:evenodd"/><path d="M396,319l-4-4,15-15L392.08,285l4-4,18.9,19h0Z" transform="translate(-360 -260)" style="fill:none;fill-rule:evenodd"/><path d="M405.87,307.2H395.13a2.17,2.17,0,0,1-2.18-2.16v-2.58a.84.84,0,0,1,1.68,0V305a.5.5,0,0,0,.51.5h10.74a.5.5,0,0,0,.51-.5v-2.58a.84.84,0,0,1,1.68,0V305A2.17,2.17,0,0,1,405.87,307.2Zm-9.07-9.54h2.6V292.8h2.22v4.86h2.6L400.5,304Z" transform="translate(-360 -260)" style="fill:none;fill-rule:evenodd"/></svg>

    </div>
</template>

<script>
    export default {
        props:{
           icon:{
               type: String,
               required: true
           },
            width:{
               type: String
            },
            height:{
                type: String
            }
        },
        data(){
            return {
                iconName:this.icon,
                iconWidth:this.width,
                iconHeight:this.height
            }
        }
    }
</script>

<style lang="scss" scoped>
    .icon-wrapper{
        position: relative;
        .icon-position{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }

</style>
