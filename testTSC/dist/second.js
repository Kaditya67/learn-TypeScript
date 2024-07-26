"use strict";
class Insta {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    funcClick() {
        console.log("Photo Capture");
    }
}
class Twitter {
    constructor(postName, createrName) {
        this.postName = postName;
        this.createrName = createrName;
    }
    getPostid() {
        return 7;
    }
}
class TwPost extends Twitter {
    constructor(postName, createrName) {
        super(postName, createrName);
        this.postName = postName;
        this.createrName = createrName;
    }
    getPostTime() {
        console.log("Post Time"); // Implementing abstract method
    }
}
