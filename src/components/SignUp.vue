<template v-if="signUp=true">
<v-dialog v-model="signUps">
   <div id="app">
    <v-sheet class="pa-5 ma-5">
      <v-text-field v-model="EditItems.ID" label="ID Number :" />
      <v-text-field v-model="EditItems.fName" label="FirstName :"/>
      <v-text-field v-model="EditItems.mName" label="MiddleName :"/>
      <v-text-field v-model="EditItems.lName" label="LastName :"/>
      <v-text-field v-model="EditItems.Gender" label="Gender :"/>
      <v-text-field v-model="EditItems.Address" label="Address :"/>
      <v-text-field v-model="EditItems.UserName" label="UserName :"/>
      <v-text-field v-model="EditItems.Password" label="Password :"/>
        <v-btn @click="createAccounts()">
          SignUp
        </v-btn>
    </v-sheet>
    

  </div>
</v-dialog>
 
</template>
<script>
import {db} from '../config/db';


export default {
  name: 'app',
  data: function () {
    return {
        tbl_UserAccount: db.ref("AccountDetails/UserAccess"),
        tbl_AccountDetails: db.ref("AccountDetails/UserInfo"),
      AllAccountDetails:[],
      AllUserAccountData:[],
      EditItems:{
        ID: '',
        fName:'',
        mName:'',
        lName:'',
        Gender:'',
        Address:'',
        UserName:'',
        Password:'',
      },
      allDataForAccountDetails: [],
      allDataForUserAccount: [],
    };
  },
   props:['signUps'],
  created() {
      this.getData()
     },
  methods:{
    getData(){
        this.tbl_AccountDetails.once('value',storedValue => this.allDataForAccountDetails = storedValue.val())
        this.tbl_UserAccount.once('value',storedValue => this.allDataForUserAccount = storedValue.val())
    },
    tests(){
      this.EditItems = this.allDataForAccountDetails.filter(rec=>{
        return rec.ID == this.userInfo.ID
        })[0]
      this.ID = this.EditItems.ID
      this.FullName = this.EditItems.UserName
      this.Password = this.EditItems.Password
    }
    ,
    createAccounts(){
          this.allDataForAccountDetails.push({
                    ID: this.EditItems.ID,
                    fName: this.EditItems.fName,
                    mName: this.EditItems.mName,
                    lName: this.EditItems.lName,
                    Gender: this.EditItems.Gender,
                    Address: this.EditItems.Address,
          })
          this.allDataForUserAccount.push({
                    AccessRights: 2,
                    ID: this.EditItems.ID,
                    UserName: this.EditItems.UserName,
                    Password: this.EditItems.Password
          })
          this.tbl_AccountDetails.update(
              this.allDataForAccountDetails
            )
          this.tbl_UserAccount.update(
              this.allDataForUserAccount
          )
          this.$emit('close',false)

          // console.log(this.signUp)
         
     },

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>