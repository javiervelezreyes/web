const HIDDEN = 'hidden';
const PREFIX$1 = 'url(';
const SUFFIX$1 = ')';
const STYLE$1  = 'style';
const IMAGE$1  = 'backgroundImage';
const ON$3     = true;
const OFF$2    = false;
const DELAY  = 200;

let Image = x => PREFIX$1 + x + SUFFIX$1;
let Wait  = x => new Promise (ok => setTimeout (ok, x)); 

function Cover (node) {
  
  function render (image) {
    let state;
    node[STYLE$1][IMAGE$1] = Image (image);

    async function show () {
      if (!state || state == OFF$2) {
        node.classList.remove (HIDDEN);
        state = ON$3;
      }
    }
  
    async function hide (ms) {
      if (!state || state == ON$3) {
        await Wait (ms || DELAY);
        node.classList.add (HIDDEN);     
        state = OFF$2;
      }
    }
  
    return {
      show,
      hide
    }
  }

  return { render }
}

const PLAY$1    = 'Play';
const PAUSE   = 'Pause';
const TIME$1    = 'Time';
const CLOSE   = 'Close';
const END     = 'End';
const SEP$1     = ':';
const QUALITY = 'highres';
const STOP$1    = 1000;
const STEP    = 500;
const SS      = 1;
const MM      = 60;
const HH      = 60*60;
const NO      = 0;
const ON$2      = true;
const OFF$1     = false;
const RATES   = [.25, .5, .75, 1, .5, 1.5, 1.75, 2];

function Video (node) {

  function render (id) {
    return new Promise (function (ok) {
      let state = OFF$1;
      let video = new YT.Player (node, {
        videoId    : id,
        playerVars : {
          autoplay       : NO,
          controls       : NO,
          modestbranding : NO, 
          rel            : NO,
          showinfo       : NO,
        },
        events : {
          onReady : Ready,
          onStateChange ({data}) {
            const PLAYING = YT.PlayerState.PLAYING;
            const PAUSED  = YT.PlayerState.PAUSED;
            const ENDED   = YT.PlayerState.ENDED;
            let stamp     = time ();
            if (data == PLAYING) bindings[PLAY$1]  && bindings[PLAY$1] (stamp);
            if (data == PAUSED)  bindings[PAUSE] && bindings[PAUSE](stamp);
            if (data == ENDED)   bindings[END]   && bindings[END]  (stamp);
          }
        }
      });
      let idx;
      let bindings = {};
      
      async function play () {
        if (state == OFF$1) {
          video.playVideo ();
          state = ON$2;
          timer ();
        }
      }
    
      async function pause () {
        if (state == ON$2) {
          state && video.pauseVideo ();
          state = OFF$1;
        }      
      }
    
      async function stop () {
        pause ();
        video.seekTo (0);
      }
    
      function time (stamp) {
        function doTime (point) {
          let size  =  video.getDuration ();
          let segs  = (point / SS | 0) % 60;
          let mins  = (point / MM | 0) % 60;
          let hours = (point / HH | 0);
          let text  = (size > HH && [hours, mins, segs] || [mins, segs]).map(num => String(num).padStart(2, '0')).join (SEP$1);
          let value = point /size * 100 | 0;
          return { point, hours, mins, segs, text, value }
        }
        let duration = video.getDuration ();
        let point    = stamp && duration * stamp / 100 || !stamp && video.getCurrentTime ();
        let time     = doTime (point);
        let size     = doTime (duration);
        let value    = time.value; 
        stamp && video.seekTo (point);
        return {
          value,
          time,
          size,
          rate : rate ()
        } 
      }
    
      function volume (level) {
        level && video.setVolume (level);
        return video.getVolume ()
      }

      function rate (level) {
        let max  = RATES.length; 
        let idx  = level && (level / 100 * max | 0) || RATES.indexOf (video.getPlaybackRate ());
        let rate = RATES[idx];
        video.setPlaybackRate (rate);
        return 100 * idx / (max - 1) | 0
      }

      function bind (config) {
        bindings = { ...bindings, ...config };
      }

      function timer () {
        idx = setInterval (function () {
          let ctx   = time ();
          let point = ctx.time.point;
          let size  = ctx.size.point;
          let next  = (size - point) * 1000;
          if (state == ON$2)  bindings[TIME$1] && bindings[TIME$1](ctx);
          if (state == ON$2)  next < STOP$1    && bindings[CLOSE](ctx);
          if (state == OFF$1) clearInterval (idx);
        }, STEP);
      }

      function Ready () {
        video.setPlaybackQuality (QUALITY);
        ok ({
          play,
          pause,
          stop,
          time,
          volume,
          rate,
          bind
        });
      }
    })

  }

  return { render } 
}

const HRANGE   = 'horizontal';
const VRANGE   = 'vertical';
const POINTER  = 'pointer';
const PREVIOUS = 'previous';
const NEXT     = 'next';
const STYLE    = 'style';
const WIDTH    = 'width';
const HEIGHT   = 'height';
const LEFT     = 'left';
const BOTTOM   = 'bottom';
const EVENT    = 'change';
const CLICK$1    = 'click';
const DOWN     = 'mousedown';
const UP       = 'mouseup';
const MOVE     = 'mousemove';
const DETAIL   = 'detail';
const DATA     = 'data';
const BUBBLES  = 'bubbles';
const X        = 'clientX';
const Y        = 'clientY';
const PCJ      = '%';
const CLASS    = '.';
const ON$1       = true;

let {min}    = Math;
let {max}    = Math;
let IsVRange = x => [...x.classList].includes (VRANGE);
let IsHRange = x => [...x.classList].includes (HRANGE);

function Node (node) {
  let pointer  = node.querySelector (CLASS + POINTER);
  let previous = node.querySelector (CLASS + PREVIOUS);
  let next     = node.querySelector (CLASS + NEXT);
  return { pointer, previous, next }
}

function Control (node, update) {
  function movePointer (event) {
    update (event);
    event.preventDefault ();
  }
  function onPointerDown (event) {
    update (event);
    document.addEventListener (MOVE, movePointer);
    document.addEventListener (UP,   onPointerUp);
  }
  function onPointerUp () {
    document.removeEventListener (MOVE, movePointer);
    document.removeEventListener (UP,   onPointerUp);
  }
  Node (node)[PREVIOUS].addEventListener (CLICK$1, update);
  Node (node)[NEXT]    .addEventListener (CLICK$1, update);
  Node (node)[POINTER] .addEventListener (DOWN, onPointerDown);
}

function HRange (node) {
  let value = 0; 

  function get () { 
    return value 
  }

  function set (point) {
    value = point;
    Node (node) [POINTER][STYLE][LEFT]  = value + PCJ;
    Node (node)[PREVIOUS][STYLE][WIDTH] = value + PCJ;
    Node (node)    [NEXT][STYLE][WIDTH] = 100 - value + PCJ; 
  }

  Control (node, function update (pos) {
    let box     = node.getBoundingClientRect ();
    let size    = box[WIDTH];
    let offset  = pos[X] - box[LEFT];
    let value   = max (0, min (1, offset / size)) * 100 | 0;
    let event   = new CustomEvent (EVENT, { [DETAIL] : value, [BUBBLES] : ON$1 });
    event[DATA] = value;
    node.dispatchEvent (event);
    set (value);
  });

  return { get, set }
}


function VRange (node) {
  let value = 0; 

  function get () { 
    return value 
  }

  function set (point) {
    value = point;
    Node (node) [POINTER][STYLE][BOTTOM] = value + PCJ;
    Node (node)[PREVIOUS][STYLE][HEIGHT] = value + PCJ;
    Node (node)    [NEXT][STYLE][HEIGHT] = 100 - value + PCJ; 
  }

  Control (node, function update (pos) {
    let box     = node.getBoundingClientRect ();
    let size    = box[HEIGHT];
    let offset  = box[BOTTOM] - pos[Y]; 
    let value   = max (0, min (1, offset / size)) * 100 | 0;
    let event   = new CustomEvent (EVENT, { [DETAIL] : value, [BUBBLES] : ON$1 });
    event[DATA] = value;
    node.dispatchEvent (event);
    set (value);
  });

  return { get, set }
}

function Range (node) {
  return (
    IsHRange (node) && HRange (node) ||
    IsVRange (node) && VRange (node)
  )
}

const VIDEO$1    = '.video';
const OVERLAY  = '.overlay';
const CONTROLS = '.controls';
const PLAY     = '.play';
const STOP     = '.stop';
const TIME     = '.time   .range';
const TEXT     = '.time   .text';
const VOLUME   = '.volume .range';
const RATE     = '.rate   .range';
const CLASSES  = 'classList';
const CLICK    = 'click';
const CHANGE   = 'change';
const ICON     = 'i';
const TOPLAY   = 'fa-play';
const TOPAUSE  = 'fa-pause';
const SEP      = ' / ';
const ON       = true;
const OFF      = false;
const BEGIN    = 50;
const LONG     = 4000;
const SHORT    = 500;

let Begin = x => 100 * x.time ().time.point < BEGIN;

function Player (node) {
  async function render (id, image) {

    let $video    =      node.querySelector (VIDEO$1);
    let $cover    =      node.querySelector (OVERLAY);
    let $controls =      node.querySelector (CONTROLS);
    let $play     = $controls.querySelector (PLAY);
    let $stop     = $controls.querySelector (STOP);
    let $time     = $controls.querySelector (TIME);
    let $text     = $controls.querySelector (TEXT);
    let $volume   = $controls.querySelector (VOLUME);
    let $rate     = $controls.querySelector (RATE);
    
    let video  = await Video ($video).render (id); 
    let cover  =       Cover ($cover).render (image);
    let time   =       Range ($time);
    let volume =       Range ($volume);
    let rate   =       Range ($rate);
    let play   = OFF;

    function Init () {
      let vlevel = video.volume ();
      let rlevel = video.rate   ();
      let tlevel = video.time   ().value;
      volume .set (vlevel);
      rate   .set (rlevel);
      time   .set (tlevel);
      $cover .addEventListener (CLICK,  onPlay);
      $play  .addEventListener (CLICK,  onPlay);
      $stop  .addEventListener (CLICK,  onStop);
      $time  .addEventListener (CHANGE, onTime);
      $volume.addEventListener (CHANGE, onVolume);
      $rate  .addEventListener (CHANGE, onRate);
    }
    
    function refresh (state) {
      let $icon = $play.querySelector (ICON);
      $icon[CLASSES].remove (TOPLAY);
      $icon[CLASSES].remove (TOPAUSE);
      if (state == ON ) $icon[CLASSES].add (TOPAUSE);
      if (state == OFF) $icon[CLASSES].add (TOPLAY);
      play = state;
    }

    async function onPlay () {
      async function doPlay () {
        refresh (ON);
        let begin = Begin (video); 
        let delay = begin && LONG || !begin && SHORT;
        await video.play ();
        await cover.hide (delay);
      }
      async function doPause () {
        refresh (OFF);
        await cover.show  ();
        await video.pause ();
      }
      let state = play;
      if (state == OFF) await doPlay  (); 
      if (state == ON)  await doPause ();
    }

    async function onStop () {
      await cover.show ();
      await video.stop ();
      refresh (OFF);
    }

    async function onTime ({ data }) {
      video.time (data);
    }

    async function onVolume ({ data }) {
      video.volume (data-1);
    }

    async function onRate ({ data }) {
      video.rate (data);
    }

    video.bind ({

      async Time (ctx) {
        let value  = ctx.time.value;
        let text   = ctx.time.text;
        let total  = ctx.size.text;
        $text.textContent = [text, total].join (SEP);
        time.set (value);
      },

      Close () {
        cover.show ();
      }
    });

    Init ();

  }

  return { render }
}

const SCRIPT = 'script';
const PATH   = 'https://www.youtube.com/iframe_api';
const PREFIX = 'https://img.youtube.com/vi/';
const SUFFIX = '/0.jpg';
const LOAD   = 'load';
const READY  = 'onYouTubeIframeAPIReady';
const PLAYER = '.player';
const VIDEO  = 'video';
const IMAGE  = 'image';
const ASYNC  = true;

let getImage = x => PREFIX + x + SUFFIX;

function Start (node) {

  function load () {
    return new Promise (function (ok) {
      let script    = document.createElement (SCRIPT);
      script.src    = PATH;
      script.async  = ASYNC;
      window[READY] = ok;
      document.body.appendChild (script);
    })
  }

  function execute () {
    node.querySelectorAll (PLAYER).forEach (function ($player) {
      let video  = $player.getAttribute (VIDEO);
      let image  = $player.getAttribute (IMAGE) || getImage (video);
      let player = Player ($player);
      video && player.render (video, image);
    });
  }

  (function () {
    window.addEventListener (LOAD, async function () {
      await load ();
      execute ();
    });
  })();

}

Start (document);
