<template>
  <div>
<!--    <el-container style="height: 500px; border: 1px solid #eee">-->
<!--      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->
<!--        <el-menu :default-openeds="['1', '3']">-->
<!--          <el-submenu index="1">-->
<!--            <template slot="title"><i class="el-icon-message"></i>导航一</template>-->
<!--            <el-menu-item-group>-->
<!--              <template slot="title">分组一</template>-->
<!--              <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--              <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-menu-item-group title="分组2">-->
<!--              <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-submenu index="1-4">-->
<!--              <template slot="title">选项4</template>-->
<!--              <el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
<!--            </el-submenu>-->
<!--          </el-submenu>-->
<!--          <el-submenu index="2">-->
<!--            <template slot="title"><i class="el-icon-menu"></i>导航二</template>-->
<!--            <el-menu-item-group>-->
<!--              <template slot="title">分组一</template>-->
<!--              <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--              <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-menu-item-group title="分组2">-->
<!--              <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-submenu index="2-4">-->
<!--              <template slot="title">选项4</template>-->
<!--              <el-menu-item index="2-4-1">选项4-1</el-menu-item>-->
<!--            </el-submenu>-->
<!--          </el-submenu>-->
<!--          <el-submenu index="3">-->
<!--            <template slot="title"><i class="el-icon-setting"></i>导航三</template>-->
<!--            <el-menu-item-group>-->
<!--              <template slot="title">分组一</template>-->
<!--              <el-menu-item index="3-1">选项1</el-menu-item>-->
<!--              <el-menu-item index="3-2">选项2</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-menu-item-group title="分组2">-->
<!--              <el-menu-item index="3-3">选项3</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-submenu index="3-4">-->
<!--              <template slot="title">选项4</template>-->
<!--              <el-menu-item index="3-4-1">选项4-1</el-menu-item>-->
<!--            </el-submenu>-->
<!--          </el-submenu>-->
<!--        </el-menu>-->
<!--      </el-aside>-->

<!--      <el-container>-->
<!--        <el-header style="text-align: right; font-size: 12px">-->
<!--          <el-dropdown>-->
<!--            <i class="el-icon-setting" style="margin-right: 15px"></i>-->
<!--            <el-dropdown-menu slot="dropdown">-->
<!--              <el-dropdown-item>查看</el-dropdown-item>-->
<!--              <el-dropdown-item>新增</el-dropdown-item>-->
<!--              <el-dropdown-item>删除</el-dropdown-item>-->
<!--            </el-dropdown-menu>-->
<!--          </el-dropdown>-->
<!--          <span>王小虎</span>-->
<!--        </el-header>-->

<!--        <el-main>-->
<!--          <el-table :data="tableData">-->
<!--            <el-table-column prop="date" label="日期" width="140">-->
<!--            </el-table-column>-->
<!--            <el-table-column prop="name" label="姓名" width="120">-->
<!--            </el-table-column>-->
<!--            <el-table-column prop="address" label="地址">-->
<!--            </el-table-column>-->
<!--          </el-table>-->
<!--        </el-main>-->
<!--      </el-container>-->
<!--    </el-container>-->
    <el-container>
      <el-header>Python智能家居</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu>
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>课程概述</template>
              <!--          <el-menu-item-group>-->
              <!--            <template slot="title">HomeAssistant</template>-->
              <el-menu-item index="1-1" @click="Page('showOne_one')">整体介绍</el-menu-item>
              <el-menu-item index="1-2" @click="Page('showOne_two')">课程项目</el-menu-item>
              <!--          </el-menu-item-group>-->
              <!--          <el-menu-item-group title="分组2">-->
<!--              <el-menu-item index="1-3" @click="Page('showOne_three')">连接哪些？</el-menu-item>-->
              <!--          </el-menu-item-group>-->
              <!--          <el-submenu index="1-4">-->
              <!--            <template slot="title">安装配置</template>-->
<!--              <el-menu-item index="1-4" @click="Page('showOne_four')">实践操作一</el-menu-item>-->
              <!--            <el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
              <!--          </el-submenu>-->
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>课程基础</template>
                  <el-submenu index="2-1">
                        <template slot="title">Hassio</template>
              <!--          <el-menu-item-group>-->
              <!--            <template slot="title">HomeAssistant</template>-->
                          <el-menu-item index="2-1-1" @click="Page('showOne')">概念介绍</el-menu-item>
                          <el-menu-item index="2-1-2" @click="Page('showTwo')">体系框架</el-menu-item>
              <!--          </el-menu-item-group>-->
              <!--          <el-menu-item-group title="分组2">-->
                          <el-menu-item index="2-1-3" @click="Page('showThree')" v-model="list.showThree">连接哪些？</el-menu-item>
              <!--          </el-menu-item-group>-->
              <!--          <el-submenu index="1-4">-->
              <!--            <template slot="title">安装配置</template>-->
<!--                          <el-menu-item index="2-1-4" @click="Page('showFour')" v-model="list.showFour">实践操作</el-menu-item>-->
              <!--            <el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
              <!--          </el-submenu>-->
                      </el-submenu>
                  <el-submenu index="2-2">
                          <template slot="title">Scrapy</template>
              <!--            <el-menu-item-group>-->
              <!--              <template slot="title">分组一</template>-->
                            <el-menu-item index="2-2-1" @click="Page('showFive')">概念流程</el-menu-item>
<!--                            <el-menu-item index="2-2-2" @click="Page('showSix')">实践操作</el-menu-item>-->
              <!--            </el-menu-item-group>-->
              <!--            <el-menu-item-group title="分组2">-->
              <!--              <el-menu-item index="2-3">选项3</el-menu-item>-->
              <!--            </el-menu-item-group>-->
              <!--            <el-submenu index="2-4">-->
              <!--              <template slot="title">选项4</template>-->
              <!--              <el-menu-item index="2-4-1">选项4-1</el-menu-item>-->
              <!--            </el-submenu>-->
                        </el-submenu>
                  <el-submenu index="2-3">
                          <template slot="title">Django</template>
              <!--            <el-menu-item-group>-->
              <!--              <template slot="title">分组一</template>-->
                            <el-menu-item index="2-3-1" @click="Page('showSeven')">基本原理</el-menu-item>
<!--                            <el-menu-item index="2-3-2" @click="Page('showEight')">项目操作</el-menu-item>-->
              <!--            </el-menu-item-group>-->
              <!--            <el-menu-item-group title="分组2">-->
              <!--              <el-menu-item index="3-3">选项3</el-menu-item>-->
              <!--            </el-menu-item-group>-->
              <!--            <el-submenu index="3-4">-->
              <!--              <template slot="title">选项4</template>-->
              <!--              <el-menu-item index="3-4-1">选项4-1</el-menu-item>-->
              <!--            </el-submenu>-->
                        </el-submenu>
              <!--            <el-menu-item-group>-->
              <!--              <template slot="title">分组一</template>-->
<!--              <el-menu-item index="2-1" @click="Page('showFive')">概念流程了解</el-menu-item>-->
<!--              <el-menu-item index="2-2" @click="Page('showSix')">实践操作二</el-menu-item>-->
              <!--            </el-menu-item-group>-->
              <!--            <el-menu-item-group title="分组2">-->
              <!--              <el-menu-item index="2-3">选项3</el-menu-item>-->
              <!--            </el-menu-item-group>-->
              <!--            <el-submenu index="2-4">-->
              <!--              <template slot="title">选项4</template>-->
              <!--              <el-menu-item index="2-4-1">选项4-1</el-menu-item>-->
              <!--            </el-submenu>-->
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-edit"></i>课程实践</template>
              <!--            <el-menu-item-group>-->
              <!--              <template slot="title">分组一</template>-->
              <el-menu-item index="3-1" @click="Page('showFour')">步骤一</el-menu-item>
              <el-menu-item index="3-1" @click="Page('showSix')">步骤二</el-menu-item>
              <el-menu-item index="3-2" @click="Page('showEight')">步骤三</el-menu-item>
              <!--            </el-menu-item-group>-->
              <!--            <el-menu-item-group title="分组2">-->
              <!--              <el-menu-item index="3-3">选项3</el-menu-item>-->
              <!--            </el-menu-item-group>-->
              <!--            <el-submenu index="3-4">-->
              <!--              <template slot="title">选项4</template>-->
              <!--              <el-menu-item index="3-4-1">选项4-1</el-menu-item>-->
              <!--            </el-submenu>-->
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-picture"></i>课程成果</template>
              <!--            <el-menu-item-group>-->
              <!--              <template slot="title">分组一</template>-->
              <el-menu-item index="4-1" @click="Page('showNine')">成果展示</el-menu-item>
<!--              <el-menu-item index="4-2" @click="Page('showEight')">实践步骤三</el-menu-item>-->
              <!--            </el-menu-item-group>-->
              <!--            <el-menu-item-group title="分组2">-->
              <!--              <el-menu-item index="3-3">选项3</el-menu-item>-->
              <!--            </el-menu-item-group>-->
              <!--            <el-submenu index="3-4">-->
              <!--              <template slot="title">选项4</template>-->
              <!--              <el-menu-item index="3-4-1">选项4-1</el-menu-item>-->
              <!--            </el-submenu>-->
            </el-submenu>
          </el-menu>
        </el-aside>
<!--        <el-aside width="200px">-->
<!--          <el-menu>-->
<!--            <el-submenu index="1">-->
<!--          <template slot="title"><i class="el-icon-message"></i>HomeAssistant</template>-->
<!--&lt;!&ndash;          <el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;            <template slot="title">HomeAssistant</template>&ndash;&gt;-->
<!--            <el-menu-item index="1-1" @click="Page('showOne')">概念介绍</el-menu-item>-->
<!--            <el-menu-item index="1-2" @click="Page('showTwo')">体系框架</el-menu-item>-->
<!--&lt;!&ndash;          </el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-menu-item-group title="分组2">&ndash;&gt;-->
<!--            <el-menu-item index="1-3" @click="Page('showThree')" v-model="list.showThree">连接哪些？</el-menu-item>-->
<!--&lt;!&ndash;          </el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;          <el-submenu index="1-4">&ndash;&gt;-->
<!--&lt;!&ndash;            <template slot="title">安装配置</template>&ndash;&gt;-->
<!--            <el-menu-item index="1-4" @click="Page('showFour')" v-model="list.showFour">实践操作一</el-menu-item>-->
<!--&lt;!&ndash;            <el-menu-item index="1-4-1">选项4-1</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;          </el-submenu>&ndash;&gt;-->
<!--        </el-submenu>-->
<!--          <el-submenu index="2">-->
<!--            <template slot="title"><i class="el-icon-menu"></i>Scrapy</template>-->
<!--&lt;!&ndash;            <el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;              <template slot="title">分组一</template>&ndash;&gt;-->
<!--              <el-menu-item index="2-1" @click="Page('showFive')">概念流程了解</el-menu-item>-->
<!--              <el-menu-item index="2-2" @click="Page('showSix')">实践操作二</el-menu-item>-->
<!--&lt;!&ndash;            </el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-menu-item-group title="分组2">&ndash;&gt;-->
<!--&lt;!&ndash;              <el-menu-item index="2-3">选项3</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-submenu index="2-4">&ndash;&gt;-->
<!--&lt;!&ndash;              <template slot="title">选项4</template>&ndash;&gt;-->
<!--&lt;!&ndash;              <el-menu-item index="2-4-1">选项4-1</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-submenu>&ndash;&gt;-->
<!--          </el-submenu>-->
<!--          <el-submenu index="3">-->
<!--            <template slot="title"><i class="el-icon-setting"></i>Django</template>-->
<!--&lt;!&ndash;            <el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;              <template slot="title">分组一</template>&ndash;&gt;-->
<!--              <el-menu-item index="3-1" @click="Page('showSeven')">基本原理</el-menu-item>-->
<!--              <el-menu-item index="3-2" @click="Page('showEight')">实践步骤三</el-menu-item>-->
<!--&lt;!&ndash;            </el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-menu-item-group title="分组2">&ndash;&gt;-->
<!--&lt;!&ndash;              <el-menu-item index="3-3">选项3</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-submenu index="3-4">&ndash;&gt;-->
<!--&lt;!&ndash;              <template slot="title">选项4</template>&ndash;&gt;-->
<!--&lt;!&ndash;              <el-menu-item index="3-4-1">选项4-1</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-submenu>&ndash;&gt;-->
<!--          </el-submenu>-->
<!--          </el-menu>-->
<!--        </el-aside>-->
        <el-container>
          <el-main>
            <div v-show="list.showOne_one">
              <h4>课程名称</h4><p>python数据科学与人工智能</p>
              <h4>课程目标</h4><p>主要让学生了解人工智能的现状以及主要的研究方向，利用掌握的python语言，实现实践项目，体会人工智能的魅力。</p>
              <h4>课程内容</h4><p>讲解智能家居项目所需的知识介绍以及练习，以完成项目为目标，打通整个项目流程，配置摄像头视频流至HA、并进行实时CNN人脸识别然后通过微信推送至终端，并发出警告，能做到及时防护，实现一套完整的智能家居人工智能系统。</p>
              <h4>课程大纲</h4><p>第一阶段 人工智能概况</p>
              <p>第二阶段 Python语言和应用开发</p><p></p>
              <p>第三阶段 开源智能家居系统HomeAssistant</p>
              <p>第四阶段 Linux系统</p>
              <p>第五阶段 Scrapy爬虫框架</p>
              <p>第六阶段 配置摄像头视频流至HA、并使用人脸识别进行家庭成员及陌生人的识别和短信发送提醒</p>
              <el-button @click="oneOneNextPage" class="Page_next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
            <div v-show="list.showOne_two">
              <h4>项目名称</h4>
              <p>Python智能家居</p>
              <h4>项目设计图</h4>
              <p><img src="../../src/assets/img/p9.png"></p>
              <h4>项目知识点</h4>
              <p>HomeAssistant开源智能家居系统</p>
              <p>Scrapy爬虫框架</p>
              <p>Django报警处理框架</p>
              <h4>项目环境</h4>
              <p>软件：Pycharm、HomeAssistant、Xshell</p>
              <p>硬件：多功能网关、人体传感器、门窗传感器、博联黑豆等</p>
<!--              <p></p>-->
              <h4>项目操作</h4>
              <img src="../../src/assets/img/p13.jpg" class="onePage_img">
<!--              <img src="../../src/assets/img/p11.jpg" class="onePage_img">-->
              <el-button @click="oneTwoNextPage" class="Page_next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
            <div v-show="list.showOne">
              <p>智慧家居系统是利用开源的智慧家居平台Hass将python基础框架django与python爬虫相互联系起来，组合而成的一套智慧家居系统。智慧家居系统不仅可以做到实时监控，安全警报，远程操控，定时启动与关闭等等功能，还可以与数据分析将结合，展示出一周用电图，晴阴分析表等相关走势图，使用户体验更加友好。</p>
              <p>智慧家居系统功能十分强大，可以分为三个大部分来分别解释其功能。</p>
              <p>第一部分是家居平台hass的搭建与配置</p>
              <p>智慧家居平台最简单的方法是利用hass.io,利用树莓派和其他设备变成最终的家庭自动化中心。</p>
              <p>所需硬件：
                树莓派，可以联网的智慧家居（小米网关、人体感应器、智能灯......），微型SD卡，SD卡读卡器
              </p>
              <div>所需软件：
                <p class="onePageP">1.下载Hass.io 镜像到你的设备中</p>
                <p class="onePageP">2.下载balenaEtcher将hass镜像烧录到你的SD卡中</p>
              </div>
              <p>从一个小白用户开始，到成为一个随心所欲将身边的空间改造成智慧空间的高手——我们准备了由浅入深的大量中文文档。</p>
              <p>文档有些内容借鉴了英文网站的内容，但更多的内容是我们在实践和源码阅读基础上，重新编写、整理出来的。</p>
              <p>即使英语不成为问题，我们相信这儿的文档结构更合理、表达更清晰；特别是针对国内软硬件和网络环境，我们加强了相关陈述、提示了一些小窍门……</p>
              <img src="../../src/assets/img/p4.png" class="onePage_img">
              <h3>HomeAssistant是什么？</h3>
              <p>1、HomeAssistant是构建智慧空间的神器。
                基于HomeAssistant，可以方便地连接各种外部设备（智能设备、摄像头、邮件、短消息、云服务等，成熟的可连接组件有近千种），手动或按照自己的需求自动化地联动这些外部设备，构建随心所欲的智慧空间。
              </p>
              <p>2、HomeAssistant是开源软件。
                就像LINUX一样，HomeAssistant是开源的：它不属于任何商业公司，用户可以无偿使用。</p>
              <p>
                3、HomeAssitant连接丰富的外部世界。
                HomeAssistant能识别和直接连接的外部设备有将近千项。
                其中有各种商业化的智能产品（如小米系列产品、Philips智能灯系列、亚马逊的音响、苹果的Siri、Google Assistant、博联的产品、特斯拉汽车等）、有互联网上的各种实时信息（股票、汇率、交通、天气等）、有开源或开放的各种智能软件（人脸识别、车牌识别、文字识别、文字转语音、语音转文字等）、有各种联动机制（短信、Email、IFTTT等）……
                简单的安装与配置（不需要编程开发），就可以连接您感兴趣的东西——将这个零碎多样的世界，纳入到您所希望的统一自动规则控制或联动中。

              </p>
              <p>
               4、 HomeAssistant基于本地智能引擎
                HomeAssitant的核心逻辑与自动化（大脑），运行在本地环境中。
                HomeAssistant连接的外部设备既可以是本地的，也可以是在INTERNET上的；您也可以根据自己的意愿开放大脑的控制给INTERNET——这样的架构设计不同于很多商业化产品将控制逻辑放在云端的方式——安全、可靠、响应速度快、无需担心隐私泄露！
              </p>
              <el-button @click="nextPage" class="Page_next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
            <div v-show="list.showTwo">
              <h2>HomeAssistant系统体系介绍</h2>
              <img src="../../src/assets/img/p5.png" class="twoPage_img">
              <h3>hass是HomeAssistant运行的程序实例（IT专业人士称为进程）</h3>
              <p>hass由两部分的逻辑组成，内核（core）和组件（component）。如果将hass比作人体的神经系统，那么内核就是中枢神经系统（大脑），组件就是周围神经系统。</p>
              <p>•	hass内核的基础工作机制是简单的，理解了状态、事件、服务三个概念，就理解了内核；其简单性类似于大脑的基础工作机制，仅是神经元的相互作用而已。</p>
              <p>•	hass内核并不与外部世界直接互动，而是通过组件连接外部世界；类似于大脑并不直接与感觉器官、运动器官连接，而是通过周围神经系统进行连接。
                比如，light.hue组件负责与飞利浦HUE智能灯的互动（感知与设置其当前状态）。
                比如，camera.mjpeg组件负责获得摄像头的标准MJPEG视频流。
                比如，sensor.yr组件负责与yr.no云服务通讯，获得天气信息。
                比如，http组件负责对外提供的http协议服务。
                比如，frontend组件，在http组件的基础上，负责与浏览器的交互。
                比如，ifttt组件，负责与INTERNET上另一个大脑（IFTTT）的通讯与互动。
              </p>
              <p>•	组件与组件之间会有相互的交互，但一般会通过hass内核中的状态、事件、服务机制来进行；类似于眼睛与手不会直接相互作用，但都连接到大脑，由大脑协调它们的相互作用。</p>
              <p>•	HomeAssistant中有一些组件并不与外部世界连接，而仅是获取内部的信息状态，然后运行逻辑规则；有点类似于周围神经系统中的本体感觉神经，仅仅用于获得自身肌肉与关节的状态。
                比如，automation组件，在hass内核信息基础上，运行自动化规则逻辑。
              </p>
              <p>•	HomeAssistant中有近千种不同的组件——这是其能与丰富的物联世界协同交互的基础——并且数量在快速的增长。</p>
              <h3>hass有一个配置文件configuration.yaml</h3>
              <p>配置文件决定hass加载哪些组件，以及这些组件该如何运行——与神经系统的构建受基因控制类似。</p>
              <p>•	比如，camera.mjpeg组件的配置信息包含应该连接哪个地址的摄像头抓取视频流。</p>
              <p>•	比如，sensor.yr组件的配置信息包含应该获取哪个地方的什么时间的天气预报。</p>
              <p>•	比如，http组件的配置信息包含对外开放的端口号、访问密码等信息。</p>
              <p>•	比如，automation组件的配置信息包含如何联动的逻辑规则。</p>
              <h3>hass基于Python环境运行</h3>
              <p>如果说hass是神经系统，那么操作系统就像基础生命系统，Python环境就像血液循环系统——hass运行在操作系统之上，Python环境为其提供必要基础的支持。</p>
              <p>作为一个HomeAssistant的使用者，您并不需要掌握python编程语言，只要安装它的环境就可以了。</p>
              <h3>还有一些周边系统</h3>
              <p>上面介绍的hass（内核和组件）、hass配置、python环境架构了一个完整的HomeAssistant运行体系。除此之外，还有一些周边系统——对于HomeAssistant来说，它们并不是必须的，仅从某个侧面帮助HomeAssitant的安装、运行、或者让配置更方便——就像眼镜、助听器，或者医院、车辆、马路，有了这些东西，人类在某些方面会生活更好。
                例举一些常用的：</p>
              <p>•	Hass.io---
                Hass.io主要应用于树莓派上。不要认为hass.io与HomeAssistant的输入输出有关系，Hass.io帮助你在你的设备上管理一些应用（称为Add-ons），包括安装、升级。 hass.io中支持add-ons包括Duck_DNS（一个动态IP域名解析服务）、Let’s Encrypt（自动管理你的ssl数字证书）、Mosquitto MQTT broker（一个MQTT代理服务实现）、SSH_Server、Samba（共享文件夹服务）、DHCP_Server、Snips.ai（一个本地运行的语音识别应用）、等等。</p>
              <p>•	Hassbian---
                Hassbian是一个在树莓派上定制的操作系统，此操作系统专门用于安装HA系统。Hassbian并不像Hass.IO那样提供升级管理服务。</p>
              <p>•	AppDaemon---
                AppDaemon基于HomeAssistant的API，为用户提供更好的与HomeAssistant互动的python环境，一般用于编写自动化规则程序。HomeAssistant自身带的自动化组件非常简洁，在很多情况下工作良好；然而，有一些更复杂的自动化，HomeAssistant的自动化组件比较难应付，于是就产生了AppDaemon。</p>
              <p> •	HADashboard---
                HaDashboard是一个模块化的、可换肤的HomeAssistant前端仪表面板，可用于大屏幕显示。HaDashboard是基于AppDaemon的（必须安装AppDaemon才能安装HaDashboard）。</p>
              <p>•	Jupyter Notebook---
                提供基于浏览器的文件管理、远程终端、以及python的开发调试界面——如果您将HomeAssistant安装于Linux（包括树莓派）之上，可以用它方便管理。</p>
              <p>•	DuckDNS---
                一个免费的动态域名服务。</p>
              <p>•	……</p>
              <el-button @click="twoNextPage" class="Page_next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
            <div v-show="list.showThree">
              <h2>HomeAssistant能连接哪些东西</h2>
              <p>HomeAssistant是一个运行智能规则的大脑，它可以与丰富的外部设备联动——获得信息、发送指令。
                那么，哪些东西可以直接连接到这个大脑上呢？
              </p>
              <p>近千项的外部设备，无论怎么罗列，对于新手来说可能都比较枯燥。在这边，我们仅举一些例子：</p>
              <p>•	<i class="iconfont icon_coursebizhonghuishuai"></i>实时汇率行情——获得当前实时的汇率行情...
                类似的，还有股票行情、电子货币行情、交通拥堵情况、天气预报、空气质量预报……</p>
              <p>•	<i class="iconfont icon_courseshexiangtou"></i>Android手机摄像头——获得摄像头的视频流...
                类似的，所有支持标准协议的硬件摄像头都可以接入。</p>
              <p>•	<i class="iconfont icon_courserenlianshibie"></i>人脸识别——基于视频流，识别出其中的人脸是谁...
                类似的，可以基于视频流进行车牌识别、文字识别、动作探测、噪音监控……</p>
<!--              <p>•	百度文字转语音服务——通过百度免费的TTS服务，将文字（比如天气预报、股票行情等文字信息）转换成语音（MP3）...-->
<!--                类似的，也可以使用voiceRSS、Google等的服务。</p>-->
<!--              <p>•	KODI媒体播放器——将语音信号通过硬件播放出来...-->
<!--                类似的，可以用VLC、Gstreamer等软件，也可以直接连接外部的各种蓝牙音箱。</p>-->
<!--              <p>•	亚马逊ECHO——与亚马逊ECHO进行联动...-->
<!--                类似的，可以与各种外部的智能引擎联动，可以与苹果手机（Siri）进行联动，可以与GoogleAssistant联动，可以与IFTTT联动。</p>-->
<!--              <p>•	小米温湿度传感器——获得环境的温湿度信息...-->
<!--                类似的，小米系列的各种传感器门窗开合、人体感应、小米魔方等都可以接入。</p>-->
<!--              <p> •	Philips智能灯——控制Philips智能灯的开关、颜色、亮度...-->
<!--                类似的，小米智能灯、智能开关、宜家智能灯也可以被控制，还可以通过红外转发控制传统家电。</p>-->
<!--              <p> •	发送邮件——可以发送邮件通知...-->
<!--                类似的，也可以发送手机短消息。</p>-->
<!--              <p> •	Arduino——DIY的乐园...-->
<!--                类似的，可以自己写一些脚本、做一些串口设备，都可以联动起来。</p>-->
              <p>•	……</p>
              <p>我们把可以连接到HomeAssistant大脑上的外部设备、程序、云服务统称为积木元素——就像搭乐高积木一样，HomeAssistant像胶水一样把不同积木粘合在一起，构建起智慧空间。</p>
              <p>更多的关于积木元素的内容与介绍，可以参考积木元素板块的内容——这其中是一些常用的，我们经过测试可用的积木；也可以参考HomeAssistant英文网站的组件库——其中罗列了所有的可连接设备，也包含各种软件功能组件。</p>
              <p>让我们来看一个简单的智慧空间的例子：</p>
              <p>“当感应到您要出门的时候，自动查询天气预报，发现要下雨，语音播报提醒主人要带伞。”
                这其中需要的积木元素：</p>
              <p>•	<i class="iconfont icon_coursechuanganqi"></i>人体感应传感器（发现您在门口）</p>
              <p>•	<i class="iconfont icon_coursedibudaohanglan-"></i>位置跟踪（确认您要出门而不是进门）</p>
              <p>•	<i class="iconfont icon_coursetianqiyubao"></i>天气预报信息</p>
              <p>•	<i class="iconfont icon_courseyuyin"></i>文字转语音服务</p>
              <p>•	<i class="iconfont icon_coursebofangqi"></i>媒体播放器</p>
              <p> 所有这些积木元素，都可以在HomeAssitant中找到。</p>
              <h5>您需要的，仅仅是需求与创意，将它们联动起来！</h5>
              <el-button @click="threeNextPage" class="Page_next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
            <div v-show="list.showFour">
              <h2>HomeAssistant的安装配置</h2>
              <p>1.	下载hass镜像与etcher镜像</p>
              <p>2.	通过etcher将hass镜像刻印到sd卡中</p>
              <p>3.	配置镜像中的ip地址，使其能够联网</p>
              <p>4.	将sd卡插入到树莓派中，启动树莓派</p>
              <p> 5.	树莓派自动安装相应依赖，等待安装完成后访问界面，结束后访问对应的ip地址可以看到下面的地址证明安装完成</p>
              <img src="../../src/assets/img/p6.png" class="onePage_img">
              <p>6.	按照相应的规则将智能家居信息配置到hass中，重启hass，直到首页显示出相应的硬件设备</p>
              <el-button @click="fourNextPage" class="Page_next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
            <div v-show="list.showFive">
              <h2>Scrapy框架介绍</h2>
              <p>Scrapy是一个为了爬取网站数据，提取结构性数据而编写的应用框架。 其可以应用在数据挖掘，信息处理或存储历史数据等一系列的程序中。 其最初是为了页面抓取 (更确切来说, 网络抓取 )所设计的， 也可以应用在获取API所返回的数据(例如 Amazon Associates Web Services ) 或者通用的网络爬虫。Scrapy用途广泛，可以用于数据挖掘、监测和自动化测试。</p>
              <p>Scrapy 使用了 Twisted异步网络库来处理网络通讯。整体架构大致如下</p>
              <img src="../../src/assets/img/p7.png" class="twoPage_img">
              <p>(1) Scrapy Engine：负责Spider，Itempipline，Downloader，Scheduler中的通讯，信号，数据传递等。</p>
              <p>⑵ Scheduler：负责接收引擎发送过来的Request 请求，按照一定的顺序整理，入队再还给引擎。</p>
              <p>⑶ Downloader：下载Scrapy Engine发送的所有的request请求并将获取到的Response还给Scrapy Engine，由Spiders来处理。</p>
              <p>⑷ Spiders：负责处理所有的Response请求并分析数据，提取Item需要的数据，将后继的URL交给引擎并再次进入Scheduler。</p>
              <p>⑸ ItemPipeline：负责处理Spider获取到的Item，进行后期处理。</p>
              <h3>Scrapy运行流程</h3>
              <p>⑴ 需要明确一个目标网站，第一个将要被处理 的URL将会由Spider发送给引擎（Scrapy Engine）。</p>
              <p>⑵ 引擎（Scrapy Engine）将会通知调度器（Scheduler）将一些request请求入队。调度器（Scheduler）处理好之后再还给引擎（Scrapy Engine）。</p>
              <p>⑶ 引擎（Scrapy Engine）将通知下载器（Downloader）下载request请求中需要的信息。如果下载失败，引擎（Scrapy Engine）将会通知调度器记录，等全部完成后再次下载。</p>
              <p> ⑷ 下载完的内容将返回给Spider由用户自定义处理。此时，Spider会获取以下信息：一是需要跟进的URL，二是获取到的Item数据。</p>
              <p>(5) 引擎（Scrapy Engine）通知管道（Item Pipeline）处理获取到的Item数据。同时还要通知调度器（Scheduler）跟进URL。</p>
              <p>最后循环工作，直到获取完所有需要的数据结束工作。</p>
              <el-button @click="fiveNextPage" class="Page_next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
            <div v-show="list.showSix">
              <h2>Scrapy操作流程</h2>
              <img src="../../src/assets/img/p8.png" class="onePage_img">
              <p>1、获取hass中配置的硬件设备状态的日志网址以及头信息</p>
              <p>2、抓取整个网页信息</p>
              <p>3、提取设备状态日志信息</p>
              <p>4、对日志信息进行分析及处理</p>
              <el-button @click="sixNextPage" class="Page_next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
            <div v-show="list.showSeven">
              <h2>Django基本原理及介绍</h2>
              <p>Django是一个开放源代码的Web应用框架，由Python写成。它最初是被开发来用于管理劳伦斯出版集团旗下的一些以新闻内容为主的网站的，即是CMS（内容管理系统）软件。并于2005年7月在BSD许可证下发布。这套框架是以比利时的吉普赛爵士吉他手Django Reinhardt来命名的。</p>
              <p>Django想要理解，首先要明白的就是Django的大致组成，它大致由四部分组成，也就是提到的MTV模型：</p>
              <p class="onePageP">Model（模型）：负责业务对象与数据库的对象（orm）</p>
              <p class="onePageP">Template（模板）：负责把数据展示给用户（前端的东西）</p>
              <p class="onePageP">View（视图）：负责业务逻辑，并在适当的时候会调用Model和Template</p>
              <p class="onePageP">URL分发器：通过前台请求的url，来分配调到相应的函数操作，类似于网络中的路由表，控制网络的下一跳的地址。</p>
              <p>了解了组成部分，我们需要了解Django请求的生命周期：</p>
              <p class="onePageP">1、浏览器输入url发送访问请求，首先到达django的URL控制器（urls.py）。</p>
              <p class="onePageP">2、URL控制器通过URL地址分配跳转到相应的View视图（views.py）中的对应函数。</p>
              <p class="onePageP">3、View视图如果需要访问数据库操作数据，需要实例化Model模型中的类（models.py），然后通过对类的操作就是对数据库的操作。</p>
              <p class="onePageP">4、 如果未创建数据库，Model模型里面是以面向对象的形式将每张数据表以类的方式创建出来，然后通过makemigrations就可以同步到数据库来进行表的创建和表关系的建立；如果已创建数据库，并且已经同步数据库，那么实例化类的对象，就可以操作数据库了。</p>
              <p class="onePageP">5、返回数据库请求的数据。</p>
              <p class="onePageP">6、上一步请求的数据实在View视图实例化类的地方接收数据。</p>
              <p class="onePageP">7、在View模型中，通过对数据的操作或者其他的相应操作、计算等，将数据参数传递到Template模板。</p>
              <p class="onePageP">8、将View模板中的数据接收，通过将其嵌入到前端页面的代码中，实现漂亮的可视化展示。</p>
              <el-button @click="sevenNextPage" class="Page_next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
            <div v-show="list.showEight">
              <h2>利用django来实现自动报警</h2>
              <h4>一、利用人体感应器来实现防盗检测</h4>
              <p>1.	搭建一个django框架</p>
              <p>2.	从数据库中读取第二部爬取的日志信息</p>
              <p>3.	找到人体感应器的日志信息</p>
              <p>4.	通过用户提前定义好的时间规则去检验日志信息，如果在房屋内没有人的情况下人体感应器检测都人物经过，此时会触发警告条件</p>
              <p> 5.	Django获取到警告条件，调用短信接口，向指定用户发送警告短信</p>
              <h4>二、利用烟雾探测器来实现火灾检测</h4>
              <p>1.	搭建一个django框架</p>
              <p>2.	从数据库中读取第二部爬取的日志信息</p>
              <p>3.	找到烟雾探测器的日志信息</p>
              <p> 4.	通过用户提前定义好的匹配规则去检验日志信息，如烟雾探测，感温探测，遮挡探测等</p>
              <p>5.	Django获取到警告条件，调用短信接口，向指定用户发送警告短信</p>
              <el-button @click="eightNextPage" class="Page_next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </div>
            <div v-show="list.showNine">
              <img src="../../src/assets/img/p12.jpg" class="onePage_img">
              <img src="../../src/assets/img/p10.jpg" class="onePage_img">
              <img src="../../src/assets/img/p11.jpg" class="onePage_img">
<!--              <el-button @click="nineNextPage" class="Page_next">下一页<i class="el-icon-arrow-right el-icon&#45;&#45;right"></i></el-button>-->
            </div>
<!--            <div v-show="showTen">0-->
<!--              <el-button @click="tenNextPage" class="Page_next">下一页<i class="el-icon-arrow-right el-icon&#45;&#45;right"></i></el-button>-->
<!--            </div>-->
          </el-main>
          <el-footer>Python</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:{
        showOne_one: true,
        showOne_two: false,
        showOne: false,
        showTwo: false,
        showThree: false,
        showFour: false,
        showFive: false,
        showSix: false,
        showSeven: false,
        showEight: false,
        showNine: false,
        showTen: false,
        flag: ''
      }
    }
  },
  mounted () {
    this.Page('showOne_one')
  },
  methods: {
    goToCourse () {
      this.$router.push('/content')
    },
    Page (i) {
      for(var key in this.list){
        this.list[key] = false
        console.log(key,this.list[key])
      }
      // this.list.flag = i
      this.list[i] = true
      console.log(i, this.list[i])
      // console.log(111111111)
      // console.log(typeof this.list[i])
      // delete(this.list[i])
      // for(var key in this.list){
      //   this.list[key] = false
      //   console.log(key,this.list[key])
      // }
      // console.log(this.list)
        // this.list[j] = false
      // this.list.showOne = true
    },
    // Page () {
    //   this.list.showTwo = true
    // },
    oneOneNextPage(){
      this.list.showOne_one = false
      this.list.showOne_two = true
    },
    oneTwoNextPage() {
      this.list.showOne_two = false
      this.list.showOne = true
    },
    nextPage () {
      this.list.showOne = false
      this.list.showTwo = true
    },
    twoNextPage () {
      this.list.showTwo = false
      this.list.showThree = true
    },
    threeNextPage () {
      this.list.showThree = false
      this.list.showFive = true
    },
    fourNextPage () {
      this.list.showFour = false
      this.list.showSix = true
    },
    fiveNextPage () {
      this.list.showFive = false
      this.list.showSeven = true
    },
    sixNextPage () {
      this.list.showSix = false
      this.list.showEight = true
    },
    sevenNextPage () {
      this.list.showSeven = false
      this.list.showFour = true
    },
    eightNextPage () {
      this.list.showEight = false
      this.list.showNine = true
    },
    // nineNextPage () {
    //   this.list.showNine = false
    //   this.list.showTen = true
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
p{
  text-indent: 2em;
  /*margin-top: 1px;*/
}
.onePageP{
  text-indent: 4em;
}
.onePage_img{
  width: 80%;
  height: 450px;
  margin-left: 50%;
  transform: translate(-50%);
}
  .Page_next{
    margin-left: 90%;
    transform: translate(-10%);
  }
  .twoPage_img{
    /*width: 80%;*/
    /*height: 450px;*/
    margin-left: 50%;
    transform: translate(-50%);
  }
  .iconfont{
    color: #42b983;
    font-size: 24px;
    margin: 0 4px;
  }
  /*.el-aside {*/
  /*  background-color: #D3DCE6;*/
  /*  color: #333;*/
  /*  text-align: center;*/
  /*  line-height: 200px;*/
  /*}*/

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
  }

  /*body > .el-container {*/
  /*  margin-bottom: 40px;*/
  /*}*/

  /*.el-container:nth-child(5) .el-aside,*/
  /*.el-container:nth-child(6) .el-aside {*/
  /*  line-height: 260px;*/
  /*}*/

  /*.el-container:nth-child(7) .el-aside {*/
  /*  line-height: 320px;*/
  /*}*/
</style>
