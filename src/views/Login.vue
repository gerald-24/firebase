<template>

  <v-app id="inspire">
    <!-- {{AllAccountDetails}} -->
    <!-- {{AllAccountData}} -->
    <v-content>
      <v-container
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
        <br/>
        <br/>
      <v-row justify="space-around">
    <v-avatar color="orange" size="120">      
      <span class="white--text headline">TEST</span>
    </v-avatar>
    </v-row>
              <v-row justify="space-around">
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Login"
                      name="Login"
                      v-model="uName"
                      prepend-icon="mdi-account"
                      type="text"
                      @blur="Userblur()"
                    />

                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      v-model="pwd"
                      prepend-icon="mdi-lock"
                      type="password"
                    />
                  </v-form>
                </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="onSignUp()">SignUp</v-btn>
                <v-btn color="primary" @click="onLogin()">SignIn</v-btn>
              </v-card-actions>
              </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <template>
      <!-- <v-dialog v-model="signUps">
        <SignUpvue/>
        <v-btn @click="signUp=false"> Test </v-btn>
      </v-dialog> -->
      <SignUpvue :signUps="signUps" @close="close"/>
    </template>
  </v-app>
</template>

<script>
import {db} from '../config/db'
import SignUpvue from '@/components/SignUp'
  export default {
    data(){
      return{
        tbl_UserAccount: db.ref("AccountDetails/UserAccess"),
        tbl_AccountDetails: db.ref("AccountDetails/UserInfo"),
        uName:'',
        pwd:'',
        tempInfo:{
          UserName:'',
          Password:''
        },
        signUps:false,
        AllAccountData:[],
        AllAccountDetails:[]
      }
    },
  
    created(){
        this.getInfo()
        console.log(this.signUp)
    },
    methods:  {
        getInfo() {
            this.tbl_UserAccount.once('value',storedValue => this.AllAccountData = storedValue.val())
            this.tbl_AccountDetails.once('value',storedValue => this.AllAccountDetails = storedValue.val())
        },

        Userblur(){
            this.tempInfo = this.AllAccountData.filter(rec=>{
                return rec.UserName == this.uName
            })
            this.tempInfo[0].AccountDetails = this.AllAccountDetails.filter(rec=>{
                return rec.ID == this.tempInfo[0].ID
            })[0]
            this.tempInfo[0].isLogin = true
        },
        onLogin() {
            if(this.uName==='' && this.pwd===''){
            }else if(this.pwd === this.tempInfo[0].Password){
                this.CHANGE_USER_INFO(this.tempInfo[0])
                this.ShowFab(true)
                this.$router.push('/')
            }else{
                alert('Wrong UserName or Password')
            }
        },
        onSignUp() {
          this.signUps = true
            // this.signUp = true
            console.log(this.signUp)
        },
        close(val){
          this.signUps = val
        }
    },
  components:{
    SignUpvue
  }
  }
</script>