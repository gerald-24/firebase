<template>
  <div id="app">
    <!-- {{allData}} -->
    <!-- {{test}} -->
    <v-sheet class="pa-5 ma-5">
      <v-text-field v-model="EditItems.ID" label="ID Number :" readonly/>
      <v-text-field v-model="EditItems.fName" label="FirstName :"/>
      <v-text-field v-model="EditItems.mName" label="MiddleName :"/>
      <v-text-field v-model="EditItems.lName" label="LastName :"/>
      <v-text-field v-model="EditItems.Gender" label="Gender :"/>
      <v-text-field v-model="EditItems.Address" label="Address :"/>
        <v-btn @click="updateAccounts()">
          test ONLY
        </v-btn>
    </v-sheet>
    <!-- {{EditItems}} -->
  </div>
</template>

<script>
import {db} from '../config/db';
import store from '../store'

export default {
  name: 'app',
  data: function () {
    return {
      tbl_AccountDetails: db.ref("AccountDetails/UserInfo"),
      AllAccountDetails:[],
      EditItems:{
        ID: '',
        fName:'',
        mName:'',
        lName:'',
        Gender:'',
        Address:'',
      },
      allData: [],
    };
  },
  created() {
      this.getData()
      // this.tests()
     },

  methods:{
    getData(){
        this.tbl_AccountDetails.once('value',storedValue => this.allData = storedValue.val())
        this.EditItems.ID=  store.state.userInfo.ID,
        this.EditItems.fName= store.state.userInfo.AccountDetails.fName,
        this.EditItems.mName= store.state.userInfo.AccountDetails.mName,
        this.EditItems.lName= store.state.userInfo.AccountDetails.lName,
        this.EditItems.Gender= store.state.userInfo.AccountDetails.Gender,
        this.EditItems.Address= store.state.userInfo.AccountDetails.Address
      // console.log(this.EditItems)
    },

    tests(){
      this.EditItems = this.allData.filter(rec=>{
        return rec.ID == store.state.userInfo.ID
        })[0]
      // console.log(this.EditItems)
      this.ID = this.EditItems.ID
      this.FullName = this.EditItems.UserName
      this.Password = this.EditItems.Password
    }
    ,
    updateAccounts(){
      // this.tests()
          // console.log(this.allData.map(e => { return e.ID; }).indexOf(this.EditItems.ID))
          this.allData[this.allData.map(e => { return e.ID; }).indexOf(this.EditItems.ID)]={
                    ID: this.EditItems.ID,
                    fName: this.EditItems.fName,
                    mName: this.EditItems.mName,
                    lName: this.EditItems.lName,
                    Gender: this.EditItems.Gender,
                    Address: this.EditItems.Address,
                  }
          // console.log(this.allData[this.allData.map(e => { return e.ID; }).indexOf(this.EditItems.ID)])
          // console.log(this.allData)
          this.tbl_AccountDetails.update(
              this.allData,
              this.CHANGE_ACCOUNT_DETAILS(this.EditItems)
              // [
              //   { "ID": "AFC-000001", "fName": "Gerald" ,"mName": "Hernandez", "lName": "Casalme",  "Gender": "Male",   "Address":"GRS Subd."}, 
              //   { "ID": "AFC-000002", "fName": "Lavinia" ,"mName": "", "lName": "Navarro",  "Gender": "Female",   "Address":"Tejero"}, 
              //   { "ID": "AFC-000003", "fName": "Lady Lee" ,"mName": "Andres", "lName": "Avila",  "Gender": "Male",   "Address":"Postema"}, 
              // ]
            )
     },

  }
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