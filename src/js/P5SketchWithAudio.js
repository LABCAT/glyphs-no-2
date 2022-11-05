import React, { useRef, useEffect } from "react";
import "./helpers/Globals";
import "p5/lib/addons/p5.sound";
import * as p5 from "p5";
import { Midi } from '@tonejs/midi'
import PlayIcon from './functions/PlayIcon.js';
import ShuffleArray from './functions/ShuffleArray.js';

import TriangleGlyph from './classes/TriangleGlyph.js';
import RectangleGlyph from './classes/RectangleGlyph.js';
import InfinityGlyph from './classes/InfinityGlyph.js';
import EllipticalGlyph from './classes/EllipticalGlyph.js';
import FlowerGlyph from './classes/FlowerGlyph.js';
import StarGlyph from './classes/StarGlyph.js';
import LABCATGlyph from './classes/LABCATGlyph.js';

import audio from "../audio/glyphs-no-2.ogg";
import midi from "../audio/glyphs-no-2.mid";

const P5SketchWithAudio = () => {
    const sketchRef = useRef();

    const Sketch = p => {

        p.canvas = null;

        p.canvasWidth = window.innerWidth;

        p.canvasHeight = window.innerHeight;

        p.audioLoaded = false;

        p.player = null;

        p.PPQ = 3840 * 4;

        p.backgroundGlyph = null;
        
        p.animatedGlyphs = [];

        p.animatedGlyphs2 = [];

        p.loadMidi = () => {
            Midi.fromUrl(midi).then(
                function(result) {
                    console.log(result);
                    const noteSet1 = result.tracks[4].notes; // Sampler 1 - JP4 FactoryBass
                    const noteSet2 = result.tracks[6].notes; // Sampler 2 - JP4 FatSaw2
                    const noteSet3 = result.tracks[7].notes.filter((note) => note.midi >= 59); // Synth 3 - Yellow
                    const noteSet4 = result.tracks[5].notes; // Synth 4 - Groovy
                    const noteSet5 = result.tracks[1].notes; // Sampler 1 - GRANDPIANO
                    const noteSet6 = result.tracks[7].notes; // Synth 5 - Sweep Lead
                    const noteSet7 = result.tracks[6].notes; // Synth 6 - SynthBass2
                    const controlChanges = Object.assign({},result.tracks[2].controlChanges); // Filter 1
                    p.scheduleCueSet(noteSet1, 'executeCueSet1');
                    p.scheduleCueSet(noteSet2, 'executeCueSet2');
                    p.scheduleCueSet(noteSet3, 'executeCueSet3');
                    p.scheduleCueSet(controlChanges[Object.keys(controlChanges)[0]], 'executeCueSet4');
                    // p.scheduleCueSet(noteSet4, 'executeCueSet4');
                    // p.scheduleCueSet(noteSet5, 'executeCueSet5');
                    // p.scheduleCueSet(noteSet6, 'executeCueSet6');
                    // p.scheduleCueSet(noteSet7, 'executeCueSet7');
                    
                    p.audioLoaded = true;
                    document.getElementById("loader").classList.add("loading--complete");
                    document.getElementById("play-icon").classList.remove("fade-out");
                }
            );
            
        }

        p.preload = () => {
            p.song = p.loadSound(audio, p.loadMidi);
            p.song.onended(p.logCredits);
        }

        p.scheduleCueSet = (noteSet, callbackName, poly = false)  => {
            let lastTicks = -1,
                currentCue = 1;
            for (let i = 0; i < noteSet.length; i++) {
                const note = noteSet[i],
                    { ticks, time } = note;
                if(ticks !== lastTicks || poly){
                    note.currentCue = currentCue;
                    p.song.addCue(time, p[callbackName], note);
                    lastTicks = ticks;
                    currentCue++;
                }
            }
        } 

        p.setup = () => {
            p.canvas = p.createCanvas(p.canvasWidth, p.canvasHeight);
            p.background(0);
            p.colorMode(p.HSB);
            p.rectMode(p.CENTER);
            p.angleMode(p.DEGREES)
        }

        p.bgHue = 0;

        p.bgOpacity = 0.3;

        p.draw = () => {
            if(p.audioLoaded && p.song.isPlaying()){
                p.clear();
                p.background(p.bgHue, 100, 50, p.bgOpacity);
                if(p.backgroundGlyph) {
                    
                    p.backgroundGlyph.update();
                    p.backgroundGlyph.draw();
                }
                for (let i = 0; i < p.animatedGlyphs2.length; i++) {
                    const glyph = p.animatedGlyphs2[i];
                    glyph.update();
                    glyph.draw();
                }
                for (let i = 0; i < p.animatedGlyphs.length; i++) {
                    const glyph = p.animatedGlyphs[i];
                    glyph.update();
                    glyph.draw();
                }
            }
        }

        p.executeCueSet1 = (note) => {
            const { currentCue } = note,
                vari = p.random(-p.width / 48, p.width / 48),
                size = currentCue >= 110 ? p.width / 8 : p.width / 8;
            let x = p.width / 4 * 3 + vari,
                y = p.height / 4 + vari,
                shapeType = 'octagon',
                direction = p.random(['up']);
            if(currentCue % 22 === 1){
                p.animatedGlyphs = [];
            }
            if(currentCue % 22 === 0 || (currentCue % 22 > 4 && currentCue % 22 < 10) || currentCue % 22 > 14) {
                shapeType = 'pentagon';
                direction = p.random(['down']);
                y = p.height / 4 * 3 + vari;
            }
            if(currentCue % 22 === 0 || currentCue % 22 > 9) {
                x = p.width / 4 + vari;
            }
            p.animatedGlyphs.push(
                new LABCATGlyph(p, x, y, size, shapeType, direction)
            );
        }

        p.backgroundGlyphOpacity = 0.4;

        p.executeCueSet2 = (note) => {
            const { currentCue } = note, 
                x = (currentCue % 3) === 1 ? p.width / 5  : (currentCue % 3) === 2 ? p.width / 5 * 4 : p.width / 2,
                direction = (currentCue % 3) === 1 ? 'right'  : (currentCue % 3) === 2 ? 'left' : p.random(['up', 'down']),
                hueSet = ShuffleArray([30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]);
            p.bgHue = hueSet[0];
            p.backgroundGlyph = new FlowerGlyph(p, x, p.height/2, p.width/16, direction, p.width * 1.5, hueSet);
            p.backgroundGlyph.setOpacity(p.backgroundGlyphOpacity);
        }

        p.executeCueSet3 = (note) => {
            const { currentCue } = note;

            if(currentCue % 6 === 0 || currentCue % 6 > 4) {
                p.animatedGlyphs2.push(
                    new InfinityGlyph(p, p.width/2, p.height/2, p.width/4)
                );
                p.animatedGlyphs2.push(
                    new InfinityGlyph(p, p.width/2, p.height/2, p.width/4)
                );
            }
            else if(currentCue % 6 > 2) {
                p.animatedGlyphs2.push(
                    new TriangleGlyph(p, p.width/2, p.height/2, p.width/8)
                );
                p.animatedGlyphs2.push(
                    new TriangleGlyph(p, p.width/2, p.height/2, p.width/8)
                );
            }
            else {
                p.animatedGlyphs2.push(
                    new RectangleGlyph(p, p.width/2, p.height/2, p.width/8)
                );
                p.animatedGlyphs2.push(
                    new RectangleGlyph(p, p.width/2, p.height/2, p.width/8)
                );
            }
        }

        p.executeCueSet4 = (note) => {
            const { currentCue } = note;
            if(p.backgroundGlyph && currentCue > 1){
                console.log(note.value);
                p.backgroundGlyphOpacity = 0.8 * note.value;
                p.backgroundGlyph.setOpacity(p.backgroundGlyphOpacity);
            }
        }

        p.mousePressed = () => {
            if(p.audioLoaded){
                if (p.song.isPlaying()) {
                    p.song.pause();
                } else {
                    if (parseInt(p.song.currentTime()) >= parseInt(p.song.buffer.duration)) {
                        p.reset();
                    }
                    document.getElementById("play-icon").classList.add("fade-out");
                    p.canvas.addClass("fade-in");
                    p.song.play();
                }
            }
        }

        p.creditsLogged = false;

        p.logCredits = () => {
            if (
                !p.creditsLogged &&
                parseInt(p.song.currentTime()) >= parseInt(p.song.buffer.duration)
            ) {
                p.creditsLogged = true;
                    console.log(
                    "Music By: http://labcat.nz/",
                    "\n",
                    "Animation By: https://github.com/LABCAT/"
                );
                p.song.stop();
            }
        };

        p.reset = () => {

        }

        p.updateCanvasDimensions = () => {
            p.canvasWidth = window.innerWidth;
            p.canvasHeight = window.innerHeight;
            p.canvas = p.resizeCanvas(p.canvasWidth, p.canvasHeight);
        }

        if (window.attachEvent) {
            window.attachEvent(
                'onresize',
                function () {
                    p.updateCanvasDimensions();
                }
            );
        }
        else if (window.addEventListener) {
            window.addEventListener(
                'resize',
                function () {
                    p.updateCanvasDimensions();
                },
                true
            );
        }
        else {
            //The browser does not support Javascript event binding
        }
    };

    useEffect(() => {
        new p5(Sketch, sketchRef.current);
    }, []);

    return (
        <div ref={sketchRef}>
            <PlayIcon />
        </div>
    );
};

export default P5SketchWithAudio;
