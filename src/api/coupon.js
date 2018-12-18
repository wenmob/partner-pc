import request from '@/utils/request'

/**
 * 获取优惠券列表
 * @param {*}
 */
export function getCouponList(params) {
  return request({
    url: '/coupons/queryList',
    method: 'post',
    data: params
  })
}
/*
*新增优惠券
*/
export function couponsAdd(params) {
  return request({
    url: '/coupons/add',
    method: 'post',
    data: params
  })
}
export function getMember(params) {
  return request({
    url: '/couponHandleGrant/querySubList',
    method: 'post',
    data: params
  })
}

/*
*查询适用门店列表
*/
export function couponsShowCompanyList(params) {
  return request({
    url: '/coupons/showCompanyList',
    method: 'post',
    data: params
  })
}

/*
*查询策略列表
*/
export function couponsShowStrategyList(params) {
  return request({
    url: '/coupons/showStrategyList',
    method: 'post',
    data: params
  })
}

/*
*查询策略列表
*/
export function couponsShowCarModelList(params) {
  return request({
    url: '/coupons/showCarModelList',
    method: 'post',
    data: params
  })
}
/*
*发券页面优惠券列表
*/
export function sendCoupon(params) {
  return request({
    url: '/coupons/showCouponsList',
    method: 'post',
    data: params
  })
}
/*
*删除优惠券
*/
export function deleteCoupons(params) {
  return request({
    url: '/coupons/deleteCoupons',
    method: 'post',
    data: params
  })
}
// 人工发券提交
export function couponHandleGrant(params) {
   return request({
     url: '/couponHandleGrant/handleGrant',
     method: 'post',
     data: params
   })
}
/*
*查询车辆品牌
*/
export function couponsShowCarBrandList(params) {
  return request({
    url: '/coupons/showCarBrandList',
    method: 'post',
    data: params
  })
}

/*
*获取优惠券详情
*/
export function couponsInitUpdateCoupons(params) {
  return request({
    url: '/coupons/initUpdateCoupons',
    method: 'post',
    data: params
  })
}

/*
*更新优惠券
*/
export function couponsUpdate(params) {
  return request({
    url: '/coupons/update',
    method: 'post',
    data: params
  })
}
export default {
  getCouponList,
  getMember,
  sendCoupon,
  couponHandleGrant,
  deleteCoupons
}
