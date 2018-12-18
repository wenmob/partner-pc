<template>
  <div >
    <el-form v-model="member" :inline="true" size="mini" label-width="100px">
      <el-form-item label="手机号">
        <el-input v-model="member.phoneNo" maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="member.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="会员状态">
        <el-select v-model="member.state" placeholder="请选择状态">
          <el-option label="资料未提交" value="1"></el-option>
          <el-option label="资料待审核" value="2"></el-option>
          <el-option label="资料已审核" value="3"></el-option>
          <el-option label="审核未通过" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-date-picker
          v-model="member.startTime"
          type="date"
          placeholder="注册起始"
          :picker-options="startTime"
          format="yyyy-MM-dd"
        ></el-date-picker>
        <el-date-picker
          v-model="member.endTime"
          type="date"
          placeholder="注册截止"
          format="yyyy-MM-dd"
          :picker-options="endTime"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="订单">
        <el-select v-model="member.hasOrder" placeholder="有无订单">
          <el-option label="有" value="1"></el-option>
          <el-option label="无" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-table
        :data="memberList"
        ref="multipleTableY"
        :row-key="tableRowKey"
        borderstyle="width: 100%"
        height="300"
        border
        @select="handleSelectionChangeY"
      >
        <el-table-column type="selection" :reserve-selection="true" width="55"></el-table-column>
        <el-table-column fixed prop="phoneNo" label="手机号" width="150"></el-table-column>
        <el-table-column fixed prop="name" label="姓名" width="150"></el-table-column>
        <el-table-column fixed prop="state" label="会员状态" width="100">
          <template slot-scope="scope">
            <span>{{statusText[scope.row.state-1]}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed prop="idCode" label="身份证号码" width="200"></el-table-column>
        <el-table-column fixed prop="hasOrder" label="有无订单" width="100">
          <template slot-scope="scope">
            <span>{{scope.row.hasOrder=='0'?'无':'有'}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed prop="createDate" label="注册时间" width="150">
          <template slot-scope="scope">
            <span>{{scope.row.createDate|time}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block" align="center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="member.pageCurrent"
        :page-sizes="pagination.sizes"
        :page-size="member.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
      ></el-pagination>
    </div>
    <div style="margin:20px 0 10px">
      <span>已选择{{ids.length}}个会员</span>
      <el-button type="primary" @click="show" :disabled="multipleSelect.length==0">下一步</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "member",
  props: ["member", "memberList", "pagination", "multipleSelect", "ids","showStatus"],
  data() {
    return {
      statusText: ["资料未提交", "资料待审核", "资料已审核", "审核未通过"],
      //时间范围选择限制
      startTime: {
        disabledDate: time => {
          if (this.member.endTime != "") {
            return (
              time.getTime() > Date.now() ||
              time.getTime() > this.member.endTime
            );
          } else {
            return time.getTime() > Date.now();
          }
        }
      },
      endTime: {
        disabledDate: time => {
          return (
            time.getTime() < this.member.startTime ||
            time.getTime() > Date.now()
          );
        }
      }
    };
  },
  watch: {
    memberList: {
      handler() {
        this.checked();
      },
      deep: true
    },
  },
  methods: {
    // 每页多少条
    handleSizeChange(val) {
      this.member.pageSize = val;
    },
    // 当前第几页
    handleCurrentChange(val) {
      this.member.start = val;
    },
    //tabel-key
    tableRowKey(row) {
      return row.id;
    },
    //选中
    handleSelectionChangeY(s, r) {
      if (r.selected === 0) {
        r.selected = 1;
        this.multipleSelect.push(r);
        this.$refs.multipleTableY.toggleRowSelection(r, true);
      } else {
        r.selected = 0;
        const index = this.multipleSelect.findIndex(ele => {
          return ele.id === r.id;
        });
        this.multipleSelect.splice(index, 1);
        this.$refs.multipleTableY.toggleRowSelection(r, false);
      }
    },
    //checked获取选择状态
    checked() {
      if (this.memberList.length > 0) {
        this.memberList.forEach(ele => {
          if (ele.selected === 1) {
            this.$refs.multipleTableY.toggleRowSelection(ele, true);
          } else {
            this.$refs.multipleTableY.toggleRowSelection(ele, false);
          }
        });
      }
    },
    //下一步
    show() {
      this.$emit("showNext");
    },
    //搜索会员
    search() {
      this.$emit("searchMember", this.member);
    }
  }
};
</script>