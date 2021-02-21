function convertSecondstoValidFormat(time) {

    let dateObj = new Date(time * 1000);
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds();

    const timeString = minutes.toString().padStart(2, '0')
        + ':' + seconds.toString().padStart(2, '0');

    return timeString;
}

class Player {

    constructor({ el, currentMusic, playButton, progress, duration, currentTime }) {
        this.$playerEl = document.querySelector(el);
        this.$progressEl = document.querySelector(progress);
        this.$durationEl = document.querySelector(duration);
        this.$currentTimeEl = document.querySelector(currentTime);
        this.$playButtonEl = document.querySelector(playButton);
        this.setMusic(currentMusic);
        this.init();
    }

    setListeners() {
        //Setting the play button
        this.$playButtonEl.addEventListener("click", e => {
            e.preventDefault();
            if (!this.isPlaying) {
                this.play();
            } else {
                this.pause();
            }
        });

        //When the audio has finished
        this.$playerEl.onended = () => {
            clearInterval(this.timer);
            this.$currentTimeEl.textContent = "00:00";
            this.$playButtonEl.src = this.$playButtonEl.dataset.play;
            this.$progressEl.querySelector("div").style.width = "0%";
        }
    }

    play(music) {
        //Si nos pasa una musica como parametro
        if (music) {
            this.currentMusic = music;
            this.setMusic(music);
        }

        this.$playButtonEl.src = this.$playButtonEl.dataset.pause;
        this.$playerEl.play();
        this.isPlaying = true;
        this.$playerEl.onloadedmetadata = () => {
            this.$durationEl.textContent = `${convertSecondstoValidFormat(this.$playerEl.duration)}`;
        };
        this.startProgress();
    }

    startProgress() {
        let currentTimePercentage;

        this.timer = setInterval(() => {
            if (!isNaN(this.$playerEl.duration)) {
                currentTimePercentage = (this.$playerEl.currentTime * 100) / this.$playerEl.duration;
                this.$currentTimeEl.textContent = `${convertSecondstoValidFormat(this.$playerEl.currentTime)}`;
                this.$progressEl.querySelector("div").style.width = `${currentTimePercentage}%`;
            }
        }, 1000);
    }

    pause() {
        this.$playerEl.pause();
        this.$playButtonEl.src = this.$playButtonEl.dataset.play;
        clearInterval(this.timer);
        this.isPlaying = false;
    }

    setMusic(music) {
        this.$playerEl.src = music;
    }

    init() {
        this.isPlaying = false;
        this.setListeners();
    }
}

export default Player;