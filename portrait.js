
let bodypix;
let video;
let segmentation;
//let img;
let frame;
//let page;

let scene = 1;

//let text = [];
//let numT = 3;

function preload() {
    //frame = loadImage('assets/frame_pixel.png');

    song = loadSound('assets/Photograph.mp3');
    page = loadSound('assets/page.mp3');

    bodypix = ml5.bodyPix()
    frameRate(24);
}

const options = {

    "outputStride": 8, // 8, 16, or 32, default is 16
    "segmentationThreshold": 0.5 // 0 - 1, defaults to 0.5 

}
function modelReady() {
    console.log('ready!');
    bodypix.segment(gotResults, options);
}





function setup() {
    createCanvas(600, 600);

    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();
    bodypix = ml5.bodyPix(video, modelReady);// *black background for first page
    background(0);

    //image(frame, 300, 300, 600, 600);

}


function mousePressed() {
    push();

    page.play();


    pop();

    if (scene == 1) {
        scene = 2;

        background(0)
    } else if (scene == 2) {
        scene = 3;

    } else if (scene == 3) {

        scene = 4;
    }
    else if (scene == 4) {
        scene = 5;
    }
    else if (scene == 5) {
        scene = 6;
    }


    if (song.isPlaying()) {
        // .isPlaying() returns a boolean

    } else {
        song.play();

    }
}



function draw() {





    if (scene == 1) {
        push();
        background(0);
        textSize(25);
        textAlign(CENTER, CENTER);
        fill(240);
        // text("Love and work are the cornerstones of our humanness. —Sigmund Freud", width / 2, height / 2);
        text("[ please click after a few seconds to continue ]", width / 2, height / 4);
        textSize(48);
        text("A portrait of you", width / 2, height / 2);
        textSize(20);
        text("based off works of 13th century poet, Rumi", width / 2, height / 1.5);
        pop();

    }
    else if (scene == 2) {
        push();

        textSize(25);
        fill(195);
        textAlign(CENTER, CENTER);
        textAlign(CENTER, CENTER);
        text("You've no idea how hard \n I've looked for a gift \n to bring You",
            width / 2, height / 4);

        pop();
        bodypix.segment(gotResults, options);
        //background(41)
    }

    else if (scene == 3) {


        push();
        textSize(20);
        textAlign(CENTER, CENTER);
        fill(195);
        text("Nothing seemed right.", width / 2, height / 4.7);

        pop();

    }
    else if (scene == 4) {


        push();
        textSize(20);
        textAlign(CENTER, CENTER);
        fill(195);
        text("It's no good \n giving my heart and my soul \n because you already have these.", width / 2, height / 4.7);

        pop();




    }
    else if (scene == 5) {


        push();
        textSize(20);
        textAlign(CENTER, CENTER);
        fill(195);
        text("So I've brought you a \n mirror", width / 2, height / 4.7);

        pop();




    }
    else if (scene == 6) {


        push();
        image(video, 0, 0, width, height);
        textSize(37);
        fill(0);
        text('Look at yourself and remember me.', 0, 30);
        text('Look at yourself and remember me.', 0, 60);
        text('Look at yourself and remember me.', 0, 90);
        text('Look at yourself and remember me.', 0, 120);
        text('Look at yourself and remember me.', 0, 150);
        text('Look at yourself and remember me.', 0, 180);
        text('Look at yourself and remember me.', 0, 210);
        text('Look at yourself and remember me.', 0, 240);
        text('Look at yourself and remember me.', 0, 270);
        text('Look at yourself and remember me.', 0, 300);

        pop();




    }



    function gotResults(err, result) {
        push();
        if (err) {
            console.log(err)
            return
            pop();

        }
        // console.log(result);
        segmentation = result;
        push();
        // image(frame, 300, 300, 600, 600);
        image(video, 0, 0, width, height);
        image(segmentation.maskBackground, 0, 0, width, height);

        bodypix.segment(gotResults, options);
        pop();

    }

}

