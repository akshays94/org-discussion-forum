<template>
  <div class="sidebar">

    <div class="bar1">
      <div class="topbox"></div>
      <div class="bottombox">
        <div class="buttonbox">

          <div class="buttonbox--top">

            <router-link
              tag="div"
              class="btn"
              title="Search"
              :to="{ name: 'Search' }">
              <v-icon color="white">search</v-icon>
            </router-link>

            <router-link
              tag="div"
              class="btn"
              title="Create"
              :to="{ name: 'Create' }">
              <v-icon color="white">add</v-icon>
            </router-link>

            <!-- <div
              class="btn"
              title="Create">
              <v-icon color="white">add</v-icon>
            </div> -->

          </div>

          <div class="buttonbox--bottom">

            <router-link
              tag="div"
              class="btn"
              title="Help"
              :to="{ name: 'Help' }">
              <v-icon color="white">help_outline</v-icon>
            </router-link>

            <router-link
              tag="div"
              class="btn"
              title="Notifications"
              :to="{ name: 'Notifications' }">
              <v-icon color="white">notifications</v-icon>
            </router-link>

            <div
              class="btn"
              title="Logout" @click="logout()">
              <v-icon color="white">power_settings_new</v-icon>
            </div>

            <router-link
              tag="div"
              class="btn--img"
              title="View profile"
              :to="{ name: 'Profile' }">
              <img src="http://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg" alt="">
            </router-link>

          </div>
        </div>
      </div>
    </div>

    <div class="bar2">
      <div class="topbox">
        <div class="txt--main">
          Community
        </div>
      </div>
      <div class="bottombox">
        <div class="navbox">

          <router-link
            tag="div"
            class="navbox--item"
            :to="{ name: 'Questions' }">
            <v-icon class="navbox--item--icon" color="white">
              home
            </v-icon>
            <div class="navbox--item--title">
              Home
            </div>
          </router-link>

          <router-link
            tag="div"
            class="navbox--item"
            :to="{ name: 'Starred' }">
            <v-icon class="navbox--item--icon" color="white">
              star
            </v-icon>
            <div class="navbox--item--title">
              Starred
            </div>
          </router-link>

          <router-link
            tag="div"
            class="navbox--item"
            :to="{ name: 'Tags' }">
            <v-icon class="navbox--item--icon" color="white">
              style
            </v-icon>
            <div class="navbox--item--title">
              Tags
            </div>
          </router-link>

          <router-link
            tag="div"
            class="navbox--item"
            :to="{ name: 'Leaderboard' }">
            <v-icon class="navbox--item--icon" color="white">
              trending_up
            </v-icon>
            <div class="navbox--item--title">
              Leaderboard
            </div>
          </router-link>

          <router-link
            tag="div"
            class="navbox--item"
            :to="{ name: 'Administrator' }">
            <v-icon class="navbox--item--icon" color="white">
              settings
            </v-icon>
            <div class="navbox--item--title">
              Administrator
            </div>
          </router-link>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    logout () {
      delete localStorage.token
      this.$router.replace(this.$route.query.redirect || '/')
    }
  }
}
</script>

<style>
.sidebar {
  user-select: none;
  display: flex;
  height: 100%;
  color: white;
  background: #38369A !important;
}

.bar1 {
  width: 20%;
  /*border: 1px dashed red;*/
  background: #292871 !important;
}
.bar2 {
  width: 80%;
  /*border: 1px dashed yellow;*/
}

.topbox {
  margin-top: 22px;
  height: 10% !important;
  /*border: 1px solid lightblue;*/
}

.bottombox {
  height: 86%;
}

.buttonbox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /*border: 1px solid yellow;*/
  height: 100%;
}

.buttonbox--top {
  /*border: 1px solid white;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
}

.buttonbox--bottom {
  /*border: 1px solid red;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

}

.btn {
  display: flex;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.btn:hover {
  background: #1F1E54;
}

.btn--img {
  display: flex;
  justify-content: center;
  align-items: center;
  /*border: 2px solid cyan;*/
}

.btn--img > img {
  width: 60%;
  height: 60%;
  border-radius: 50%;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.btn--img > img:hover {
  transform: scale(1.05);
  box-shadow: 0 7px 10px 0 #1F1E54;
}

.navbox {
  padding: 12px;
  /*border: 1px solid yellow;*/
  height: 100%;
}

.navbox--item {
  padding: 8px;
  margin-left: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  display: flex;
  align-items: center;
  border-radius: 5px;
}

.navbox--item--icon {
  margin-right: 12px;
}

.navbox--item--title {
  font-size: 1.1em;
  /*font-weight: lighter;*/
}

.navbox--item:hover {
  background: #292871;
}

.txt--main {
  font-weight: lighter;
  font-size: 2.3em;
  padding-left: 24px;
}
</style>
