// 判断各种特征

let isPC: boolean;
let isMobile: boolean;   // 此字段表示是否为移动装置，包含是否为手机或pad
let isWeChat: boolean = false;
let isIOS: boolean = false;
let isIPadOS: boolean = false;
let isFeishu: boolean = false;

interface GetChaRes {
  isPC: boolean
  isMobile: boolean
  isWeChat: boolean
  isIOS: boolean         // 是否为 iphone
  isIPadOS: boolean      // 是否为 iPad
  isFeishu: boolean
}

const getCharacteristic = (): GetChaRes => {
  if(isPC !== undefined) {
    return _returnData()
  }

  const { userAgent = "", userAgentData } = navigator
  const ua = userAgent.toLowerCase()
  const mobileMatch = userAgent.match(/AppleWebKit.*Mobile.*/)

  console.log("userAgentData: ", userAgentData)
  console.log("ua: ", ua)
  console.log("mobileMatch: ", mobileMatch)

  // 判断是否为微信环境
  if(ua.includes("micromessenger")) isWeChat = true

  // 判断是否为移动装置
  if(userAgentData?.mobile) {
    isMobile = true
    isPC = false
  }
  else if(!!mobileMatch) {
    isMobile = true
    isPC = false
  }
  else {
    isMobile = false
    isPC = true
  }

  if(ua.includes("iphone") || ua.includes("ios")) isIOS = true
  if(ua.includes("ipad")) isIPadOS = true
  if(ua.includes("feishu")) isFeishu = true

  let res = _returnData()
  console.log("看一下特征值判断结果...........")
  console.log(res)
  console.log(" ")
  return res
}

function _returnData(): GetChaRes {
  return { isPC, isMobile, isWeChat, isIOS, isIPadOS, isFeishu }
}


export default {
  getCharacteristic
}
