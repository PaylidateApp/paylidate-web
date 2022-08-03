export const dDataMixin = {
  data() {
    return {
      device: JSON.parse(localStorage.getItem('deviceData')),
      siteHost : window.location.host
    }
  },
  computed: {
    siteUrl() {
      let protocols = ['http://', 'https://']
      return `${this.siteHost.includes('localhost') ? protocols[0] : protocols[1]}${this.siteHost}`
    },
    
    device_footprint(){
      let dData = this.device
      return {
        browserInfo:{
            browser_userAgent:dData?.browserInfo.browser_userAgent,
            browser_platform:dData?.browserInfo.browser_platform
        },
        thebrowser:{
            browser_name:dData?.browserInfo.browser_name,
            browser_appCodeName:dData?.browserInfo.browser_appCodeName,
            browser_appName:dData?.browserInfo.browser_appName
        },
        device_logicalProcessors:dData?.device?.device_logicalProcessors,
        device_oscpu:dData?.device?.device_oscpu,
        browser_name:dData?.browserInfo.browser_name,
        device_uuid:dData?.device?.device_uuid,
        browser_appName:dData?.browserInfo.browser_appName,
        device_pixelDepth:dData?.device?.device_pixelDepth,
        device_form_factor:dData?.device?.device_form_factor,
        device_name:dData?.device?.device_name,
        timezone:dData.timezone,
        country_name:dData.country_name,
        long:dData.location.Longitude,
        lat:dData.location.Longitude,
        location:'long' +dData.location.Longitude+ ' lat' +dData.location.Longitude,
        myUrl:dData.myUrl,
        ip:dData.ip
      }
      // this.form.device = device
      // console.log('device', this.form);
    },
  },

  methods: {
    
  },
}

  