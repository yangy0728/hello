<template>
  <div class="layout">
    <div
      class="sider"
      :style="{ width: isExpand ? '220px' : '80px', transition: 'all 0.28s' }"
    >
      <div class="sider-top">
        <q-img
          :src="require(`../assets/logo.jpg`)"
          class="logo"
          v-if="isExpand"
        />

        <el-icon v-else>
          <Promotion />
        </el-icon>
      </div>
      <div class="sider-body">
        <el-scrollbar>
          <ul>
            <el-col :span="toggleSider">
              <el-menu
                background-color="black"
                text-color="white"
                :collapse="isCollapse"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon><location /> </el-icon>
                    <span>工作台</span>
                  </template>
                  <el-menu-item index="1-1">
                    <el-icon><document /></el-icon>
                    首页
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    <el-icon><document /></el-icon>
                    监控页
                  </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                  <template #title>
                    <el-icon><location /></el-icon>
                    <span>office管理</span>
                  </template>
                  <el-menu-item index="2-1">
                    <el-icon><document /></el-icon>
                    文档管理
                  </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="3">
                  <template #title>
                    <el-icon><document /></el-icon>
                    <span>敏捷开发</span>
                  </template>

                  <el-menu-item index="3-1">
                    <el-icon><document /></el-icon>
                    开发向导
                  </el-menu-item>
                  <el-menu-item index="3-2">
                    <el-icon><document /></el-icon>
                    表单配置
                  </el-menu-item>

                  <el-sub-menu index="3-3">
                    <template #title>
                      <el-icon><document /></el-icon>
                      生成配置
                    </template>
                    <el-menu-item index="3-3-1"> 字段类型 </el-menu-item>
                    <el-menu-item index="3-3-2"> Java类型 </el-menu-item>
                    <el-menu-item index="3-3-3"> 控件类型 </el-menu-item>
                  </el-sub-menu>
                  <el-sub-menu index="3-4">
                    <template #title>
                      <el-icon><document /></el-icon>
                      生成示例
                    </template>
                    <el-menu-item index="3-4-1"> 表单 </el-menu-item>
                    <el-menu-item index="3-4-2"> 主附表 </el-menu-item>
                    <el-menu-item index="3-4-3"> 树结构 </el-menu-item>
                  </el-sub-menu>
                  <el-menu-item index="3-5">
                    <el-icon><document /></el-icon>
                    图标查找
                  </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="4">
                  <template #title>
                    <el-icon><document /></el-icon>
                    <span>报表应用</span>
                  </template>
                  <el-menu-item index="4-1">
                    <el-icon><document /></el-icon>
                    图表组件
                  </el-menu-item>
                  <el-menu-item index="4-2">
                    <el-icon><document /></el-icon>
                    报表设计
                  </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="5">
                  <template #title>
                    <el-icon><document /></el-icon>
                    <span>动态表单</span>
                  </template>
                  <el-menu-item index="5-1">
                    <el-icon><document /></el-icon>
                    表单设计器
                  </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="6">
                  <template #title>
                    <el-icon><document /></el-icon>
                    <span>大屏设计</span>
                  </template>
                  <el-menu-item index="6-1">
                    <el-icon><document /></el-icon>
                    大屏管理
                  </el-menu-item>
                  <el-menu-item index="6-2">
                    <el-icon><document /></el-icon>
                    大屏分类
                  </el-menu-item>
                  <el-menu-item index="6-3">
                    <el-icon><document /></el-icon>
                    地图管理
                  </el-menu-item>
                  <el-menu-item index="6-4">
                    <el-icon><document /></el-icon>
                    组件库
                  </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="7">
                  <template #title>
                    <el-icon><document /></el-icon>
                    <span>流程应用</span>
                  </template>

                  <el-menu-item index="7-1">
                    <el-icon><document /></el-icon>
                    流程表单
                  </el-menu-item>
                  <el-menu-item index="7-2">
                    <el-icon><document /></el-icon>
                    流程监控
                  </el-menu-item>

                  <el-sub-menu index="7-3">
                    <template #title>
                      <el-icon><document /></el-icon>
                      我的事务
                    </template>
                    <el-menu-item index="7-3-1"> 待办事务 </el-menu-item>
                    <el-menu-item index="7-3-2"> 已办事务 </el-menu-item>
                    <el-menu-item index="7-3-3"> 发起流程 </el-menu-item>
                  </el-sub-menu>
                  <el-sub-menu index="7-4">
                    <template #title> 流程管理 </template>
                    <el-menu-item index="7-4-1"> 流程设计 </el-menu-item>
                    <el-menu-item index="7-4-2"> 流程表达式 </el-menu-item>
                    <el-menu-item index="7-4-3"> 常用按钮 </el-menu-item>
                  </el-sub-menu>
                  <el-menu-item index="3-5">
                    <el-icon><document /></el-icon>
                    图标查找
                  </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="8">
                  <template #title>
                    <el-icon><document /></el-icon>
                    <span>数据管理</span>
                  </template>
                  <el-menu-item index="8-1">
                    <el-icon><document /></el-icon>
                    数据源管理
                  </el-menu-item>
                  <el-menu-item index="8-2">
                    <el-icon><document /></el-icon>
                    数据集管理
                  </el-menu-item>
                  <el-menu-item index="8-3">
                    <el-icon><document /></el-icon>
                    数据库管理
                  </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="9">
                  <template #title>
                    <el-icon><document /></el-icon>
                    <span>个人中心</span>
                  </template>
                  <el-menu-item index="9-1">
                    <el-icon><document /></el-icon>
                    信箱
                  </el-menu-item>
                  <el-menu-item index="9-2">
                    <el-icon><document /></el-icon>
                    个人信息
                  </el-menu-item>
                  <el-menu-item index="9-3">
                    <el-icon><document /></el-icon>
                    我的日程
                  </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="10">
                  <template #title>
                    <el-icon><document /></el-icon>
                    <span>组织机构</span>
                  </template>
                  <el-menu-item index="10-1">
                    <el-icon><document /></el-icon>
                    机构管理
                  </el-menu-item>
                  <el-menu-item index="10-2">
                    <el-icon><document /></el-icon>
                    角色管理
                  </el-menu-item>
                  <el-menu-item index="10-3">
                    <el-icon><document /></el-icon>
                    用户管理
                  </el-menu-item>
                  <el-menu-item index="10-4">
                    <el-icon><document /></el-icon>
                    岗位管理
                  </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="11">
                  <template #title>
                    <el-icon><document /></el-icon>
                    <span>系统管理</span>
                  </template>
                  <el-menu-item index="11-1">
                    <el-icon><document /></el-icon>
                    菜单管理
                  </el-menu-item>
                  <el-menu-item index="11-2">
                    <el-icon><document /></el-icon>
                    区域管理
                  </el-menu-item>
                  <el-menu-item index="11-3">
                    <el-icon><document /></el-icon>
                    字典管理
                  </el-menu-item>
                  <el-menu-item index="11-4">
                    <el-icon><document /></el-icon>
                    系统配置
                  </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="12">
                  <template #title>
                    <el-icon><document /></el-icon>
                    <span>系统监控</span>
                  </template>
                  <el-menu-item index="12-1">
                    <el-icon><document /></el-icon>
                    日志查询
                  </el-menu-item>
                  <el-menu-item index="12-2">
                    <el-icon><document /></el-icon>
                    连接池监视
                  </el-menu-item>
                  <el-menu-item index="12-3">
                    <el-icon><document /></el-icon>
                    系统监控管理
                  </el-menu-item>
                  <el-menu-item index="12-4">
                    <el-icon><document /></el-icon>
                    定时任务
                  </el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="13">
                  <template #title>
                    <el-icon><document /></el-icon>
                    <span>常用工具</span>
                  </template>
                  <el-menu-item index="13-1">
                    <el-icon><document /></el-icon>
                    接口管理
                  </el-menu-item>
                  <el-menu-item index="13-2">
                    <el-icon><document /></el-icon>
                    外部邮件
                  </el-menu-item>
                  <el-menu-item index="13-3">
                    <el-icon><document /></el-icon>
                    二维码测试
                  </el-menu-item>
                  <el-menu-item index="13-4">
                    <el-icon><document /></el-icon>
                    百度地图
                  </el-menu-item>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </ul>
        </el-scrollbar>
      </div>
    </div>
    <div class="main">
      <div class="main-header">
        <div class="main-header-top">
          <el-button
            type="primary"
            @click="toggleSider"
            :icon="isExpand ? Expand : Fold"
            color="white"
            style="font-size: 1.3em"
            text
            v-model="isCollapse"
          />
          <div class="ri row">
            <div class="demo-color-block">
              <el-color-picker v-model="color1" />
            </div>
            <van-image
              :src="require(`../assets/message.jpg`)"
              height="45px"
            ></van-image>
            <div class="ehyimage row">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <div class="ehy">ehyui</div>
            </div>
            <div class="s">┇</div>
          </div>
        </div>
        <div class="main-header-tags-wrapper">
          <el-scrollbar>
            <div class="main-header-tags">
              <div class="tag-item">1</div>
              <div class="tag-item">2</div>
              <div class="tag-item">3</div>
              <div class="tag-item">4</div>
              <div class="tag-item">5</div>
              <div class="tag-item">6</div>
              <div class="tag-item">7</div>
              <div class="tag-item">8</div>
              <div class="tag-item">9</div>
            </div>
          </el-scrollbar>
        </div>
      </div>
      <div class="main-body">
        <div class="main-content-wrapper">
          <div class="content">
            <div></div>
            <el-row :gutter="16">
              <el-col :span="6">
                <el-card class="statistic-card">
                  <el-statistic :value="98500">
                    <template #title>
                      <div
                        style="display: inline-flex; align-items: center"
                        class="iconte"
                      >
                        销售总额
                        <el-tooltip
                          effect="dark"
                          content="Number of users who logged into the product in one day"
                          placement="top"
                        >
                          <el-icon style="margin-left: 4px" :size="12">
                            <Warning />
                          </el-icon>
                        </el-tooltip>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="statistic-footer">
                    <div class="footer-item">
                      <div class="row">
                        <span>周同比</span>
                        <span class="red">
                          12%
                          <el-icon>
                            <CaretTop />
                          </el-icon>
                        </span>
                      </div>
                      <div class="footer-item">
                        <span>日同比</span>
                        <span class="green">
                          12%
                          <el-icon>
                            <CaretBottom />
                          </el-icon>
                        </span>
                      </div>
                    </div>
                    <el-divider />
                    <spand class="xhe">日销售额为￥290</spand>
                  </div>
                </el-card>
              </el-col>
              <!-- s -->
              <el-col :span="6">
                <el-card class="statistic-card">
                  <el-statistic :value="98500">
                    <template #title>
                      <div
                        style="display: inline-flex; align-items: center"
                        class="iconte"
                      >
                        销售总额
                        <el-tooltip
                          effect="dark"
                          content="Number of users who logged into the product in one day"
                          placement="top"
                        >
                          <el-icon style="margin-left: 4px" :size="12">
                            <Warning />
                          </el-icon>
                        </el-tooltip>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="statistic-footer">
                    <div class="footer-item">
                      <div class="row">
                        <span>周同比</span>
                        <span class="red">
                          12%
                          <el-icon>
                            <CaretTop />
                          </el-icon>
                        </span>
                      </div>
                      <div class="footer-item">
                        <span>日同比</span>
                        <span class="green">
                          12%
                          <el-icon>
                            <CaretBottom />
                          </el-icon>
                        </span>
                      </div>
                    </div>
                    <el-divider />
                    <spand class="xhe">日销售额为￥290</spand>
                  </div>
                </el-card>
              </el-col>
              <!-- s -->
              <el-col :span="6">
                <el-card class="statistic-card">
                  <el-statistic :value="98500">
                    <template #title>
                      <div
                        style="display: inline-flex; align-items: center"
                        class="iconte"
                      >
                        销售总额
                        <el-tooltip
                          effect="dark"
                          content="Number of users who logged into the product in one day"
                          placement="top"
                        >
                          <el-icon style="margin-left: 4px" :size="12">
                            <Warning />
                          </el-icon>
                        </el-tooltip>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="statistic-footer">
                    <div class="footer-item">
                      <div class="row">
                        <span>周同比</span>
                        <span class="red">
                          12%
                          <el-icon>
                            <CaretTop />
                          </el-icon>
                        </span>
                      </div>
                      <div class="footer-item">
                        <span>日同比</span>
                        <span class="green">
                          12%
                          <el-icon>
                            <CaretBottom />
                          </el-icon>
                        </span>
                      </div>
                    </div>
                    <el-divider />
                    <spand class="xhe">日销售额为￥290</spand>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card class="statistic-card">
                  <el-statistic :value="98500">
                    <template #title>
                      <div
                        style="display: inline-flex; align-items: center"
                        class="iconte"
                      >
                        销售总额
                        <el-tooltip
                          effect="dark"
                          content="Number of users who logged into the product in one day"
                          placement="top"
                        >
                          <el-icon style="margin-left: 4px" :size="12">
                            <Warning />
                          </el-icon>
                        </el-tooltip>
                      </div>
                    </template>
                  </el-statistic>
                  <div class="statistic-footer">
                    <!-- <spand class="xhe">日销售额为￥290</spand> -->
                    <div class="demo-progress">
                      <el-progress
                        :text-inside="true"
                        :stroke-width="26"
                        :percentage="70"
                      />
                    </div>
                    <el-divider />
                    <div></div>
                    <div class="footer-item1">
                      <div class="row">
                        <span>周同比</span>
                        <span class="red">
                          12%
                          <el-icon>
                            <CaretTop />
                          </el-icon>
                        </span>
                      </div>
                      <div class="footer-item">
                        <span>日同比</span>
                        <span class="green">
                          12%
                          <el-icon>
                            <CaretBottom />
                          </el-icon>
                        </span>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Expand, Fold, MoreFilled } from "@element-plus/icons-vue";
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from "@element-plus/icons-vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const isExpand = ref(true);
const isCollapse = ref(false);

const toggleSider = () => {
  isExpand.value = !isExpand.value;
  isCollapse.value = !isCollapse.value;
};

const color1 = ref("#409EFF");
</script>
<style lang="scss" scoped>
.xhe {
  position: absolute;
  top: 55px;
}
.el-card ::v-deep .el-card__body {
  padding: 0px;
}
.iconte {
  display: flex;
  justify-content: space-between;
  width: 210px;
}
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  padding: 20px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
  height: 184px;
  width: 274px;
}
.statistic-footer {
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 10px;
  position: relative;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.statistic-footer .footer-item1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 55px;
}

.green {
  color: var(--el-color-success);
}
.red {
  color: var(--el-color-error);
}

.ehyimage {
  margin-right: 19px;
  margin-left: 20px;
}
.ri {
  position: absolute;
  right: 20px;
  top: 5px;
}
.ehy {
  margin-left: 5px;
  margin-top: 10px;
}
.s {
  color: white;
  font-size: 20px;
  margin-top: 10px;
}
.demo-color-block {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-right: 10px;
  margin-top: 5px;
}
.logo {
  width: 300px;
}
.layout {
  display: flex;
}
* {
  box-sizing: border-box;
}
.sider {
  width: 220px;
  height: 100vh;
  background-color: #ddd;
  position: relative;

  flex-shrink: 0;

  .sider-top {
    height: 50px;
    background-color: rgb(62, 141, 246);

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
  }

  .sider-body {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: black;

    .li-item {
      height: 50px;
      margin: 10px;
      background-color: grey;
      color: #fff;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.main {
  flex: 1;
  overflow: hidden;

  position: relative;

  .main-header {
    .main-header-top {
      height: 50px;
      background-color: rgb(62, 141, 246);

      display: flex;
      align-items: center;
      padding: 0 10px;
    }

    .main-header-tags-wrapper {
      background-color: lightsalmon;
      padding: 0 10px;

      .main-header-tags {
        height: 36px;

        display: flex;
        align-items: center;

        .tag-item {
          width: 160px;
          height: 26px;
          margin-right: 10px;

          background-color: #fff;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .main-body {
    position: absolute;
    top: 86px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(211, 228, 243);

    .main-content-wrapper {
      overflow: auto;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 20px;
      background-clip: content-box;

      .content {
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: #fff;
        border-radius: 8px;

        padding: 10px 0 10px 10px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
