<template>
  <v-data-table
    :headers="headers"
    :items="UserAccounts"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.Password="{item}">
        <input type="password" v-model="item.Password" style="width:5em" solo flat disabled />
    </template>
  </v-data-table>
</template>
<script>
import {db} from '../config/db'
export default {
    data(){
        return{
            tbl_UserAccount: db.ref("AccountDetails/UserAccess"),
            UserAccounts: [],
            headers:[{text:'ID',value:'ID'},{text:'UserName',value:'UserName'},{text:'Password',value:'Password'}]
        }
    },
    created(){
        this.Initialize()
    },
    methods:{
        Initialize(){
            this.getData()
            },
        getData(){
            this.tbl_UserAccount.once('value',storedValue => this.UserAccounts = storedValue.val())
            }
    }
}
</script>