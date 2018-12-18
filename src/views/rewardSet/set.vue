<template>
  <div>
    <el-form :model="brokerage" ref="ruleBrokerage" :rules="ruleBrokerage" label-width="150px">
      <!--标题1-->
      <div class="base-title">
        <span class="s1" style="width: 14%">合伙人设置</span>
        <span class="s2" style="width: 86%"></span>
        <div style="clear:both"></div>
      </div>
      <el-row style="margin-top: 20px">
        <el-col :span="10">
          <el-form-item label="一级合伙人提佣：" prop="firstRebateAmount">
            <el-input v-model="brokerage.firstRebateAmount" placeholder="设为0时无佣金" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="1">
          <el-col :span="1">
            <span style="line-height: 32px">分</span>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item prop="firstRebateStagingNum" label-width="5px">
              <el-input v-model="brokerage.firstRebateStagingNum" placeholder="整数，>=1" onkeyup="value=value.replace(/[^\d]/g,'')"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="1">
            <span style="line-height: 32px">期返佣</span>
          </el-col>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <el-form-item label="二级合伙人提佣：" prop="secondRebateAmount">
            <el-input v-model="brokerage.secondRebateAmount" placeholder="设为0时无佣金" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="1">
          <el-col :span="1">
            <span style="line-height: 32px">分</span>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item prop="secondRebateStagingNum" label-width="5px">
              <el-input v-model="brokerage.secondRebateStagingNum" placeholder="整数，>=1" onkeyup="value=value.replace(/[^\d]/g,'')"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="1">
            <span style="line-height: 32px">期返佣</span>
          </el-col>
        </el-col>
      </el-row>

      <!--标题2-->
      <div class="base-title">
        <span class="s1" style="width: 14%">体验店设置</span>
        <span class="s2" style="width: 86%"></span>
        <div style="clear:both"></div>
      </div>
      <!---->
      <el-row style="margin-top: 20px">
        <el-col :span="10">
          <el-form-item label="非合伙人推荐提佣：" prop="nonPartnerRecommendedCommission">
            <el-input v-model="brokerage.nonPartnerRecommendedCommission" placeholder="设为0时无佣金" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="1">
          <el-col :span="1">
            <span style="line-height: 32px">分</span>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item prop="nonPartnerRebateStagingNum" label-width="5px">
              <el-input v-model="brokerage.nonPartnerRebateStagingNum" disabled placeholder="整数，>=1" onkeyup="value=value.replace(/[^\d]/g,'')"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="1">
            <span style="line-height: 32px">期返佣</span>
          </el-col>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <el-form-item label="合伙人推荐提佣：" prop="partnerRecommendedCommission">
            <el-input v-model="brokerage.partnerRecommendedCommission" placeholder="设为0时无佣金" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="1">
          <el-col :span="1">
            <span style="line-height: 32px">分</span>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item prop="partnerRebateStagingNum" label-width="5px">
              <el-input v-model="brokerage.partnerRebateStagingNum" disabled placeholder="整数，>=1" onkeyup="value=value.replace(/[^\d]/g,'')"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="1">
            <span style="line-height: 32px">期返佣</span>
          </el-col>
        </el-col>
      </el-row>

      <div class="re-set-submit" align="center">
        <el-button type="primary" @click="rewSubmit('ruleBrokerage')">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import {
  addPartnerBonusSetting,
  updatePartnerBonusSettingById
} from "@/api/rewardSet";
export default {
  props: ["setData"],
  data() {
    // 期限的验证
    const validateTerm = (rule, value, callback) => {
      if (!value || value * 1 <= 0) {
        return callback(new Error('整数，>=1'));
      } else {
        callback();
      }
    }

    return {
      brokerage: {
        firstRebateAmount: "",
        firstRebateStagingNum: "",
        secondRebateAmount: "",
        secondRebateStagingNum: "",
        experienceStoreRebateAmount: "",
        experienceStoreRebateStagingNum: "",
        nonPartnerRecommendedCommission: "",
        nonPartnerRebateStagingNum: 1,
        partnerRecommendedCommission: "",
        partnerRebateStagingNum: 1
      },
      ruleBrokerage: {
        firstRebateAmount: [
          { required: true, message: "请输入佣金", trigger: "blur" }
        ],
        firstRebateStagingNum: [
          { validator: validateTerm, trigger: "blur" }
        ],
        secondRebateAmount: [
          { required: true, message: "请输入佣金", trigger: "blur" }
        ],
        secondRebateStagingNum: [
          { validator: validateTerm, trigger: "blur" }
        ],
        nonPartnerRecommendedCommission: [
          { required: true, message: "请输入佣金", trigger: "blur" }
        ],
        nonPartnerRebateStagingNum: [
          { validator: validateTerm, trigger: "blur" }
        ],
        partnerRecommendedCommission: [
          { required: true, message: "请输入佣金", trigger: "blur" }
        ],
        partnerRebateStagingNum: [
          { validator: validateTerm, trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.brokerage = {
      firstRebateAmount: this.setData.firstRebateAmount === 0 ? this.setData.firstRebateAmount + "" : this.setData.firstRebateAmount,
      firstRebateStagingNum: this.setData.firstRebateStagingNum === 0 ? this.setData.firstRebateStagingNum + "" : this.setData.firstRebateStagingNum,
      secondRebateAmount: this.setData.secondRebateAmount === 0 ? this.setData.secondRebateAmount + "" : this.setData.secondRebateAmount,
      secondRebateStagingNum: this.setData.secondRebateStagingNum === 0 ? this.setData.secondRebateStagingNum + "" : this.setData.secondRebateStagingNum,
      experienceStoreRebateAmount:
        this.setData.experienceStoreRebateAmount === 0 ? this.setData.experienceStoreRebateAmount + "" : this.setData.experienceStoreRebateAmount,
      experienceStoreRebateStagingNum:
        this.setData.experienceStoreRebateStagingNum === 0 ? this.setData.experienceStoreRebateStagingNum + "" : this.setData.experienceStoreRebateStagingNum,
      nonPartnerRecommendedCommission:
        this.setData.nonPartnerRecommendedCommission === 0 ? this.setData.nonPartnerRecommendedCommission + "" : this.setData.nonPartnerRecommendedCommission,
      nonPartnerRebateStagingNum: 1,
      partnerRecommendedCommission:
        this.setData.partnerRecommendedCommission === 0 ? this.setData.partnerRecommendedCommission + "" : this.setData.partnerRecommendedCommission,
      partnerRebateStagingNum: 1
    };
  },
  methods: {
    submitFun() {
      // ytype[1: 代表添加, 2: 代表修改]
      if (this.setData.ytype === "1") {
        let o = {
          styStrategyBaseId: this.setData.testId,
          firstRebateAmount: "",
          firstRebateStagingNum: "",
          secondRebateAmount: "",
          secondRebateStagingNum: "",
          experienceStoreRebateAmount: "",
          experienceStoreRebateStagingNum: "",
          nonPartnerRecommendedCommission: "",
          nonPartnerRebateStagingNum: 1,
          partnerRecommendedCommission: "",
          partnerRebateStagingNum: 1,
          orderType: this.setData.orderType
        };
        o = Object.assign({}, o, this.brokerage);
        addPartnerBonusSetting(o)
          .then(res => {
            this.$emit("relClose");
          })
          .catch(err => {
            this.$message.error(err);
          });
      } else {
        let o = {
          id: this.setData.pId,
          firstRebateAmount: "",
          firstRebateStagingNum: "",
          secondRebateAmount: "",
          secondRebateStagingNum: "",
          experienceStoreRebateAmount: "",
          experienceStoreRebateStagingNum: "",
          nonPartnerRecommendedCommission: "",
          nonPartnerRebateStagingNum: 1,
          partnerRecommendedCommission: "",
          partnerRebateStagingNum: 1,
          orderType: this.setData.orderType
        };
        o = Object.assign({}, o, this.brokerage);
        updatePartnerBonusSettingById(o)
          .then(res => {
            this.$emit("relClose");
          })
          .catch(err => {
            this.$message.error(err);
          });
      }
    },
    rewSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.submitFun();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style>
.re-set-submit {
  margin-top: 20px;
}
</style>

