new Vue({
  el: "#app",
  data() {
    return {
      showIntro: true,
      isOpenedTop: false,
      albumFinished: false, // keep track if album is fully viewed
      items: [
        { img1: "images/pic1.jpg", img2: "images/pic2.jpg", img3: "images/pic3.jpg", title: "nux", isOpen: false },
        { img1: "images/pic4.jpg", img2: "images/pic5.jpg", img3: "images/pic6.jpg", title: ":p", isOpen: false },
        { img1: "images/pic7.jpg", img2: "images/pic9.jpg", img3: "images/pic8.jpg", title: ">:(, :>, 🧍‍♀️", isOpen: false },
        { img1: "images/pic10.jpg", img2: "images/pic11.jpg", img3: "images/pic12.jpg", title: "?", isOpen: false },
        { img1: "images/pic13.jpg", title: "hbd, ange.", isOpen: false }
      ]
    };
  },
  computed: {
    allOpened() {
      return this.items.every(page => page.isOpen);
    },
    canContinue() {
      return this.albumFinished; // ✅ use this for the button
    }
  },
  methods: {
    startAlbum() {
      this.showIntro = false;
      this.isOpenedTop = false;
      this.albumFinished = false; // reset button lock
      this.items.forEach(p => p.isOpen = false);
    },
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },
    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;

        // ✅ when the last page is flipped and all opened
        if (idx === this.items.length - 1 && this.allOpened) {
          this.albumFinished = true;       // unlock button
          this.isOpenedTop = false;        // close album
          this.items.forEach(p => p.isOpen = false); // reset pages
        }
      }
    }
  }
});
