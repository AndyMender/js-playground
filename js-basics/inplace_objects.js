// Simple object with a 'this' reference to itself
const video = {
    title: 'Sponge Bob',
    tags: ['action', 'romance', 'thriller'],
    play() {
        console.log(`Starting video ${this}...`);
    },
    showTags() {
        // 'forEach' uses the global scope inside the passed function by default.
        // However, arrow functions respect local scope!
        this.tags.forEach((tag) => {
            console.log(`'${this.title}' - '${tag}'`);
        });

        // NOTE: The for-of loop would be simpler, since it doesn't alter the scope
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
// NOTE: it's possible inject a custom 'this' object even to a regular function call
playVideo.call({ title: 'Black Jack - 2', director: 'Hideyoshi Takanaka' });
playVideo.apply({ title: 'Black Jack - 2', director: 'Hideyoshi Takanaka' });
// 'bind' generates a new function - useful in Array methods requiring a callable or in factory functions
const playVideoCustom = playVideo.bind({ title: 'Black Jack - 2', director: 'Hideyoshi Takanaka' });


// Below is treated like a class constructor so 'this' refers to an object instance
function Video(title) {
    this.title = title;
    console.log(`Creating new video with title '${this.title}'...`)
}

const v = new Video('Black Jack');
console.log(`Created video entry for '${v.title}'...`);
