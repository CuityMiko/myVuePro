<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
    flex: 1;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .badgediv{
      border: 1px solid #ccc;
      width: 700px;
  }
  .loaddiv{
      width: 700px;
      height: 200px;
      border: 1px solid #ccc;
      margin: 9px;
  }
</style>

<template>
    <div>   
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark">Element-UI</div></el-col>
        </el-row>
        <p>
            <el-button type="primary" icon="search" size="small">搜索</el-button>
        </p>
        <p>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </p>
        <p>
            <el-rate
                v-model="value3"
                show-text
                :texts="texts1"
                >
            </el-rate>
        </p>
        <p>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="8000">
            </el-pagination>
        </p>
        <p>
            <el-badge :value="8.1" class="item">
                <div class="badgediv">
                    dsdassa
                </div>
            </el-badge>
        </p>
        <p>
            <div class="loaddiv" v-loading="loading" element-loading-text="玩命加载中...">
                <el-button type="primary" icon="el-icon-loading" size="small" @click="toloading">点击加载</el-button>
            </div>
            <p>
                <el-button type="success" @click="openloading">开启加载</el-button>   <el-button type="danger" @click="closeloading">关闭加载</el-button>
            </p>
        </p>
        <p>
            <el-button :plain="true" @click="openmsg">提示错误</el-button>
        </p>
    </div>
</template>

<script>
import { Loading } from 'element-ui';
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
    data() {
        return {
            checkAll: true,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,
            value3: null,
            texts1:['哈哈','呵呵','呦呦','啧啧','呸呸'],
            currentPage:1,
            loading:false
        };
    },
    methods: {
        handleCheckAllChange(event) {
            this.checkedCities = event.target.checked ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        toloading(){
            let loadingInstance = Loading.service({text:'玩命加载中...',fullscreen:false});
            setTimeout(function() {
                loadingInstance.close();
            }, 3000);
        },
        openloading(){
            this.loading=true;
        },
        closeloading(){
            this.loading=false;
        },
        openmsg(){
            // this.$message({
            //     message:'请输入搜索内容',
            //     type:'error'
            // });
            this.$message.success('成功搜索！');
        }
    }
}
</script>
