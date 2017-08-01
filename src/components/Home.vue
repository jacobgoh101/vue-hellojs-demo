<template>
  <div>
    <Navi/>
    <div class="container-fluid">
      <div class="row">
        <div class="login-buttons col-xs-12 col-md-6 clearfix">
          <button class="btn btn-default" @click="authenticate('google')">
            <i class="fa fa-google-plus" aria-hidden="true"></i> Login to Google+</button>
          <button class="btn btn-default" @click="authenticate('facebook')">
            <i class="fa fa-facebook" aria-hidden="true"></i> Login to Facebook</button>
        </div>
        <div class="login-response col-xs-12 col-md-6">
          <h4 class="text-primary">hello(network).getAuthResponse()</h4>
          <div class="well well-lg">{{authRes}}</div>
          <h4 class="text-primary">hello(network).api('me')</h4>
          <div class="well well-lg">{{profileRes}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navi from './sub/Navi';

export default {
  data() {
    return {
      authRes: "none",
      profileRes: "none"
    }
  },
  components: {
    Navi
  },
  methods: {
    authenticate(network) {
      const _this = this;
      const hello = this.hello;
      hello(network).login().then(() => {
        const authRes = hello(network).getAuthResponse();
        /*
          performs operations using the token from authRes
        */
        let output = JSON.stringify(authRes, undefined, 4);
        _this.authRes = output;
        hello(network).api('me').then(function (profile) {
          /*
            performs operations using the user info from profile
          */
          let output = JSON.stringify(profile, undefined, 4);
          _this.profileRes = output;
        });
      })
    }
  }
}
</script>

<style scoped lang=scss>
.login-buttons {
  button {
    float: right;
    display: block;
    clear: both;
    margin-bottom: 20px;
    i.fa {
      margin-right: 5px;
    }
  }
}

.well {
  white-space: pre;
  overflow-x: scroll;
}
</style>