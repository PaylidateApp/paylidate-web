<template>
  <div class="">
    <q-btn unelevated size="sm" color="primary" icon-right="archive" label="Download Table" no-caps @click="exportTable" />
  </div>
</template>

<script>
/*eslint no-undef: 0*/
import { exportFile } from 'quasar'
function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  return `"${formatted}"`
}
export default {
  // name: 'ComponentName',
  props:['array', 'columns'],
  // components:{
  //   menuBtn
  // },
  data () {
    return {}
  },

  methods: {
    exportTable () {
      // naive encoding to csv format
      const content = [ this.$props.columns.map(col => wrapCsvValue(col.label)) ].concat(
        this.$props.array.map(row => this.$props.columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === void 0 ? col.name : col.field],
          col.format
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'table-export.csv',
        content,
        'text/csv'
      )

      if (status !== true) {
        this.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
    },



  },
  computed: {},

  watch: {},
  mounted() {},

}
</script>
