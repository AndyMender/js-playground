// Simple object with a 'this' reference to itself
const video = {
    title: 'Sponge Bob',
    tags: ['action', 'romance', 'thriller'],
    play() {
        console.log(`Starting video ${this}...`);
    },
    showTags() {
        // 'forEach' uses the global scope inside the passed function by default.
        // We need to explicit set it to the 'this' of the local object to fix scoping.
        // NOTE: The for-of loop would be simpler, since it doesn't alter the scope
        this.tags.forEach((tag) => {
            console.log(`'${this.title}' - '${tag}'`);
        }, this);

        // for (let tag of this.tags)
        //   console.log(`'${this.title}' - '${tag}'`);
    }
}

// Add new function property - 'this' refers to the object to which the property is attached
video.stop = function() {
    console.log(`Stopping video ${this}...`);
}

video.play();
video.stop();
video.showTags();

// When called from the top level, 'this' refers to the module/script itself
function playVideo() {
    console.log(`Playing global video ${this}...`);
}
playVideo();

// Below is treated like a class constructor so 'this' refers to an object instance
function Video(title) {
    this.title = title;
    console.log(`Creating new video with title '${this.title}'...`)
}

const v = new Video('Black Jack');
console.log(`Created video entry for '${v.title}'...`);
