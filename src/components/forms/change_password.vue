<template>
  <div>
    <div class="text-h4 q-mb-md">Change Password</div>
    <q-card-section class="q-gutter-sm">
      <q-input square outlined readonly :value="password.current" label="Current Password" />
      <q-input square outlined readonly :value="password.new" label="New Password" />
      <q-input square outlined readonly :value="password.confirm_new" label="Confirm New Password" />
      <q-btn color="white" text-color="black" label="Change Password" />
    </q-card-section>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      form:{
        current: '',
        new: '',
        confirm_new: ''
      }
    }
  }
}
</script>
