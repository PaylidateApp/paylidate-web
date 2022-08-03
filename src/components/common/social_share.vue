<template>
  <div>
    <ShareNetwork
      v-for="network in networks"
      :network="network.network"
      :key="network.network"
      :url="post.link"
      :title="post.title"
      :description="post.description"
      :quote="post.description"
      :hashtags="post.hashtags"
      :twitterUser="post.twitterUser"
      :media="'statics/branchlessAd.jpg'"
    >
      <!-- <i :class="network.icon"></i> -->
      <q-btn flat color="primary" text-color="primary" :icon="network.icon"  />
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  // name: 'ShareNetwork',
  props: ["post"],

  data() {
    return {
      networks: [
        { network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope' },
        { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f' },
        { network: 'linkedin', name: 'LinkedIn', icon: 'fab fah fa-lg fa-linkedin' },
        { network: 'sms', name: 'SMS', icon: 'far fah fa-lg fa-comment-dots' },
        { network: 'telegram', name: 'Telegram', icon: 'fab fah fa-lg fa-telegram-plane' },
        { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter' },
        { network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah fa-lg fa-whatsapp' },

      ],
      overriddenNetworks: {
          "custom_facebook": {
            "sharer": "https://www.facebook.com/dialog/feed?app_id=525631204811961&ref=site&display=popup&name=@title&link=@url&redirect_uri=@url&caption=@title&description=@description",
            "type": "popup"
          },
        },
    };


  },

  methods: {
    stripHtml(html) {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }
  }
};
</script>
