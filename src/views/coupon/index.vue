<template>
  <div class="app-container">
    <el-form v-model="coupon" :inline="true">
      <el-form-item label="名称">
        <el-input v-model="coupon.name" placeholder="卡券名称"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="coupon.type" placeholder="请选择类型">
          <el-option label="全部" value></el-option>
          <el-option label="折扣券" value="zk"></el-option>
          <el-option label="代金券" value="mj"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="微信卡券" style="display:none">
        <el-select v-model="coupon.weixin" placeholder="请选择类型">
          <el-option label="折扣券" value="1"></el-option>
          <el-option label="代金券" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="门店">
        <el-cascader :options="company.arr" :props="{value: 'companyId', label: 'label'}" v-model="selectedOptionYs" filterable :show-all-levels="false" clearable change-on-select @change="changeCompany">
        </el-cascader>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="coupon.status" placeholder="请选择状态">
          <el-option label="草稿" value="0"></el-option>
          <el-option label="审核通过" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchCoupon(coupon)">查询</el-button>
      </el-form-item>
    </el-form>
    <div sytle="display:block">
      <el-button type="primary" icon="el-icon-plus" @click="addShow=true">添加</el-button>
      <el-button type="primary">自动发券</el-button>
      <el-button type="primary" @click="modalShow=true">人工发券</el-button>
      <el-button type="primary">发放记录</el-button>
    </div>
    <el-table :data="couponList" borderstyle="width: 100%" border style="margin: 20px 0">
      <el-table-column fixed prop="type" label="卡券类型" width="100"></el-table-column>
      <el-table-column fixed prop="id" label="卡券ID" width="150"></el-table-column>
      <el-table-column fixed prop="name" label="卡券名称" width="100"></el-table-column>
      <el-table-column fixed prop="validDate" label="有效期" width="200"></el-table-column>
      <el-table-column fixed prop="stock" label="库存" width="50"></el-table-column>
      <el-table-column fixed prop="companies" label="适用区域" width="150"></el-table-column>
      <el-table-column fixed prop="state" label="状态" width="100"></el-table-column>
      <!-- <el-table-column fixed prop="weixin" label="微信卡券" width="100"></el-table-column> -->
      <el-table-column fixed label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push({path:'/marketingGM/modify-coupon', query:{couponId: scope.row.id}})" >编辑</el-button>  
          <el-button
            @click.native.prevent="deleteCoupon(scope.$index,scope.row,couponList)"
            type="text"
            size="small">
            删除
          </el-button>    
          <!-- <el-button type="text" size="small">记录</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <div class="block" align="center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="couponList.pageCurrent"
        :page-sizes="couponPagination.sizes"
        :page-size="couponList.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="couponPagination.total"
      ></el-pagination>
    </div>
    <!--新增添加-->
    <el-dialog title="选择优惠券发行平台" :visible.sync="addShow">
      <p>是否同时创建微信卡券</p>
      <el-radio-group v-model="addType">
        <el-radio :label="1" disabled >同时创建微信平台优惠券</el-radio>
        <el-radio :label="2" disabled>仅创建内部平台优惠券</el-radio>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addShow = false">取 消</el-button>
        <el-button type="primary" @click="addCoupon">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog :title="modal.title" :visible.sync="modalShow" width="1000px">
      <div v-if="modalShow">
        <div v-show="modal.firstStep">
          <member
            :pagination="pagination"
            :member="memberSearch"
            :memberList="member.list"
            :ids="member.ids"
            :multipleSelect="member.selected"
            :showStatus="modal.seconStep"
            v-on:showNext="showNext"
            v-on:searchMember="searchMember"
          ></member>
        </div>
        <div v-show="modal.seconStep">
          <!-- <el-form :model='manual' label-width='80px' size='mini'>
            <el-form-item 
                label='发券原因' 
                prop='reason' 
                :rules="[{required: true,message:'发券原因不能为空'}]">
              <el-input maxlength='20' >
              </el-input>
            </el-form-item>
          </el-form>-->
          <coupon
            :searchCoupon="sendCoupon.search"
            :sendCoupon="sendCoupon.list"
            :multipleSelect="sendCoupon.selected"
            v-on:search="searchsendCoupon"
            v-on:manualSubmit="manualSubmit"
            v-on:manualprev="pre()"
          ></coupon>
        </div>
      </div>
    </el-dialog>
    <!-- <el-dialog :title="操作记录">
      <el-table :data="couponList" borderstyle="width: 100%" border style="margin: 20px 0">
      <el-table-column fixed prop="time" label="操作时间" width="100"></el-table-column>
      <el-table-column fixed prop="" label="操作人" width="100"></el-table-column>
      <el-table-column fixed prop="type" label="操作类型" width="100"></el-table-column>
      <el-table-column fixed prop="content" label="操作内容" width="100"></el-table-column>
    </el-table>
    </el-dialog> -->
  </div>
</template>

<script>
  import api from "@/api/coupon";
  import member from "@/components/manualCoupon/member";
  import coupon from "@/components/manualCoupon/coupon";
  
  export default {
    data() {
      return {
        // 分页设置
        pagination: {
          total: 0,
          sizes: [20, 30, 40, 50]
        },
        couponPagination: {
          total: 0,
          sizes: [20, 30, 40, 50]
        },
        selectedOptionYs: [],
        coupon: {
          pageCurrent: 1,
          pageSize: 20,
          name: "",
          type: "",
          company_id: "",
          state: ""
        },
        couponList: [],
        // 操作记录
        operating: [],
        // 新增优惠券
        addShow: false,
        addType: 2,
        show: false,
        memberSearch: {
          start: 1,
          pageSize: 20,
          phoneNo: "",
          name: "",
          startTime: "",
          endTime: "",
          status: "",
          hasOrder: ""
        },
        // 人工发券
        modalShow: false,
        modal: {
          title: "人工发券",
          firstStep: true,
          seconStep: false
        },
  
        // 选中会员
        member: {
          selected: [],
          list: [],
          ids: []
        },
        // 手动发券 发券列表
        sendCoupon: {
          search: {
            type: "",
            companyId: "",
            businessType: ""
          },
          list: [],
          selected: [],
          ids: []
        }
      };
    },
  
    components: {
      member,
      coupon
    },
    created() {
      this.getCoupon(this.coupon)
    },
    watch: {
      memberSearch: {
        handler() {
          this.searchMember(this.memberSearch);
        },
        deep: true
      },
      coupon: {
        handler() {
         this.getCoupon(this.coupon)
        },
         deep: true
      },
      // 提交关闭后重置
      modalShow: {
        handler() {
          this.memberRest();
        }
      }
    },
    methods: {
      addCoupon() {
        this.addShow = false,
          this.$router.push({
            path: '/marketingGM/add-coupon'
          })
      },
      // 获取优惠券列表页面
      // 每页条数
      handleSizeChange(val) {
        this.coupon.pageSize = val;
      },
      // 第几页
      handleCurrentChange(val) {
        this.coupon.pageCurrent = val;
      },
      // 主页面-门店列表
      changeCompany(val) {
        this.coupon.company_id = val[val.length - 1];
      },
      // 搜索优惠券
      searchCoupon(data) {
        this.getCoupon(data)
      },
     // 获取优惠券
      getCoupon(data) {
        api.getCouponList(data).then(res => {
          this.couponList = res.list;
          this.couponPagination.total = res.totalCount
        })
      },
      // 删除优惠券
      deleteCoupon(index, row, data) {
        this.$confirm('删除动作不可逆，是否确认删除该卡券?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          api.deleteCoupons({
            couponsId: row.id
          }).then(res => {
            data.splice(index, 1);
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      // 查看优惠券操作记录
      operateHistory(row) {

      },
      // 会员搜索
      searchMember(data) {
        data.startTime = this.time(data.startTime, "YYYY-MM-DD");
        data.endTime = this.time(data.endTime, "YYYY-MM-DD");
        this.getMember(data);
      },
      // 获取会员列表
      getMember(data) {
        api.getMember(data).then(res => {
          this.pagination.total = res.total;
          this.member.list = res.list;
          res.list.map(item => {
            item.selected = 0;
          });
          this.member.list = res.list;
          this.pagination.total = res.total;
          this.member.ids = [];
          if (this.member.selected.length > 0) {
            this.member.selected.forEach(ele => {
              this.member.ids.push(ele.id);
            });
          }
          if (this.member.list.length > 0) {
            this.member.list.forEach(ele => {
              if (this.member.ids.includes(ele.id)) {
                ele.selected = 1;
              }
            });
          }
        });
      },
      showNext() {
        this.modal.firstStep = false;
        this.modal.seconStep = true;
      },
      pre() {
        this.modal.firstStep = true;
        this.modal.seconStep = false;
      },
      searchsendCoupon(data) {
        this.getSendCoupon(data);
      },
      // 获取发行的优惠券列表
      getSendCoupon(data) {
        api.sendCoupon(data).then(res => {
          res.map(item => {
            item.selected = 0;
            item.number = 0;
            item.stocked = item.stock == "不限" ? 9999999 : Number(item.stock);
          });
          this.sendCoupon.list = res;
          const data = {};
          this.sendCoupon.selected.forEach(item => {
            data[item.id] = item;
          });
          this.sendCoupon.list.forEach(item => {
            Object.assign(item, data[item.id]);
          });
        });
      },
      // 人工发券关闭后数据清空
      memberRest() {
        if (this.modalShow == false) {
          this.member.list = [];
          this.member.selected = [];
          this.coupon.list = [];
          this.coupon.selected = [];
          this.sendCoupon.list = [];
          this.sendCoupon.selected = [];
          // this.coupon = { ...this.coupon,...def};
          (this.modal.firstStep = true), (this.modal.seconStep = false);
        }
      },
      // 人工发券提交
      manualSubmit() {
        const data = {
          subscriberIds: [],
          couponIds: [],
          couponNums: []
        };
        this.member.selected.forEach(ele => {
          data.subscriberIds.push(ele.id);
        });
        this.sendCoupon.selected.forEach(ele => {
          data.couponIds.push(ele.id);
          data.couponNums.push(ele.number);
        });
        for (var key in data) {
          data[key] = data[key].join(",");
        }
        api.couponHandleGrant(data).then(res => {
          const _this = this;
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.modalShow = false;
        });
      }
    }
  };
</script>



