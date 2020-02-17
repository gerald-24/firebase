<template>
  <v-app id="create">      
    <v-container>
      <v-content>
        <router-view  />
      </v-content>
    </v-container>
    <template >
      <v-speed-dial v-model="fab" top right direction="left" transition='slide-y-reverse-transition'>
        <template v-slot:activator>
          <v-btn v-if="showFab==true" v-model="fab" color="blue darken-2" dark fab>
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-btn fab dark small color="green"  @click="UserAccounts()">
          <v-icon>mdi-account-group</v-icon>
        </v-btn>
        <v-btn fab dark small color="indigo" @click="PersonalAccount()">
          <v-icon>mdi-account-card-details</v-icon>
        </v-btn>
        <v-btn fab dark small color="red" @click="logout()">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-speed-dial>
    </template>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
      fab: false,
      fling: false,
      tabs: null,
      collapsed: false
    };
  },
  created(){
  },
  computed: {
  },
  methods: {  
    logout() {
        this.CHANGE_USER_INFO({})
        this.ShowFab(false)
        this.$router.push('/login')
    },
    UserAccounts() {
        this.$router.push('/useraccounts')
    },
    PersonalAccount(){
        this.$router.push('/personalaccount')
    }
  }
};
</script>
<style>
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>