import React from 'react';
import logo from './logo.svg';
import './App.css';

var MidiWriter = require('midi-writer-js');

class App extends React.Component{

  constructor(){
    super();
    this.state={
      recording: false,
      playing: false,
      pitch: ""
    }
  }

  buttonPressed = (str) => {
    console.log(str)
    this.setState({pitch: 'C4-D4-E4'})
  }

  render() {
    return (
      <div className="pianoBody">

        <svg class="piano" height="230" width="1000">

          <polygon points="200,10 230,10 230,100 245,100 245,220 200,220 200,10" class="white"  id="c" data-key="65" onClick={() => this.buttonPressed("1")}/>
          <polygon points="245,100 260,100 260,10 275,10 275,100 290,100 290,220 245,220 245,100" class="white" data-key="83" id="d" onClick={() => this.buttonPressed("2")}/>
          <polygon points="305,10 335,10 335,220 290,220 290,100 305,100 305,10" class="white" data-key="68" id="e" onClick={() => this.buttonPressed("d2")}/>
          <polygon points="335,10 365,10 365,100 380,100 380,220 335,220 335,10" class="white" data-key="70" id="f" onClick={() => this.buttonPressed("dd2")}/>
          <polygon points="380,100 395,100 395,10 410,10 410,100 425,100 425,220 380,220 380,100" class="white" data-key="71" id="g" onClick={() => this.buttonPressed("4")}/>
          <polygon points="425,100 440,100 440,10 455,10 455,100 470,100 470,220 425,220 425,100" class="white" data-key="72" id="a" onClick={() => this.buttonPressed("4t")}/>
          <polygon points="470,100 485,100 485,10 515,10 515,220 470,220 470,100" class="white" data-key="74" id="b" onClick={() => this.buttonPressed("d4")}/>
          <polygon points="515,10 545,10 545,100 560,100 560,220 515,220 515,10" class="white" data-key="82" id="key5" onClick={() => this.buttonPressed("dd4")}/>
          <polygon points="560,100 575,100 575,10 590,10 590,100 605,100 605,220 560,220" class="white" data-key="84" id="key5" onClick={() => this.buttonPressed("8")}/>
          <polygon points="605,100 620,100 620,10 650,10 650,220 605,220 605,100" class="white" data-key="89" id="key5" onClick={() => this.buttonPressed("8t")}/>
          <polygon points="650,10 680,10 680,100 695,100 695,220 650,220 650,10" class="white" data-key="85" id="key5" onClick={() => this.buttonPressed("d8")}/>
          <polygon points="695,100 710,100 710,10 725,10 725,100 740,100 740,220 695,220 695,100" class="white" data-key="73" id="key5" onClick={() => this.buttonPressed("dd8")}/>
          <polygon points="740,100 755,100 755,10 770,10 770,100 785,100 785,220 740,220 740,100" class="white" data-key="79" id="key5" onClick={() => this.buttonPressed("16t")}/>
          <polygon points="785,100 800,100 800,10 830,10 830,220 785,220 785,100" class="white" data-key="80" id="key5" onClick={() => this.buttonPressed("32")}/>
          <polygon points="230,10 260,10 260,100 230,100 230,10" class="black" data-key="49" id="c_sharp" onClick={() => this.buttonPressed("1")}/>
          <polygon points="275,10 305,10 305,100 275,100 275,10" class="black" data-key="50" id="d_sharp" onClick={() => this.buttonPressed("1")}/>
          <polygon points="365,10 395,10 395,100 365,100 365,10" class="black" data-key="51" id="f_sharp" onClick={() => this.buttonPressed("1")}/>
          <polygon points="410,10 440,10 440,100 410,100 410,10" class="black" data-key="52" id="g_sharp" onClick={() => this.buttonPressed("1")}/>
          <polygon points="455,10 485,10 485,100 455,100 455,10" class="black" data-key="53" id="a_sharp" onClick={() => this.buttonPressed("1")}/>
          <polygon points="545,10 575,10 575,100 545,100 545,10" class="black" data-key="54" id="key4" onClick={() => this.buttonPressed("1")}/>
          <polygon points="590,10 620,10 620,100 590,100 590,10" class="black" data-key="55" id="key4" onClick={() => this.buttonPressed("1")}/>
          <polygon points="680,10 710,10 710,100 680,100 680,10" class="black" data-key="56" id="key4" onClick={() => this.buttonPressed("1")}/>
          <polygon points="725,10 755,10 755,100 725,100 725,10" class="black" data-key="57" id="key4" onClick={() => this.buttonPressed("1")}/>
          <polygon points="770,10 800,10 800,100 770,100 770,10" class="black" data-key="48" id="key4" onClick={() => this.buttonPressed("1")}/>

        </svg>

        <div className="buttons">
          <button disabled={this.state.recording || this.state.playing} onClick={ () => {
              this.setState({recording: true})



            }
          } >
          Start Recording
        </button>

        <button disabled={!this.state.recording || this.state.playing} onClick={ () =>{


            var pitch = this.state.pitch.split("-")
            console.log("Pitch",  pitch);

            var note = new MidiWriter.NoteEvent({pitch: pitch, duration: '4'});
            var tracks = [];

            // Lead Instrument
            tracks[0] = new MidiWriter.Track();
            tracks[0].addEvent(new MidiWriter.ProgramChangeEvent({instrument : 1}));

            // Bass
            tracks[1] = new MidiWriter.Track();
            tracks[1].addEvent(new MidiWriter.ProgramChangeEvent({instrument : 1}));

            // Intro
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));

            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab4'], duration: '16', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb4'], duration: '16', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab4'], duration: 'd2', velocity:100}));

            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '2', wait:'8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));

            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '16', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: '16', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: 'd4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '1', wait:'2', velocity:1}));


            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '4', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F3'], duration: '4', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb3'], duration: '2', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '4', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb3'], duration: '4', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '2', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '4', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '4', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb3'], duration: '2', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '4', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F3'], duration: '4', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb3'], duration: '2', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

            // Main theme part 1
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '4', wait:'1', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: 'd4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4', 'C5', 'D5', 'Eb5'], duration: '16', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5', 'F5'], duration: '8', sequential: 'true', wait:'8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5', 'Ab5'], duration: '16', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5', 'Bb5'], duration: '8', sequential: 'true', wait:'8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab5', 'Gb5'], duration: '16', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab5'], duration: 'd8', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: '16', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb5'], duration: 'd8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '16', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5', 'Eb5'], duration: '8', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Db5'], duration: 'd8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb5'], duration: '16', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb5', 'Db5'], duration: '8', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C5'], duration: 'd8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D5'], duration: '16', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G5'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));

            // Main theme part 2
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: 'd4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4', 'C5', 'D5', 'Eb5'], duration: '16', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5', 'F5'], duration: '8', sequential: 'true', wait:'8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5', 'Ab5'], duration: '16', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5'], duration: 'd2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Db6'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C6'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A5'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: 'd2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A5'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: 'd2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A5'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D5'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb5'], duration: 'd2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Db5'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C5'], duration: 'd8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D5'], duration: '16', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: '2', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G5'], duration: '4', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
            tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));

            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '16', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb3'], duration: '8', velocity:50}));
            tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));

            this.setState({recording: false, pitch: ""})

            var write = new MidiWriter.Writer(tracks);
            var file = write.buildFile();
            var base64 = write.base64()
            var a = document.createElement("a"); //Create <a>
            a.href = "data:image/png;base64," + base64; //Image Base64 Goes here
            a.download = "file.midi"; //File name Here
            a.click(); //Downloaded file

          }
        } >
        Stop Recording
      </button>

      <button disabled={this.state.recording || this.state.playing} onClick={ () => this.setState({playing: true})} >
        Play
      </button>

      <button disabled={!this.state.playing} onClick={ () => this.setState({playing: false})} >
        Stop
      </button>

    </div>

    


  </div>
);
}

}

export default App;
