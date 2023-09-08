new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
          {
            name: "Sparks",
            artist: "Coldplay",
            cover: "https://drive.google.com/uc?export=view&id=1tX0esPI5m25LbqcNlF74hOmRILHNAmGU",
            source: "https://github.com/charlsyy/adsa/raw/main/onlymp3.to%20-%20Sparks-1aokooixKIo-192k-1692708199.mp3",
            url: "https://open.spotify.com/track/7D0RhFcb3CrfPuTJ0obrod?si=a1dd06cc3c1a4def",
            favorited: false
          },
          {
            name: "Lover",
            artist: "Taylor Swift",
            cover: "https://drive.google.com/uc?export=view&id=1tAWW71nkoiV8QH4TiX8MhOT1FyGy0Zvi",
            source: "https://github.com/charlsyy/sad/raw/main/zamona-net-taylor-swift-lover.mp3",
            url: "https://open.spotify.com/track/1dGr1c8CrMLDpV6mPbImSI?si=92c91229908e4a0d",
            favorited: false
          },
          {
            name: "Sweet",
            artist: "Cigarretes After Sex",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
            source: "https://github.com/charlsyy/adsa/raw/main/onlymp3.to%20-%20Sweet%20Cigarettes%20After%20Sex-pZ31pyTZdh0-192k-1692709064.mp3",
            url: "https://open.spotify.com/track/6ilc4vQcwMPlvAHFfsTGng?si=043e8fa4efa8449c",
            favorited: false
          },
          {
            name: "Sure Thing",
            artist: "Miguel",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
            source: "https://github.com/charlsyy/adsa/raw/main/Miguel%20-%20Sure%20Thing%20(Lyrics).mp3",
            url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
            favorited: false
          },
          {
            name: "we fell inlove in october",
            artist: "girl in red",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
            source: "https://github.com/charlsyy/adsa/raw/main/girl%20in%20red%20-%20we%20fell%20in%20love%20in%20october.mp3",
            url: "https://open.spotify.com/track/6IPwKM3fUUzlElbvKw2sKl?si=dc7405fc099546c8",
            favorited: true
          },
          {
            name: "All I wanted",
            artist: "Paramore",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
            source: "https://github.com/charlsyy/adsa/raw/main/Paramore%20-%20All%20I%20Wanted%20(Official%20Audio).mp3",
            url: "https://open.spotify.com/track/1Bv3h7Vc4AaYA2BcSM3rVd?si=9bfc6d688a5d435d",
            favorited: false
          },
          {
            name: "The Only Exception",
            artist: "Paramore",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
            source: "https://github.com/charlsyy/adsa/raw/main/Paramore%20-%20The%20Only%20Exception%20(HQ%20Audio).mp3",
            url: "https://open.spotify.com/track/7JIuqL4ZqkpfGKQhYlrirs?si=51efa9cac6eb4132",
            favorited: true
          },
          {
            name: "Paper Rings",
            artist: "Taylor Swift",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
            source: "https://github.com/charlsyy/adsa/raw/main/Taylor%20Swift%20-%20Paper%20Rings%20(Official%20Audio).mp3",
            url: "https://open.spotify.com/track/4y5bvROuBDPr5fuwXbIBZR?si=b8b958df77cc4c51",
            favorited: false
          },
          {
            name: "To the Bone",
            artist: "Pamungkas",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
            source: "https://github.com/charlsyy/adsa/raw/main/Pamungkas%20-%20To%20The%20Bone.mp3",
            url: "https://open.spotify.com/track/3pCt2wRdBDa2kCisIdHWgF?si=0a6e705afefa4571",
            favorited: false
          },
          {
            name: "Fallen",
            artist: "Lola Amour",
            cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
            source: "https://github.com/charlsyy/adsa/raw/main/Lola%20Amour%20-%20Fallen%20(Official%20Lyric%20Video).mp3",
            url: "https://open.spotify.com/track/4mc3rUoMwwiNTHA4al9nNd?si=bb3961e7565f4c13",
            favorited: false
          }
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });