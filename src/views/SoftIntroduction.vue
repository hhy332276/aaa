<template>
    <div class="softIntroduction">
        <div class="container">
            <div class="soft-banner ">
                <img :src="datalist.bannerUrl" alt="">
                <div class="soft-title">
                    <h2>{{$t('softBanner')}}</h2>
                    <p>{{$t('softTitle')}}</p>
                </div>
            </div>
            <div class="soft-wrap safe-distance" v-html="datalistData.softContent">

            </div>
        </div>
    </div>
</template>

<script>
    import datalists from "../static_data/softIntroduction";
    import {constants,settings} from "../../public/static/index";
    import {eventBus,eventBusActions} from "../event_bus";
    export default{
        name:"softIntroduction",
        components:{

        },
        data(){
            return{
                datalist:datalists.zh.soft,
                datas:{
                    zh:{
                        softContent:`<div class="soft-development">
                    <h3>集成开发环境Mind Studio介绍</h3>
                    <p class="text1">Mind Studio是一套基于华为昇腾AI处理器开发的AI全栈开发平台，提供了自定义算子的开发，网络层的网络移植、优化和分析等功能，另外在业务引擎层提供了一套可视化的AI引擎拖拽式编程服务，内置了丰富的高性能算子库，极大的降低了AI应用程序的开发门槛。</p>
                    <p class="text2">Mind Studio的架构如下所示，架构图中的缩略语可参考<a href="/documentation/details/zh/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/zh-cn_topic_0174372666.html">缩略语</a>：</p>
                    <div class="development-img">
                        <img src="/imgs/1soft.png" alt="">
                    </div>
                    <div>
                        <p>Mind Studio是基于Eclipse CHE架构的集成开发环境。</p>
                        <p>其中：</p>
                        <p>Mind DDK（Device Development Kit），为开发者提供了基于Ascend芯片的算法开发工具包，包括Host侧及Device侧开发编译时所依赖的库，开发机（UI Host）使用的工具及依赖库，以及一些公共头文件、第三方依赖库、DDK样例等</p>
                        <p>其中：</p>
                        <ul>
                            <li>Host指与Device相连接的X86服务器、ARM服务器或者WindowsPC，会利用Device提供的NN（Neural-Network）计算能力完成业务。</li>
                            <li>Device指安装了Ascend 310处理器的硬件设备，利用PCIe接口与Host侧连接，为Host提供NN计算能力。</li>
                            <li>对于Atlas 200 DK，Ascend 310处理器所在硬件设备与与之相连接的ARM服务器合设，统称为Host。</li>
                            <li>开发机（UI Host）：指Mind Studio所在服务器。</li>
                        </ul>
                        <p>Mind Sutdio的IDE Plugins集成了层的各个工具模块（如模型管理工具（OMG/OME）、调试器、性能分析工具、日志工具、性能调优工具等），为用户提供简洁、友好的图形化编码、编译、调试、性能分析平台</p>
                    </div>
                </div>
                <div class="soft-modelManagement">
                    <h3>
                        模型管理工具—OMG/OME
                    </h3>
                    <p>训练好的第三方模型（Caffe、Tensorflow等）可通过OMG（Offline Model Generator：离线模型生成器）转换成Ascend 310处理器支持的离线模型，应用程序运行时，可通过OME（Offline Model Executor：离线模型执行器）进行离线模型的加载，进行推理。</p>
                    <p class="clear-div">离线模型功能框架下图所示</p>
                    <div class="model-img">
                        <img src="/imgs/2.jpg" alt="">
                    </div>
                    <ul>
                        <li>OMG：用户使用Caffe/Tensorflow等框架训练好的模型，可通过OMG将其转换为Ascend 310处理器支持的离线模型，模型转换过程中可以实现算子调度的优化、权值数据重排、量化压缩、内存使用优化等，可以脱离设备完成模型的预处理。</li>
                        <li>OME：应用程序执行时，OME加载转换好的离线模型文件，分配运行时所需资源，然后遍历模型文件中的每个算子，创建算子运行所需要的描述信息、拷贝权值数据到设备内存，最后创建消息处理线程，在线程中等待输入数据进行处理。</li>
                    </ul>
                        <p>模型管理的详细操作可参考<a href="/documentation/details/zh/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/zh-cn_topic_0160787880.html">模型管理。</a></p>
                </div>
                <div class="businessChoreography">
                    <h3>业务编排工具—Matrix</h3>
                    <div class="business-left">
                        <p>Mind Studio提供业务编排工具—Matrix，Matrix支持图形化的界面编排功能，支持通过拖拽方式编排业务Engine，流程代码通过DSL自动生成，Matrix作为Ascend平台的用户接口，主要提供以下能力：</p>
                        <p>流程编排</p>
                        <ul>
                            <li>定义Engine为流程的基本功能单元，同时允许用户自定义Engine的实现。</li>
                            <li>定义Graph管理若干Engine组成的流程。</li>
                        </ul>
                        <p>媒体预处理能力：</p>
                        <p>运行在Ascend 310上的Engine可直接调用DVPP提供的API实现媒体预处理能力。</p>
                        <p>离线模型加载和运行：</p>
                        <p>运行在Ascend 310上的Engine可直接调用OME提供的API进行离线模型加载和推理功能。</p>
                        <p>Matrix的功能架构如右图所示：</p>
                        <ul>
                            <li>
                                Miatrix Web UI提供界面操作功能，支持创建的Matrix工程包含Default与Custom两种，其中Default工程提供图形化的流程编排界面，流程代码通过DSL自动生成。Custom工程支持用户自定义创建代码文件及代码开发，不支持框架自动生成。
                            </li>
                            <li>
                                <p>Matrix Agent：运行在Host侧，其功能如下。</p>
                                <p>完成与Host APP进行控制命令和处理数据的交互。</p>
                                <p>完成与Device间的IPC（InterProcess Communication）通信。</p>
                            </li>
                            <li>
                                <p>Matrix Service：运行在Device侧，其功能如下。</p>
                                <p>Engine调用DVPP的API接口实现媒体预处理。</p>
                                <p>Engine调用OME的API接口（AIModelManger）实现模型推理。</p>
                            </li>
                        </ul>
                        <p>
                            使用Matrix进行应用开发的详细流程可参考<a href="/documentation/details/zh/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/zh-cn_topic_0178961834.html">应用开发指导</a>。
                        </p>
                    </div>
                    <div class="business-right">
                        <div class="business-img">
                            <img src="/imgs/3.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="loggingTools">
                    <h3>日志工具</h3>
                    <p>Mind Studio  为Ascend 310提供覆盖全系统的日志收集与日志分析工具，统一了系统日志格式，并以Web化的形式提供跨平台日志可视化分析能力及运行时诊断能力，提升日志分析系统的易用性。</p>
                    <p class="img-top">日志分析原理如下图所示</p>
                    <div class="logging-img">
                        <img src="/imgs/4.png" alt="">
                    </div>
                    <ul>
                        <li>Device侧负责日志文件生成，通过HDC（host device communication，主机设备通信，用于Host与Device之间通信模块）通道传输日志文件给Host侧。</li>
                        <li>Host侧生成用户态和内核态日志，并负责日志文件的转储和压缩。</li>
                        <li>Mind Studio负责日志文件的解析和显示，同时支持界面导出日志文件。</li>
                    </ul>
                    <p>详细的日志概述及日志工具的操作可参考<a href="/documentation/details/zh/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/zh-cn_topic_0160785571.html">日志工具</a></p>
                </div>
                <div class="performanceAnalysis">
                    <h3>
                        全流程性能分析工具—Profiling
                    </h3>
                    <p>Profiling工具提供图形化界面和命令行两种UI呈现方式，实现针对Host和Device多节点、多模块异构体系的高效、易用、可灵活扩展的系统性能分析功能，可准确定位关键性能瓶颈并提出针对性能的优化建议。</p>
                    <p class="perform-img-top">性能Profiling的原理如下图所示</p>
                    <div class="perform-img">
                        <img src="/imgs/5.jpg" alt="">
                    </div>
                    <ul>
                        <li>
                            <p>Web UI方式：Host与Device侧的软硬件性能数据采集后经过Data pre-processing后会分别存储到Database与送入Data analysis进行分析，分析后的性能数据也存储到Database。</p>
                            <p>Profiling Web界面会从Database中读取分析后的性能数据进行界面展示。</p>
                        </li>
                        <li>
                            命令行方式：Host与Device侧的软硬件性能数据采集后经过Data pre-processing后会分别存储到Database并生成Profiling数据文件，用户可以将Profiling数据文件通过Web界面进行导入展示。
                        </li>
                    </ul>
                    <p>Profiling工具支持业务全流程Profiling与单算子Profiling，详细的操作指导可参考 <a href="/documentation/details/zh/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/zh-cn_topic_0160785723.html">Profiling</a></p>
                </div>
                <div class="soft-blackBox">
                    <h3>黑匣子工具</h3>
                    <div class="black-left">
                        <p>当系统软件或硬件由于异常原因无法复位，且通过正常日志通道无法获取信息的情况下，可通过查看黑匣子保存的异常信息进行问题定位。</p>
                        <p>以下场景会触发黑匣子功能：</p>
                        <ul>
                            <li>软件引起的系统停止响应后重启：linux Panic、驱动异常、安全OS异常等。</li>
                            <li>硬件异常引起的系统停止响应后重启：Ascend芯片超过一定温度、DDR（Double Data Rate：双倍数据速率）总线停止响应。</li>
                            <li>子系统启动失败，包括控制CPU 系统启动失败、TS（Task Scheduler：任务调度） 启动失败、LPM3 启动失败。</li>
                        </ul>
                        <p>黑匣子管理界面从Host侧的黑匣子代理处获取异常信息，解析后展示在界面上。Host侧黑匣子管理代理响应黑匣子管理工具或者界面下发的异常信息收集命令，收集异常信息。Host侧黑匣子管理代理通过PCIe通道读取Device侧静态内存中预留的异常信息，并进行保存。</p>
                        <p>黑匣子工具的详细使用方法可参考<a href="/documentation/details/zh/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/zh-cn_topic_0160785621.html">黑匣子异常信息获取</a></p>
                    </div>
                    <div class="black-right">
                        <div class="black-img">
                            <img src="/imgs/6.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="debuggingTools">
                    <h3>调试工具</h3>
                    <div class="debugging-left">
                        <p>Mind Studio同时支持命令行界面调试及图形界面调试，用户可以同时在Host侧，Device侧的AI Core与AI CPU侧设置断点，当断点产生时，可以打印以下内容，也可以进行单步调试。</p>
                        <ul>
                            <li>打印函数调用栈、函数内部局部变量、参数、全局变量。</li>
                            <li>打印和修改寄存器的值。</li>
                            <li>打印和修改内存的值。</li>
                        </ul>
                    </div>
                    <div class="debugging-right">
                        <img src="/imgs/7.jpg" alt="">
                    </div>
                </div>
                <div class="contrastTool">
                    <h3>比对工具</h3>
                    <div class="contrast-left">
                        <p>比对工具可比对华为自有算子的运算结果与Caffe标准算子的运算结果，以便确认误差发生原因。</p>
                        <p>Mind Studio提供以下3种比对方法：</p>
                        <ul>
                            <li>Lower Bound比对，华为自主研发的算子比对。</li>
                            <li>Vector比对，包含余弦相似度、最大绝对误差、累积相对误差、欧氏相对距离的算子比对。</li>
                            <li>User-define比对，用户自定义算子比对。</li>
                        </ul>
                        <p>比对工具原理如右图所示</p>
                        <p>比对工具的详细使用方法可参考<a href="">比对工具</a></p>
                    </div>
                    <div class="contrast-right">
                        <img src="/imgs/8.jpg" alt="">
                    </div>
                </div>`
                    },

                    en:{
                        softContent:`<div class="soft-development">
                        <h3>IDE Mind Studio Introduce</h3>
                        <p class="text1">Mind Studio is an AI full-stack development platform based on Huawei Ascend AI processor. It enables the development of custom operators, and provides functions such as network migration, optimization, and analysis at the network layer. In addition, it provides a set of visualized AI engine drag-and-drop programming services at the service engine layer, and is embedded with rich high-performance operator libraries, greatly reducing the complexity of AI application development.</p>
                        <p class="text2">The following figure shows the architecture of Mind Studio. For details about the meanings, see <a href="/documentation/details/en/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/en-us_topic_0177031739.html">Glossary:</a></p>
                        <div class="development-img">
                            <img src="/imgs/softIntroduction1.png" alt="">
                        </div>
                        <div>
                            <p>Mind Studio is an integrated development environment based on the Eclipse Che architecture.</p>
                            <p>Specifically：</p>
                            <p>The MindSpore Device Development Kit (DDK) provides developers with an algorithm development toolkit based on the Ascend chipset, including the libraries that are depended on during development and compilation on the host and device, tools and libraries used by the UI Host, as well as some public header files, third-party dependency libraries, and DDK samples.</p>
                            <p>Specifically：</p>
                            <ul>
                                <li>The host refers to the x86 server, ARM server, or Windows PC connected to the device. It utilizes the neural-network (NN) computing capability provided by the device to complete services.</li>
                                <li>The device refers to the hardware device equipped with the Ascend 310 processor. It connects to and provides the NN computing capability for the host over the PCIe interface.</li>
                                <li>For the Atlas 200 DK, the hardware device where the Ascend 310 processor resides is jointly deployed with the connected ARM server, which is generally referred to as the host.</li>
                                <li>The UI Host is the server where Mind Studio is located.</li>
                            </ul>
                            <p>The IDE plug-ins of Mind Studio integrate various tool modules, such as the model manager (OMG/OME), debugger, Profiling tool, and log tool, to provide users with a simple and friendly platform capable of graphical coding, compilation, debugging, and performance analysis.</p>
                        </div>
                    </div>
                    <div class="soft-modelManagement">
                        <h3>
                            Model Manager—OMG/OME
                        </h3>
                        <p>The Offline Model Generator (OMG) can convert a trained third-party model (such as a Caffe or TensorFlow model) to an offline model supported by the Ascend 310 processor. When the application is running, the Offline Model Executor (OME) can load the offline model to perform inference.</p>
                        <p class="clear-div">The following figure shows the framework of offline model functions.</p>
                        <div class="model-img">
                            <img src="/imgs/softIntroduction2.png" alt="">
                        </div>
                        <ul>
                            <li>OMG: This tool enables you to convert a model that is trained by the framework such as Caffe/TensorFlow into an offline model supported by the Ascend 310 processor. During the offline model conversion, the OMG can be used for operator scheduling optimization, weight data re-orchestration, quantized compression, and memory usage optimization, thereby pre-processing the model without depending on the device.</li>
                            <li>OME: During the execution of an application, the OME loads the converted offline model file, allocates resources required for running, traverses each operator in the model file, creates the description required for running the operators, copies the weight data to the device memory, creates a message processing thread, and waits for the input data to be processed in the thread.</li>
                        </ul>
                            <p>For details, see <a href="/documentation/details/en/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/en-us_topic_0160787880.html">Model Management.</a></p>
                    </div>
                    <div class="businessChoreography">
                        <h3>Service Orchestrator—Matrix</h3>
                        <div class="business-left">
                            <p>Mind Studio provides the service orchestration tool Matrix, which supports graphical user interface (GUI)-based orchestration. Service engines can be orchestrated by dragging and dropping, and the process code is automatically generated by the DSL. As the user-specific API of the Ascend platform, Matrix provides the following capabilities:</p>
                            <p>Process orchestration</p>
                            <ul>
                                <li>An engine is defined as the basic functional unit of the process and the implementation of an engine can be customized.</li>
                                <li>A graph can manage several engines.</li>
                            </ul>
                            <p>Media pre-processing：</p>
                            <p>An engine running on Ascend 310 can directly call the APIs provided by the DVPP to implement the media pre-processing capability.</p>
                            <p>Offline model loading and running：</p>
                            <p>An engine running on Ascend 310 can directly call the APIs provided by the OME to load and infer the offline model.</p>
                            <p>The following figure shows the framework of Matrix functions.：</p>
                            <ul>
                                <li>
                                    Matrix Web UI: It supports GUI-based operations. Matrix projects come in two types–Default and Custom. A default project provides a graphical process orchestration UI, and the process code is automatically generated by the DSL. A custom project allows you to customize code files and develop code. The process code cannot be automatically generated by the framework.
                                </li>
                                <li>
                                    <p>Matrix Agent: It runs on the host and provides the following functions:</p>
                                    <p>Interacts with the host app for controlling commands and processing data.</p>
                                    <p>Implements interprocess communication (IPC) with the device.</p>
                                </li>
                                <li>
                                    <p>Matrix Service: It runs on the device and provides the following functions:</p>
                                    <p>Implements media pre-processing through an engine's call to the DVPP APIs.</p>
                                    <p>Implements model inference through an engine's call to the OME APIs (AIModelManger).</p>
                                </li>
                            </ul>
                            <p>
                                For details about how to develop applications based on Matrix, see <a href="/documentation/details/en/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/en-us_topic_0178961834.html">Application Development Guide</a>.
                            </p>
                        </div>
                        <div class="business-right">
                            <div class="business-img">
                                <img src="/imgs/3.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="loggingTools">
                        <h3>Log Tool</h3>
                        <p>Mind Studio provides a system-wide log collection and analysis tool for Ascend 310. It unifies the system log format and provides visualized analysis and runtime diagnosis of cross-platform logs through web UIs, improving the usability of the log analysis system.</p>
                        <p class="img-top">The following figure shows the working principle of log analysis.</p>
                        <div class="logging-img">
                            <img src="/imgs/softIntroduction4.png" alt="">
                        </div>
                        <ul>
                            <li>The device is responsible for generating log files and transferring log files to the host through host device communication (HDC).</li>
                            <li>The host generates logs in user mode and kernel mode, and dumps and compresses log files.</li>
                            <li>Mind Studio parses and displays log files and exports log files on the GUI.</li>
                        </ul>
                        <p>For details about the log overview and log tool operations, see <a href="/documentation/details/en/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/en-us_topic_0160785571.html">Log Tool.</a></p>
                    </div>
                    <div class="performanceAnalysis">
                        <h3>
                            E2E Performance Analysis Tool–Profiling
                        </h3>
                        <p>The Profiling tool provides two UI-based display modes: graphical user interface (GUI) and command-line interface (CLI). It can provide efficient, easy-to-use, and flexible system performance analysis functions for host and device nodes and multi-module heterogeneous systems, accurately locating key performance bottlenecks and providing performance optimization suggestions.</p>
                        <p class="perform-img-top">The following figure shows the working principle of Profiling.</p>
                        <div class="perform-img">
                            <img src="/imgs/softIntroduction5.png" alt="">
                        </div>
                        <ul>
                            <li>
                                <p>Web UI mode: After the software and hardware performance data is collected from the host and device, the data is stored in the database or sent for analysis after pre-processing. The analyzed performance data is also stored in the database.</p>
                                <p>The Profiling web UI reads the analyzed performance data from the database and displays the data on the GUI.</p>
                            </li>
                            <li>
                                CLI mode: After the software and hardware performance data is collected from the host and device, the data is stored in the database and a Profiling data file is generated after pre-processing. You can import and display the Profiling data file on the web UI.
                            </li>
                        </ul>
                        <p>The Profiling tool supports end-to-end (E2E) profiling and single-operator profiling. For details, see <a href="/documentation/details/en/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/en-us_topic_0160785723.html">Profiling</a>.</p>
                    </div>
                    <div class="soft-blackBox">
                        <h3>Black Box</h3>
                        <div class="black-left">
                            <p>If the system software or hardware cannot be reset due to an exception and the information cannot be obtained using a normal log channel, you can locate the fault by viewing the exception information stored in the black box.</p>
                            <p>The black box function is triggered in the following scenarios:</p>
                            <ul>
                                <li>The system breaks down and restarts due to a software reason such as Linux panic, driver exception, or Secure OS exception. </li>
                                <li>The system breaks down and restarts due to a hardware reason. For example, the Ascend chipset exceeds a certain temperature or the double data rate (DDR) bus stops responding.</li>
                                <li>The subsystem fails to be restarted due to an exception such as control CPU system startup failure, Task Scheduler (TS) startup failure, or LPM3 startup failure.</li>
                            </ul>
                            <p>The black box management GUI obtains exception information from the black box agent on the host, parses the information, and displays the information on the GUI. The black box management agent on the host responds to the exception information collection command issued by the black box management tool or GUI to collect exception information. The black box management agent on the host reads the abnormal information reserved in the static memory on the device over the PCIe and saves the information.</p>
                            <p>For details about how to use the black box, see <a href="/documentation/details/en/1.3.0.0/f4f39edd90e011e9a97afa163e714aa5/en-us_topic_0160785621.html">Black Box</a>.</p>
                        </div>
                        <div class="black-right">
                            <div class="black-img">
                                <img src="/imgs/softIntroduction6.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="debuggingTools">
                        <h3>调试工具</h3>
                        <div class="debugging-left">
                            <p>Mind Studio同时支持命令行界面调试及图形界面调试，用户可以同时在Host侧，Device侧的AI Core与AI CPU侧设置断点，当断点产生时，可以打印以下内容，也可以进行单步调试。</p>
                            <ul>
                                <li>打印函数调用栈、函数内部局部变量、参数、全局变量。</li>
                                <li>打印和修改寄存器的值。</li>
                                <li>打印和修改内存的值。</li>
                            </ul>
                        </div>
                        <div class="debugging-right">
                            <img src="/imgs/softIntroduction7.png" alt="">
                        </div>
                    </div>
                    <div class="contrastTool">
                        <h3>比对工具</h3>
                        <div class="contrast-left">
                            <p>比对工具可比对华为自有算子的运算结果与Caffe标准算子的运算结果，以便确认误差发生原因。</p>
                            <p>Mind Studio提供以下3种比对方法：</p>
                            <ul>
                                <li>Lower Bound比对，华为自主研发的算子比对。</li>
                                <li>Vector比对，包含余弦相似度、最大绝对误差、累积相对误差、欧氏相对距离的算子比对。</li>
                                <li>User-define比对，用户自定义算子比对。</li>
                            </ul>
                            <p>比对工具原理如右图所示</p>
                            <p>比对工具的详细使用方法可参考<a href="">比对工具</a></p>
                        </div>
                        <div class="contrast-right">
                            <img src="/imgs/softIntroduction8.png" alt="">
                        </div>
                    </div>`
                    }

                },
                language:""
            }
        },
        computed:{
            datalistData(){
                if(this.datas[this.$i18n.locale]){
                    return this.datas[this.$i18n.locale];
                }
                //return Chinese page if the specific language isn't available
                return this.datas["zh"];
            }
        },
        created() {
            this.language = settings.getLanguage();
            eventBus.$on(eventBusActions.LANGUAGE_CHANGED,()=>{
                this.language = settings.getLanguage();
            });
        },
    }
</script>

<style lang="scss">
    @import "../assets/css/mixins";
    @import "../assets/css/partials";
    .softIntroduction{
        .soft-banner{
            width: 100%;
            position: relative;
            >img{
                width: 100%;
            }
            .soft-title{
                position: absolute;
                color: $white-color;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 100%;
                text-align: center;
                h2{
                    font-size: 30px;
                    display: inline;
                }
                p{
                    font-size: 20px;
                    margin-top: 1%;
                }
            }
        }
        .container{
            margin: 0 auto;
            padding-bottom: 110px;
            .soft-wrap{
                max-width: 1366px;
                margin: 0 auto;
                font-size: 14px;
                color: $black-text-three;
                >div{
                    padding-top: 60px;
                    >h3{
                        margin-bottom: 40px;
                        font-size: 28px;
                        font-weight: 500;
                    }
                    a{
                        color: $color-primary;
                        font-size: 14px;
                    }
                    p{
                        font-size: 14px;
                        line-height: 25px;
                    }
                    >p{
                        margin-bottom: 30px;
                    }
                    >div{
                        img{
                            width: 100%;
                        }
                    }
                    ul{
                        padding: 0 10px 0 19px;
                        margin: 0;
                        li{
                            list-style:disc;
                            margin-bottom: 30px;
                        }
                    }
                }
                .soft-development{
                    h3{
                       text-align: center;
                       font-size: 28px;
                    }
                    .development-img{
                        margin: 40px auto;
                        width: 71.303%;
                    }
                    p{
                        line-height: 25px;
                    }
                    ul{
                        li{
                            margin: 0;
                        }
                    }
                    .text2{
                        margin-bottom: 0;
                    }
                }
                .soft-modelManagement{
                    .clear-div{
                        margin-bottom: 0;
                    }
                    .model-img{
                        width: 70.205%;
                        margin: 40px auto;
                    }
                }
                .businessChoreography{
                    overflow: hidden;
                    .business-left{
                        float: left;
                        width: 58.565%;
                        >p{
                            font-size: 14px;
                            line-height: 25px;
                            padding: 0 10px;
                            margin-bottom: 30px;
                        }
                        >div{
                            margin-bottom: 30px;
                        }
                    }
                    .business-right{
                        float: right;
                        width: 27.818%;
                        padding-top: 485px;
                        .business-img{
                            width: 49.211%;
                        }
                    }
                }
                .loggingTools{
                    .logging-img{
                        width: 100%;
                        margin: 40px 0;
                        padding: 0 20px;
                    }
                    .img-top{
                        margin-bottom: 0;
                    }
                }
                .performanceAnalysis{
                    .perform-img-top{
                        margin-bottom: 0;
                    }
                    .perform-img{
                        width: 48.169%;
                        margin: 40px auto;
                    }
                }
                .soft-blackBox{
                    overflow: hidden;
                    .black-left{
                        float: left;
                        width: 51.245%;
                        >p{
                            font-size: 14px;
                            line-height: 25px;
                            padding: 0 10px;
                            margin-bottom: 30px;
                        }
                    }
                    .black-right{
                        padding-top: 85px;
                        float: right;
                        width: 38.799%;
                    }
                }
                .debuggingTools{
                    overflow: hidden;
                    .debugging-left{
                        float: left;
                        width: 51.245%;
                        >p{
                            font-size: 14px;
                            line-height: 25px;
                            padding: 0 10px;
                            margin-bottom: 30px;
                        }
                    }
                    .debugging-right{
                        width: 22.694%;
                        float: left;
                        margin-left: 13.470%;
                    }
                }
                .contrastTool{
                    overflow: hidden;
                    .contrast-left{
                        width: 43.924%;
                        float: left;
                        >p{
                            font-size: 14px;
                            line-height: 25px;
                            padding: 0 10px;
                            margin-bottom: 30px;
                        }
                    }
                    .contrast-right{
                        width: 40.117%;
                        float: right;
                    }
                }
                .debuggingTools,.contrastTool{
                    display: none;
                }
            }
        }
    }

</style>
