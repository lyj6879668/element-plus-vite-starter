const apiList = {
  login: '/api/login'
}
export default (apiName) => {
  return apiList[apiName];
};