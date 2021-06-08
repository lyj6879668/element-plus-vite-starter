const apiList = {
  login: '/api/login', //登录接口
  userInfo: '/api/user', //获取用户信息接口
  getList: '/api/list', //获取列表接口
}
export default (apiName) => {
  return apiList[apiName];
};